import React from "react";
import { Typography } from "@material-tailwind/react";
import CountUp from "react-countup";

const Statistics = () => {
  const statisticsData = [
    {
      title: "Happy Customer",
      number: 5343600,
    },
    {
      title: "Years in Banking",
      number: 20,
    },
    {
      title: "Branches",
      number: 200,
    },
    {
      title: "ATMs",
      number: 345,
    },
    {
      title: "Agent Outlets",
      number: 3252,
    },
  ];

  return (
    <div className="px-4">
      <div className="bg-nevy-blue p-10   mx-auto container relative -top-16 text-white">
        <div className="grid grid-cols-1 md:flex flex-wrap w-full gap-10 justify-center items-center px-10 py-16 ">
          {statisticsData?.map((data) => (
            <div className="px-2 flex flex-col items-center justify-center text-center " key={data.title}>
              <div className="flex items-center gap-1">
                <CountUp
                  end={`${data.number}`}
                  className="text-white text-3xl sm:text-5xl font-bold"
                />
                <Typography variant="h2">+</Typography>
              </div>
              <p className="text-base sm:text-2xl mt-1 font-light">
                {data.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
