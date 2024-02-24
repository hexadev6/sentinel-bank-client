import React from "react";
import { useLoaderData } from "react-router-dom";
import CommonBanner from "../../Shared/CommonBanner/CommonBanner";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { CiShare2 } from "react-icons/ci";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";
import "./notice.css";

const ReadNotice = () => {
  const data = useLoaderData();
  // console.log(data)

  const svgs = [
    {
      svg: <RiFacebookLine />,
    },
    {
      svg: <TfiTwitter />,
    },
    {
      svg: <RiLinkedinLine />,
    },
    {
      svg: (
        <svg
          width={20}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
              stroke="#6b7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div className="container mx-auto  gap-5 justify-between items-center text-editor px-4">
      <Card className="mt-10 overflow-hidden shadow-none  rounded">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src={data?.image}
            alt="ui/ux review check"
            className="w-full  h-44 sm:h-96  md:h-[550px] rounded"
          />
        </CardHeader>
        <CardBody className="p-0 mt-10">
          <Typography variant="h4" color="blue-gray">
            {data?.title}
          </Typography>
          <Typography
            color="gray"
            variant="lead"
            className="mt-3 font-normal "
            dangerouslySetInnerHTML={{
              __html: `${data?.description}`,
            }}
          />
           <Typography className="font-normal flex sm:hidden">
            Published on: {data?.createdAt.split("T")[0]}
          </Typography>
        </CardBody>
        <CardFooter className="flex  items-center justify-between p-0  py-10">
          <div className=" relative -rotate-90 ">
            <div className="group flex flex-col items-center justify-center w-max mx-auto absolute top-0 left-[50%] -translate-x-1/2">
              {/* + icon  */}
              <div className="flex justify-center w-8 sm:w-14 h-8 sm:h-14 bg-blue-gray-900 rounded-full items-center group-hover:rotate-[-270deg] rotate-[90deg]  duration-700">
                <CiShare2 className="text-white w-full h-full sm:p-3 p-2" />
              </div>
              {/* icon container  */}
              <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full overflow-x-auto
               ">
                {/* Icon Map */}
                {svgs?.map((svg, idx) => (
                  <div
                    key={idx}
                    className={`sm:w-10 sm:h-10 w-8 h-8 rotate-90 rounded-full scale-0 group-hover:scale-100 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] opacity-0 group-hover:opacity-100 ${
                      idx === 0
                        ? "delay-[400ms] group-hover:delay-100"
                        : idx === 1
                        ? "delay-300 group-hover:delay-200"
                        : idx === 2
                        ? "delay-200 group-hover:delay-300"
                        : idx === 3
                        ? "delay-100 group-hover:delay-[400ms]"
                        : "delay-[400ms] group-hover:delay-100"
                    }`}
                  >
                    <div className="w-full h-full bg-white hover:bg-slate-200 flex justify-center items-center rounded-full duration-300">
                      {svg?.svg}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Typography className="font-normal hidden sm:flex ">
            Published on: {data?.createdAt.split("T")[0]}
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ReadNotice;
