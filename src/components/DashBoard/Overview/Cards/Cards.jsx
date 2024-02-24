import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./Cards.css";
import { EffectCards } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useStatus from "../../../../Hooks/useStatus";
import useAuth from "../../../../Hooks/useAuth";
import visa from "../../../../assets/image/visa.png";
import logo from "../../../../assets/icons/bank.svg";

const Cards = () => {
  const { user } = useAuth() || {};
  const { userinfo } = useStatus({ email: user?.email }) || {};
  const axios = useAxiosSecure();

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
      <div className="lg:col-span-2 px-5 rounded ">
        <h4 className="text-xl font-medium ml-2 py-4">My Cards</h4>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {issue?.map((item, indx) => (
            <SwiperSlide key={indx} className="rounded-none">
              <div className="w-full h-[270px] bg-gradient-to-r from-nevy-blue to-blue-800 overflow-hidden rounded p-8 shadow-lg relative transition-transform duration-300">
                <div className="absolute -top-5 -right-10  w-44 h-44 bg-white rounded-full opacity-10" />
                <div className="absolute -bottom-8 -right-10 w-44 h-44 bg-white rounded-full opacity-10" />
                {/* user name and master card logo */}
                <div className="flex justify-between">
                  <div>
                    <div className="text-sm text-[#F6FFFF]">Name</div>
                    <div className=" font-medium text-[#F6FFFF]">
                      {item?.name}
                    </div>
                  </div>
                  {item?.card_type == "MasterCard" ? (
                    <svg
                      className="w-[60px]"
                      viewBox="0 -222 2000 2000"
                      id="Laag_1"
                      data-name="Laag 1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <defs>
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                ".cls-1{fill:#231f20;}.cls-2{fill:#f79410;}.cls-3{fill:#ff5f00;}.cls-4{fill:#eb001b;}.cls-5{fill:#f79e1b;}",
                            }}
                          />
                        </defs>
                        <title>Tekengebied 1</title>
                        <path
                          className="cls-1"
                          d="M1960.59,1534.9v4h3.73a3.93,3.93,0,0,0,2-.51,1.78,1.78,0,0,0,.75-1.53,1.71,1.71,0,0,0-.75-1.49,3.59,3.59,0,0,0-2-.51h-3.73Zm3.77-2.83a6.92,6.92,0,0,1,4.48,1.3,4.3,4.3,0,0,1,1.57,3.54,4.06,4.06,0,0,1-1.26,3.11,6.14,6.14,0,0,1-3.58,1.49l5,5.7h-3.85l-4.6-5.66h-1.49v5.66h-3.22v-15.13h7Zm-1,20.36a12,12,0,0,0,4.91-1,12.86,12.86,0,0,0,4-2.71,12.63,12.63,0,0,0,2.71-4,12.94,12.94,0,0,0,0-9.9,13.07,13.07,0,0,0-2.71-4,12.89,12.89,0,0,0-4-2.71,12.59,12.59,0,0,0-4.91-.94,13.12,13.12,0,0,0-5,.94,12.77,12.77,0,0,0-4.09,2.71,12.92,12.92,0,0,0-2.67,14,11.92,11.92,0,0,0,2.67,4,12.81,12.81,0,0,0,4.09,2.71,12.45,12.45,0,0,0,5,1m0-29a16.74,16.74,0,0,1,11.75,4.8,16,16,0,0,1,3.54,5.19,16.09,16.09,0,0,1,0,12.65,16.88,16.88,0,0,1-3.54,5.19,17.85,17.85,0,0,1-5.27,3.5,16.33,16.33,0,0,1-6.48,1.3,16.6,16.6,0,0,1-6.56-1.3,17.08,17.08,0,0,1-5.31-3.5A16.88,16.88,0,0,1,1948,1546a16.09,16.09,0,0,1,0-12.65,16,16,0,0,1,3.54-5.19,15.8,15.8,0,0,1,5.31-3.5,16.6,16.6,0,0,1,6.56-1.3M432.16,1465.1c0-28.85,18.9-52.55,49.79-52.55,29.52,0,49.44,22.68,49.44,52.55s-19.92,52.55-49.44,52.55c-30.89,0-49.79-23.7-49.79-52.55m132.88,0V1383H529.35V1403c-11.32-14.78-28.49-24.05-51.84-24.05-46,0-82.1,36.08-82.1,86.19s36.08,86.19,82.1,86.19c23.34,0,40.52-9.28,51.84-24.05v19.93H565V1465.1Zm1205.92,0c0-28.85,18.9-52.55,49.8-52.55,29.55,0,49.44,22.68,49.44,52.55s-19.89,52.55-49.44,52.55c-30.89,0-49.8-23.7-49.8-52.55m132.92,0v-148h-35.72V1403c-11.32-14.78-28.49-24.05-51.84-24.05-46,0-82.1,36.08-82.1,86.19s36.08,86.19,82.1,86.19c23.35,0,40.52-9.28,51.84-24.05v19.93h35.72V1465.1ZM1008,1410.86c23,0,37.77,14.42,41.54,39.81H964.38c3.81-23.7,18.2-39.81,43.63-39.81m.71-32c-48.1,0-81.75,35-81.75,86.19,0,52.19,35,86.19,84.14,86.19,24.72,0,47.36-6.17,67.28-23l-17.49-26.45c-13.76,11-31.28,17.17-47.75,17.17-23,0-43.94-10.65-49.09-40.2h121.87c.35-4.44.71-8.92.71-13.72-.36-51.17-32-86.19-77.94-86.19m430.9,86.19c0-28.85,18.9-52.55,49.79-52.55,29.52,0,49.44,22.68,49.44,52.55s-19.92,52.55-49.44,52.55c-30.89,0-49.8-23.7-49.8-52.55m132.88,0V1383H1536.8V1403c-11.36-14.78-28.49-24.05-51.84-24.05-46,0-82.1,36.08-82.1,86.19s36.08,86.19,82.1,86.19c23.35,0,40.48-9.28,51.84-24.05v19.93h35.68V1465.1Zm-334.42,0c0,49.79,34.66,86.19,87.56,86.19,24.72,0,41.19-5.5,59-19.57l-17.14-28.85c-13.4,9.63-27.47,14.78-43,14.78-28.49-.35-49.44-20.95-49.44-52.55s20.95-52.19,49.44-52.55c15.49,0,29.56,5.15,43,14.78l17.14-28.85c-17.84-14.07-34.31-19.57-59-19.57-52.9,0-87.56,36.39-87.56,86.19m460.1-86.19c-20.59,0-34,9.63-43.27,24.05V1383h-35.37v164.12h35.73v-92c0-27.16,11.67-42.25,35-42.25a57.87,57.87,0,0,1,22.32,4.13l11-33.64c-7.9-3.11-18.2-4.48-25.43-4.48m-956.64,17.17c-17.17-11.32-40.83-17.17-66.93-17.17-41.58,0-68.35,19.93-68.35,52.54,0,26.76,19.93,43.27,56.63,48.42l16.86,2.4c19.57,2.75,28.81,7.9,28.81,17.17,0,12.69-13,19.93-37.41,19.93-24.72,0-42.56-7.9-54.59-17.17L599.74,1530c19.57,14.42,44.29,21.3,71.06,21.3,47.4,0,74.87-22.32,74.87-53.57,0-28.85-21.62-43.94-57.34-49.09l-16.82-2.44c-15.45-2-27.83-5.11-27.83-16.11,0-12,11.67-19.22,31.25-19.22,20.95,0,41.23,7.9,51.17,14.07l15.45-28.85ZM1202,1378.91c-20.59,0-34,9.63-43.23,24.05V1383h-35.37v164.12h35.69v-92c0-27.16,11.67-42.25,35-42.25a57.87,57.87,0,0,1,22.32,4.13l11-33.64c-7.9-3.11-18.2-4.48-25.43-4.48M897.44,1383H839.08v-49.79H803V1383H769.71v32.62H803v74.87c0,38.08,14.78,60.76,57,60.76,15.49,0,33.33-4.8,44.65-12.69L894.34,1508c-10.65,6.17-22.32,9.28-31.6,9.28-17.84,0-23.66-11-23.66-27.47v-74.16h58.36ZM363.85,1547.16v-103c0-38.79-24.72-64.89-64.57-65.24-20.95-.35-42.56,6.17-57.69,29.2-11.32-18.2-29.16-29.2-54.24-29.2-17.53,0-34.66,5.15-48.07,24.37V1383H103.56v164.12h36v-91c0-28.49,15.8-43.63,40.2-43.63,23.7,0,35.69,15.45,35.69,43.27v91.34h36.08v-91c0-28.49,16.47-43.63,40.16-43.63,24.37,0,36,15.45,36,43.27v91.34Z"
                        />
                        <path
                          className="cls-2"
                          d="M1980.94,1001.22v-24h-6.25l-7.23,16.47-7.19-16.47H1954v24h4.44V983.14l6.76,15.6h4.6l6.76-15.64v18.12h4.4Zm-39.65,0V981.33h8v-4.05h-20.44v4.05h8v19.89h4.4Z"
                        />
                        <path
                          className="cls-3"
                          d="M1270.57,1104.15H729.71v-972h540.87Z"
                        />
                        <path
                          className="cls-4"
                          d="M764,618.17c0-197.17,92.32-372.81,236.08-486A615.46,615.46,0,0,0,618.09,0C276.72,0,0,276.76,0,618.17s276.72,618.17,618.09,618.17a615.46,615.46,0,0,0,382-132.17C856.34,991,764,815.35,764,618.17"
                        />
                        <path
                          className="cls-5"
                          d="M2000.25,618.17c0,341.41-276.72,618.17-618.09,618.17a615.65,615.65,0,0,1-382.05-132.17c143.8-113.19,236.12-288.82,236.12-486s-92.32-372.81-236.12-486A615.65,615.65,0,0,1,1382.15,0c341.37,0,618.09,276.76,618.09,618.17"
                        />
                      </g>
                    </svg>
                  ) : item?.card_type == "Visa" ? (
                    <img className="w-[60px]" src={visa} />
                  ) : (
                    <img className="w-[60px]" src={logo} />
                  )}
               
                </div>
                {/* User card information */}
                <div className="mt-8">
                  <div className="text-sm text-[#F6FFFF]">Card Number</div>
                  <div className=" font-medium text-[#F6FFFF]">
                    {item?.cardNumber
                      ?.toString()
                      .match(/.{1,4}/g)
                      .join(" ")}
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <div>
                    <div className="text-sm text-[#F6FFFF]">Valid</div>
                    <div className="text-sm font-medium text-[#F6FFFF]">
                      {new Date(item?.expirationDate)?.toLocaleDateString(
                        "en-US",
                        {
                          month: "2-digit",
                          year: "2-digit",
                        }
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-[#F6FFFF]">Expiry</div>
                    <div className="text-sm font-medium text-[#F6FFFF]">
                      {new Date(item?.expirationDate)?.toLocaleDateString(
                        "en-US",
                        {
                          month: "2-digit",
                          year: "2-digit",
                        }
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-[#F6FFFF]">CVV</div>
                    <div className="text-sm font-medium text-[#F6FFFF]">
                      {item?.cvv}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Cards;
