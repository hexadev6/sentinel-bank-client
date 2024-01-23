import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Logo from "../../../utility/Logo";

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
    <div className="flex gap-3 overflow-auto mb-5 w-auto">
      {cardNumber.map((item) => (
        <Card className="flex-shrink-0 w-[450px]  text-white  bg-gradient-to-r from-dark-green via-medium-green to-light-green rounded">
             <CardBody>
            <Logo />
            <Typography variant="h3" className="text-white mt-5 font-medium flex justify-between">
              {item.number.map((index, i) => (
                <span key={i}>{index}</span>
              ))}
            </Typography>
          
          </CardBody>
          <div className="flex justify-center gap-2 items-center">
            <Typography className="text-white  uppercase text-xs">
              Valid 
            </Typography>
            <Typography className="text-white text-center text-2xl ">
              {item.valid}
            </Typography>
          </div>
          <CardFooter className="pt-0 flex gap-3 justify-between  items-center">
            <Typography className="text-white uppercase  text-center py-4">
              {item.holder}
            </Typography>
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-2 uppercase text-end text-white"
            >
              {item.name === "visa" ? (
                <img
                  className="w-36"
                  src="https://i.ibb.co/4S3FhY0/212-2128294-visa-logo-png-image-visa-logo-white-png-removebg-preview.png"
                />
              ) : (
                <img
                  className="w-36"
                  src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png"
                />
              )}
            </Typography>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
