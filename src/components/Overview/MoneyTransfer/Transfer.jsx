import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const Transfer = () => {
  return (
    <div className="justify-between flex flex-col gap-2 w-full">
     
      {/* deposit */}
      <Card className="bg-nevy-blue  rounded text-white">
        <CardBody>
          <Typography variant="h6" className="mb-2 font-light">
            Deposit
          </Typography>
          <Typography variant="h3" className="font-medium">
            $1033.00
          </Typography>
          <span className="bg-white text-black text-sm  rounded px-2 py-1 flex items-center w-fit mt-5">
            <span>6.0545%</span>
            <FaArrowTrendUp className="ml-4" />
          </span>
        </CardBody>
      </Card>
      {/* withdraw */}
      <Card className="bg-nevy-blue  rounded text-white">
        <CardBody>
          <Typography variant="h6" className="mb-2 font-light">
            Withdraw
          </Typography>
          <Typography variant="h3" className="font-medium">
            $1344.00
          </Typography>
          <span className="bg-white text-black text-sm  rounded px-2 py-1 flex items-center w-fit mt-5">
            <span>43.354%</span>
            <FaArrowTrendDown className="ml-4" />
          </span>
        </CardBody>
      </Card>
      {/* Savings */}
      <Card className="bg-nevy-blue rounded text-white">
        <CardBody>
          <Typography variant="h6" className="mb-2 font-light">
            Savings
          </Typography>
          <Typography variant="h3" className="font-medium">
            $2343.00
          </Typography>
          <span className="bg-white text-black text-sm  rounded px-2 py-1 flex items-center w-fit mt-5">
            <span>10.873%</span>
            <FaArrowTrendDown className="ml-4" />
          </span>
        </CardBody>
      </Card>
       {/* for total balance */}
       <Card className="bg-nevy-blue  rounded text-white">
        <CardBody>
          <Typography variant="h6" className="mb-2 font-light">
            Total Balance
          </Typography>
          <Typography variant="h3" className="font-medium">
            $17524.00
          </Typography>
          <span className="bg-white text-black text-sm  rounded px-2 py-1 flex items-center w-fit mt-5">
            <span>26.0532%</span>
            <FaArrowTrendUp className="ml-4" />
          </span>
        </CardBody>
      </Card>
    </div>
  );
};

export default Transfer;
