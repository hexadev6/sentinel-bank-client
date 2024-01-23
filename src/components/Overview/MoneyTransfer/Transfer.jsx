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
    <div className="justify-between  flex lg:flex-col gap-5">
        {/* for total balance */}
      <Card className="bg-blue-500 rounded text-white w-full">
        <CardBody>
          <Typography variant="h5" className="mb-2">
            Total Balance
          </Typography>
          <Typography variant="h1">$17524</Typography>
          <span className="bg-green-200 text-green-800 text-base rounded px-2 py-1 flex items-center w-fit mt-5">
          <span>
            26.0532%
          </span>
          <FaArrowTrendUp className="ml-4" />
        </span>
        </CardBody>
      </Card>
      {/* deposit */}
      <Card className="bg-light-green rounded text-white w-full">
        <CardBody>
          <Typography variant="h5" className="mb-2">
            Deposit
          </Typography>
          <Typography variant="h1">$1033</Typography>
          <span className="bg-green-200 text-green-800 text-base rounded px-2 py-1 flex items-center w-fit mt-5">
          <span>
            6.0545%
          </span>
          <FaArrowTrendUp className="ml-4" />
        </span>
        </CardBody>
      </Card>
      {/* Withdraw */}
      <Card className="bg-red-300 rounded text-white w-full">
        <CardBody>
          <Typography variant="h5" className="mb-2">
            Deposit
          </Typography>
          <Typography variant="h1">$1033</Typography>
          <span className="bg-red-200 text-red-800 text-base rounded px-2 py-1 flex items-center w-fit mt-5">
          <span>
           43.354%
          </span>
          <FaArrowTrendDown className="ml-4" />
        </span>
        </CardBody>
      </Card>
      {/* Savings */}
      <Card className="bg-yellow-300 rounded text-black w-full">
        <CardBody>
          <Typography variant="h5" className="mb-2">
            Savings
          </Typography>
          <Typography variant="h1">$2343</Typography>
          <span className="bg-green-200 text-green-800 text-base rounded px-2 py-1 flex items-center w-fit mt-5">
          <span>
           10.873%
          </span>
          <FaArrowTrendUp className="ml-4" />
        </span>
        </CardBody>
      </Card>
    </div>
  );
};

export default Transfer;
