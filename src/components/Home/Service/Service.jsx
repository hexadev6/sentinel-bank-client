import React from "react";
import SubHeading from "../../Shared/Heading Title/SubHeading";
import { accountType } from "./accountType";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { RiLuggageDepositFill } from "react-icons/ri";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { RiBaseStationLine } from "react-icons/ri";
import { GiJusticeStar } from "react-icons/gi";
import { TbPointFilled } from "react-icons/tb";

const Service = () => {
  return (
    <>
      <SubHeading title={"Account Service"} />
      <div className="container mx-auto px-4 md:px-0 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 justify-between items-center">
          {accountType.map((item) => (
     
              <div className="flex group h-full" key={item.id}>
              <Card className=" group-hover:col-span-2   rounded-none border shadow-none duration-700 ease-in-out transition-all relative justify-between  items-center ">
                <CardBody className="z-10 flex-1 w-full">
                  {item.title === "Checking Accounts" ? (
                    <FaMoneyCheckAlt className="mb-4 h-12 w-12 text-nevy-blue" />
                  ) : item.title === "Savings Accounts" ? (
                    <GiWallet className="mb-4 h-12 w-12 text-nevy-blue" />
                  ) : item.title === "Certificates of Deposit (CDs)" ? (
                    <RiLuggageDepositFill className="mb-4 h-12 w-12 text-nevy-blue" />
                  ) : item.title === "Individual Retirement Accounts (IRAs)" ? (
                    <FaHandHoldingDollar className="mb-4 h-12 w-12 text-nevy-blue" />
                  ) : item.title === "Specialty Accounts" ? (
                    <GiJusticeStar className="mb-4 h-12 w-12 text-nevy-blue" />
                  ) : (
                    <RiBaseStationLine className="mb-4 h-12 w-12 text-nevy-blue" />
                  )}

                  {/* <FaMoneyCheckAlt /> */}
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 font-normal"
                  >
                    {item.title}
                  </Typography>
                  <Typography className="flex-1">{item.description}</Typography>
                </CardBody>

                <CardBody className="bg-gray-300 flex w-fit flex-wrap h-full right-0 absolute top-0 opacity-0 group-hover:opacity-100 flex-col justify-center translate-x-20 group-hover:translate-x-0 -z-1 transition-all ease-in-out duration-700 z-30">
                  {item.type.map((type) => (
                    <p className="flex gap-2 group-[menu] ">
                      <span>
                        <TbPointFilled className="text-xl text-nevy-blue " />
                      </span>
                      <Typography className="hover:text-nevy-blue hover:tracking-wider transition-all duration-150 cursor-pointer">
                        {type}
                      </Typography>
                    </p>
                  ))}
                </CardBody>
              </Card>
            </div>
          
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
