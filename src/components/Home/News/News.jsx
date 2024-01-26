import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import SubHeading from "../../Shared/Heading Title/SubHeading";

const News = () => {
  const [latesNews, setLatesNews] = useState([]);
  const [showAll, setShowAll] = useState([]);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    axios
      .get("/news.json")
      .then((res) => {
        setLatesNews(res.data);
        setShowAll(res.data.slice(0, 3));
      })
      .catch((err) => console.log(err));
  }, []);

  const HandleShow = () => {
    setIsToggle((prevToggle) => !prevToggle);
    if (!isToggle) {
      setShowAll(latesNews);
    } else {
      setShowAll(latesNews.slice(0, 3));
    }
  };

  return (
    <div className="px-4 mt-20">
      <SubHeading title={"Our latest update"} />
      <div className="container mx-auto  gap-5 justify-between items-center ">
        {/* news maping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 justify-between items-center">
          {showAll.map((news) => (
            <Card className="w-full flex-col rounded-none h-full ">
              {/* img */}
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 shrink-0 rounded-none h-[200px] "
              >
                <img
                  src={news.image}
                  alt="card-image"
                  className="w-full h-full  object-cover"
                />
              </CardHeader>
              <CardBody className="flex flex-col  flex-1 h-full">
                {/* date */}
                <p className="mb-4 uppercase font-light text-light-gray">
                  {news.date}
                </p>
                {/* title */}
                <Typography variant="h6" color="blue-gray" className="mb-2 ">
                  {news.title}
                </Typography>
                {/* content */}
                <Typography color="gray" className="mb-8 font-normal flex-1">
                  {news.content}
                </Typography>
                {/*  button */}
                <a href="#" className="inline-block">
                  <Button
                    variant="text"
                    className="flex items-center gap-2 border hover:border-nevy-blue hover:text-nevy-blue rounded-none bg-nevy-blue text-white"
                  >
                    Read full
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* conditional button */}
        <div className="text-center">
          <Button
            onClick={HandleShow}
            variant="text"
            className="mt-10 gap-2 border hover:bg-nevy-blue hover:text-text-white rounded-none bg-nevy-blue text-white"
          >
            {isToggle ? " Show Less" : "Show More"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default News;
