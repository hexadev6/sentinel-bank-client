import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Logo from "../../../../utility/Logo";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";

const Cards = () => {
  const cardNumber = [
    {
      number: ["1234", " 5678", " 9101", " 1121"],
      name: "visa",
      holder: "zannatul hema",
      valid: "11/24",
    },
    {
      number: ["1423", "5215", "5454", "1234"],
      name: "visa",
      holder: "zannatul hema",
      valid: "02/30",
    },
    {
      number: ["6584", "2323", "7684", " 4563"],
      name: "mastercard",
      holder: "zannatul hema",
      valid: "08/27",
    },
  ];
  return (
    <>
      <div className="flex md:flex-nowrap flex-wrap gap-3 justify-between xl:justify-start  overflow-auto mb-5">
        {cardNumber.map((item, indx) => (
          <Card
            key={indx}
            className=" w-full md:w-fit lg:flex-shrink-0  text-white opacity-80  bg-gradient-to-r from-nevy-blue to-light-blue-900 rounded"
          >
            <CardBody>
              <div className="flex  gap-2 flex-col justify-between ">
                {/* logo */}
                <Logo />
                <Typography
                  variant="h3"
                  className="text-white mt-5 font-medium flex flex-shrink sm:flex-shrink-0 gap-1 sm:gap-5 text-xl sm:text-2xl justify-between"
                >
                  {item.number.map((index, i) => (
                    <span key={i}>{index}</span>
                  ))}
                </Typography>

                <div className="flex justify-between gap-5 items-end ">
                  <div>
                    <Typography className="text-white uppercase text-sm ">
                      {item.holder}
                    </Typography>
                    <div className="flex gap-2 items-center">
                      <Typography className="text-white  uppercase text-xs">
                        Valid
                      </Typography>
                      <Typography className="text-white text-center text-base sm:text-xl ">
                        {item.valid}
                      </Typography>
                    </div>
                  </div>
                  <div className="flex items-end">
                    <Typography
                      variant="h3"
                      color="blue-gray"
                      className="uppercase text-end text-white flex items-end"
                    >
                      {item.name === "visa" ? (
                        <RiVisaLine className="text-8xl" />
                      ) : (
                        <RiMastercardFill className="text-8xl" />
                      )}
                    </Typography>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
