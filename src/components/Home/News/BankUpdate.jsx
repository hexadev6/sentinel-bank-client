import React, { useState } from "react";
import useAllNotice from "../../../Hooks/useAllNotice";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import CommonBanner from "../../Shared/CommonBanner/CommonBanner";
import bg2 from "../../../assets/banner/bg2.jpg";
import { Link } from "react-router-dom";

const BankUpdate = () => {
  const { isPending, refetch, error, allnotice } = useAllNotice();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByTime, setSortByTime] = useState(true);

  // Filter news based on search term
  const filteredNews = allnotice?.filter((news) =>
    news?.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );


  const sortedNews = [...filteredNews].sort((a, b) =>
    sortByTime ? new Date(b.createdAt) - new Date(a.createdAt) : new Date(a.createdAt) - new Date(b.createdAt)
  );

  const HandleShort = () => {
    setSortByTime((prevSortByTime) => !prevSortByTime);
  };

  return (
    <div>
      <CommonBanner
        title="Our Updates"
        img={bg2}
        subtitle={"Let's Connect to Serve You Better"}
        orientation={"left"}
      />
      <div className="container mx-auto  gap-5 justify-between items-center px-4">
        {/* news maping */}
        <div className="mt-10 flex sm:flex-row flex-col items-start justify-between sm:items-center sm:gap-4 gap-2">
          <input
            type="text"
            placeholder="Search Notice..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded outline-0 w-full sm:w-auto"
          />
          <button
            onClick={HandleShort}
            className="bg-gray-100 py-2  px-7 rounded w-full sm:w-auto"
          >
            Sort by time {sortByTime ? "New to Old" : "Old to New"}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 justify-between items-center">
          {sortedNews.length == 0 ? (
            <p>No notice found</p>
          ) : (
            sortedNews?.map((news, index) => (
              <Card
                key={index}
                className="w-full flex-col rounded-none h-full "
              >
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
                    {news?.createdAt.split("T")[0]}
                  </p>
                  {/* title */}
                  <Typography variant="h6" color="blue-gray" className="mb-2 ">
                    {news.title}
                  </Typography>
                  {/* content */}
                  <Typography
                    color="gray"
                    className="mb-8 font-normal flex-1"
                    dangerouslySetInnerHTML={{
                      __html: `${news?.description
                        .split(" ")
                        .slice(0, 20)
                        .join(" ")} ...`,
                    }}
                  />
                  {/*  button */}
                  <Link to={`/bankUpdate/${news?._id}`}>
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
                  </Link>
                </CardBody>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BankUpdate;
