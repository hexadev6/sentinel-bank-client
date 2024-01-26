import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

import SubHeading from "../../Shared/Heading Title/SubHeading";
import Rating from "./Rating";
import { Button } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Pagination from "./Pagination";

const CustomerReview = () => {
  // state
  const [customerFeedback, setCustomerFeedback] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState([]);

  // useEffects
  useEffect(() => {
    axios
      .get("./feedback.json")
      .then((res) => setCustomerFeedback(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedData(customerFeedback.slice(startIndex, endIndex));
  }, [currentPage, customerFeedback]);

  // declaration for pagination
  const itemsPerPage = 2;
  const totalPgNum = Math.ceil(customerFeedback.length / itemsPerPage);

  // pagination logic
  const next = () => {
    if (currentPage < totalPgNum) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="px-4 lg:mb-40 ">
      <div className="container mx-auto mt-24 ">
        {/* feedback heading */}
        <SubHeading title="Customer feedback" />

        {/* grid with picture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-5  lg:justify-between items-center mt-24  lg:relative  ">
          {/* bank img */}
          <img
            src="https://media.istockphoto.com/id/640267784/photo/bank-building.jpg?s=612x612&w=0&k=20&c=UTtm4t6WR-MLwO6ATq5l6n3SoCc6HpaClEFZMxO1Nek="
            alt=""
            className="text-center w-full"
          />

          <div className="flex flex-col gap-5 justify-between items-center lg:items-end h-full lg:absolute top-0 bottom-0 left-[300px] xl:left-[460px]">
            {/*add feedback*/}
            <p className="bg-nevy-blue text-white py-2 capitalize cursor-pointer px-3  w-fit">
              give your feedback
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-between items-center ">
              {/* review section */}
              {displayedData.map((feedback) => (
                <Card
                  color="transparent"
                  shadow={false}
                  className=" w-full rounded bg-white flex-shrink-0 border shadow p-5 flex-1"
                >
                  <CardHeader
                    color="transparent"
                    floated={false}
                    shadow={false}
                    className="mx-0 flex items-center gap-4 pt-0 pb-8"
                  >
                    <Avatar
                      size="lg"
                      variant="circular"
                      src={feedback.customerImg}
                      alt="tania andrew"
                      className="w-20 h-20"
                    />
                    <div className="flex w-full flex-col gap-0.5 flex-1">
                      <div className="flex flex-wrap gap-1 items-center justify-between ">
                        <Typography variant="h5" color="blue-gray">
                          {feedback.name}
                        </Typography>
                        <div className=" flex items-center gap-0">
                          <Rating rating={feedback.rating} />
                        </div>
                      </div>
                      <Typography color="blue-gray">
                        {feedback.country}
                      </Typography>
                    </div>
                  </CardHeader>
                  <CardBody className="p-0 ">
                    <Typography>{feedback.detailsReview}</Typography>
                  </CardBody>
                </Card>
              ))}
            </div>
            {/* pagination */}
            <div className="flex flex-wrap items-end justify-center sm:justify-between gap-2 z-30 px-4">
              {/* prev button */}
              <Button
                variant="text"
                className="flex justify-center items-center gap-2 rounded-none hover:bg-nevy-blue hover:text-white"
                onClick={prev}
                disabled={currentPage === 1}
              >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
              </Button>
              {/* pg number */}
              <Pagination
                totalPgNum={totalPgNum}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />

              {/* next button */}
              <Button
                variant="text"
                className="flex justify-center items-center gap-2 hover:bg-nevy-blue hover:text-white rounded-none"
                onClick={next}
                disabled={currentPage === totalPgNum}
              >
                Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
