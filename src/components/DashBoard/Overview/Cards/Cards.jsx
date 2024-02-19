import { Card, CardBody, Typography } from "@material-tailwind/react";
import Logo from "../../../../utility/Logo";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./Cards.css";
import { EffectCards } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useStatus from "../../../../Hooks/useStatus";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const Cards = () => {
  const { user } = useAuth() || {};
  const { userinfo } = useStatus({ email: user?.email }) || {};
  const axios = useAxiosSecure();
  // const axios = useAxiosPublic();
  const {
    data: card,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allcard"],
    queryFn: async () => {
      const res = await axios.get(`/userAllcard?acc_num=${userinfo?.acc_num}`);
      return res?.data?.data;
    },
  }) || {};

  const issue = card?.filter((item) => item.status === "issue");

  return (
    <>
      <div className="px-5 md:px-8 shadow-lg rounded-lg h-[50vh]">
        <h4 className="text-xl font-medium ml-2 py-4">My Cards</h4>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {issue?.map((item, indx) => (
            <SwiperSlide key={indx}>
              <Card
                key={indx}
                className=" w-full lg:flex-shrink-0  text-white bg-gradient-to-r from-nevy-blue to-light-blue-900 rounded"
              >
                <CardBody>
                  <div className="flex  gap-2 flex-col justify-between ">
                    <Typography className="flex justify-between items-center ">
                      <Logo />
                      <h2>{item?.card_type}</h2>
                    </Typography>
                    <Typography
                      variant="h4"
                      className="text-white mt-5 flex flex-shrink sm:flex-shrink-0 gap-1 sm:gap-3 sm:text-2xl justify-between font-bold "
                    >
                      {/* {item?.cardNumber
                        .split("")
                        .map(number)
                        ?.map((index, i) => (
                          <span key={i}>{index}</span>
                        ))} */}
                      <span> {item?.cardNumber}</span>
                    </Typography>

                    <div className="flex justify-between gap-5 items-end ">
                      <div>
                        <Typography className="text-white uppercase text-sm ">
                          {item?.name}
                        </Typography>
                        <div className="flex gap-2 items-center">
                          <Typography className="text-white  uppercase text-xs">
                            Valid
                          </Typography>
                          <Typography className="text-white text-center text-base sm:text-xl ">
                            {item?.cvv}
                          </Typography>
                        </div>
                      </div>
                      <div className="flex items-end">
                        <Typography
                          variant="h3"
                          color="blue-gray"
                          className="uppercase text-end text-white flex items-end"
                        >
                          {item?.card_type === "visa" ? (
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
            </SwiperSlide>
          ))}
        </Swiper>
        <hr className="border-2 rounded-lg border-gray-600" />
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
