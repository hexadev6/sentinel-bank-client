import React from "react";
import SubHeading from "../../Shared/Heading Title/SubHeading";
import { Typography } from "@material-tailwind/react";
import CountUp from 'react-countup';

const Statistics = () => {
  const statisticsData = [
    {
      title: "Number of Customers",
      number: 500,
      symbol: "M",
    },
    {
      title: "Total Deposits",
      number: 80000,
      symbol: "M",
    },
    {
      title: "Total Profit",
      number: 300000,
      symbol: "$",
    },
    {
      title: "Loan Approval Rate",
      number: 95,
      symbol: "%",
    },
    {
      title: "Transactions Processed",
      number: 15000,
      symbol: "M",
    },
    {
      title: "Credit Card Holders",
      number: 250000,
      symbol: "+",
    },
  ];

  return (
    <div className="bg-white py-10 shadow-xl w-fit mx-auto px-10 relative -top-24">
      <SubHeading title="Our success" />
      <p className="text-center">
        Key Statistics That Define Our Success in Numbers
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:grid-cols-6 justify-center items-center sm:px-10 py-16 ">
        {statisticsData?.map((data) => (
          <div className="px-2 flex flex-col items-center justify-center text-center border-r-4 border-r-medium-green xl:last:border-r-0">
            <div className="flex items-end gap-1">
                <CountUp end={`${data.number}`}  className="text-medium-green text-3xl font-bold" />
              
              <Typography variant="h4" className="text-medium-green">
                {data.symbol}
              </Typography>
            </div>
            <p className="">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
