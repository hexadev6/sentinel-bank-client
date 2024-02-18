import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Dialog,
} from "@material-tailwind/react";

import SubHeading from "../../Shared/Heading Title/SubHeading";
import CustomRating from "./Rating";
import { Button } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Pagination from "./Pagination";
import { Rating } from "@material-tailwind/react";
import multiImgUpload from "../../../Hooks/multiImgUpload";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import swal from "sweetalert";
import { useQuery } from "@tanstack/react-query";

const CustomerReview = () => {
  // state
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState([]);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ratingValue, setRatingValue] = useState(1);
  const axiosPublic = useAxiosPublic();
  const handleOpen = () => setOpen((cur) => !cur);

  const handleRatingChange = (newValue) => {
    setRatingValue(newValue);
    // console.log(newValue);
  };

  const {
    isPending,
    refetch,
    error,
    data: allreviews,
  } = useQuery({
    queryKey: ["allreviews"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get("/allReviews");
        // console.log(res.data);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  // declaration for pagination
  const itemsPerPage = 2;
  const totalPgNum = Math.ceil(allreviews?.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedData(allreviews?.slice(startIndex, endIndex));
  }, [currentPage, allreviews]);

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

  const handleReview = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const name = form.name.value;
    const country = form.country.value;
    const review = form.review.value;
    const image = form.photo.files[0];

    let photo =
      "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg";

    if (image) {
      photo = await multiImgUpload(image);
    }

    const reviews = {
      name: name,
      country: country,
      detailsReview: review,
      rating: ratingValue,
      customerImg: photo,
    };

    await axiosPublic
      .post("/allReviews", reviews)
      .then((res) => {
        // console.log(res.data);
        setOpen(!open);
        setIsLoading(false);
        refetch();
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
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
            <button
              onClick={handleOpen}
              className="bg-nevy-blue text-white py-2 capitalize cursor-pointer px-3  w-fit"
            >
              give your feedback
            </button>

            {/* <Button >Sign In</Button> */}
            <Dialog
              size="xs"
              open={open}
              handler={handleOpen}
              className="bg-transparent shadow-none"
            >
              <Card className="mx-auto w-full max-w-4xl rounded-none">
                <CardBody className="flex flex-col gap-4">
                  <Typography variant="h4" color="blue-gray">
                    Give your review
                  </Typography>
                  <Typography
                    className="mb-3 font-normal"
                    variant="paragraph"
                    color="gray"
                  >
                    Your opinion is metter to us.
                  </Typography>
                  <form action="" onSubmit={handleReview}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-between  items-center">
                      <div className="flex flex-col gap-3">
                        <input
                          required
                          color="indigo"
                          type="text"
                          name="name"
                          placeholder="your name"
                          className={"py-2 px-4 rounded outline-0 border"}
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <input
                          required
                          color="indigo"
                          type="text"
                          name="country"
                          placeholder="country name"
                          className={"py-2 px-4 rounded outline-0 border"}
                        />
                      </div>
                    </div>
                    <div className="gap-2 flex mt-2  flex-col">
                      <textarea
                        required
                        color="indigo"
                        type="text"
                        name="review"
                        rows={4}
                        placeholder="write your opinion here...."
                        className={"py-2 px-4 rounded outline-0 border w-full"}
                      />
                      <input
                        type="file"
                        id="Profile"
                        name="photo"
                        accept="image/*"
                        className={`p-2 mt-0 w-full rounded outline-0 border`}
                      />
                    </div>

                    <div className="flex gap-5 mt-2 items-center ">
                      <p>Give rating: </p>
                      <Rating
                        required
                        value={ratingValue}
                        onChange={handleRatingChange}
                      />
                    </div>

                    <button
                      disabled={isLoading}
                      variant="text"
                      className={` w-full py-2 px-4 hover:text-white mt-3  rounded bg-nevy-blue text-white  hover:bg-black  `}
                    >
                      {isLoading ? "Posting..." : " Post your review"}
                    </button>
                  </form>
                </CardBody>
              </Card>
            </Dialog>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-between items-center ">
              {/* review section */}
              {displayedData?.map((feedback) => (
                <Card
                  key={feedback._id}
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
                      src={feedback?.customerImg}
                      alt="tania andrew"
                      className="w-20 h-20"
                    />
                    <div className="flex w-full flex-col gap-0.5 flex-1">
                      <div className="flex flex-wrap gap-1 items-center justify-between ">
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="capitalize"
                        >
                          {feedback?.name}
                        </Typography>
                        <div className=" flex items-center gap-0">
                          <CustomRating rating={feedback.rating} />
                        </div>
                      </div>
                      <Typography color="blue-gray" className="capitalize">
                        {feedback?.country}
                      </Typography>
                    </div>
                  </CardHeader>
                  <CardBody className="p-0 ">
                    <Typography>{feedback?.detailsReview}</Typography>
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
