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
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Cards.css";

// import required modules
import { EffectCards } from "swiper/modules";

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
      <div className='px-5 md:px-8 shadow-lg rounded-lg h-[50vh]'>
        <h4 className='text-xl font-medium ml-2 py-4'>My Cards</h4>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className='mySwiper'>
          {cardNumber.map((item, indx) => (
            <SwiperSlide key={indx}>
              <Card
                key={indx}
                className=' w-full lg:flex-shrink-0  text-white bg-gradient-to-r from-nevy-blue to-light-blue-900 rounded'>
                <CardBody>
                  <div className='flex  gap-2 flex-col justify-between '>
                    <Logo />
                    <Typography
                      variant='h4'
                      className='text-white mt-5 font-medium flex flex-shrink sm:flex-shrink-0 gap-1 sm:gap-3 sm:text-2xl justify-between'>
                      {item.number.map((index, i) => (
                        <span key={i}>{index}</span>
                      ))}
                    </Typography>

                    <div className='flex justify-between gap-5 items-end '>
                      <div>
                        <Typography className='text-white uppercase text-sm '>
                          {item.holder}
                        </Typography>
                        <div className='flex gap-2 items-center'>
                          <Typography className='text-white  uppercase text-xs'>
                            Valid
                          </Typography>
                          <Typography className='text-white text-center text-base sm:text-xl '>
                            {item.valid}
                          </Typography>
                        </div>
                      </div>
                      <div className='flex items-end'>
                        <Typography
                          variant='h3'
                          color='blue-gray'
                          className='uppercase text-end text-white flex items-end'>
                          {item.name === "visa" ? (
                            <RiVisaLine className='text-8xl' />
                          ) : (
                            <RiMastercardFill className='text-8xl' />
                          )}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <hr className="border-2 rounded-lg border-gray-600"/>
      </div>
      {/* <div className="flex md:flex-nowrap flex-wrap gap-3 justify-between xl:justify-start  overflow-auto mb-5">
        {cardNumber.map((item, indx) => (
          <Card
            key={indx}
            className=" w-full md:w-fit lg:flex-shrink-0  text-white opacity-80  bg-gradient-to-r from-nevy-blue to-light-blue-900 rounded"
          >
            <CardBody>
              <div className="flex  gap-2 flex-col justify-between ">
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
      </div> */}
    </>
  );
};

export default Cards;
