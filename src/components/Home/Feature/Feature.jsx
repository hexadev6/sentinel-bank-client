import React from "react";
import SubHeading from "../../Shared/Heading Title/SubHeading";
import { featureType } from "./featureType";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaCcMastercard, FaLaptop, FaPersonBooth } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { IoDocumentLockSharp } from "react-icons/io5";
import { AiFillCustomerService } from "react-icons/ai";

const Feature = () => {
  return (
    <div className="px-4">
      {/* heading */}
      <SubHeading title={"Our Feature"} />
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 justify-between items-center">
          {/* feature maping */}
          {featureType.map((item) => (
            <div className="flex flex-col h-full group " key={item.id}>
              {/* card */}
              <Card className="rounded-none border shadow-none flex-1 group-hover:bg-nevy-blue group-hover:text-white transition-all duration-500">
                <CardBody className="z-10 ">
                  {/* icon */}
                  {item.title === "Online Account Management" ? (
                    <FaLaptop className="mb-4 h-12 w-12 text-nevy-blue group-hover:text-white transition-all duration-500 " />
                  ) : item.title === "Card Controls" ? (
                    <FaCcMastercard className="mb-4 h-12 w-12 text-nevy-blue group-hover:text-white transition-all duration-500 " />
                  ) : item.title === "ATM Locator" ? (
                    <FaPersonBooth className="mb-4 h-12 w-12 text-nevy-blue group-hover:text-white transition-all duration-500 " />
                  ) : item.title === "Security Features" ? (
                    <MdOutlineSecurity className="mb-4 h-12 w-12 text-nevy-blue group-hover:text-white transition-all duration-500 " />
                  ) : item.title === "Loan Applications" ? (
                    <IoDocumentLockSharp className="mb-4 h-12 w-12 text-nevy-blue group-hover:text-white transition-all duration-500 " />
                  ) : (
                    <AiFillCustomerService className="mb-4 h-12 w-12 text-nevy-blue group-hover:text-white transition-all duration-500 " />
                  )}

                  {/* title */}
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 font-normal group-hover:text-white transition-all duration-500 "
                  >
                    {item.title}
                  </Typography>
                  {/* description */}
                  <Typography className="flex-1">{item.description}</Typography>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
