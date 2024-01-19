import { useEffect, useState } from "react";
import axios from "axios";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import Container from "../../Shared/container/Container";

const CustomerReview = () => {
  const [customerFeedback, setCustomerFeedback] = useState([]);

  useEffect(() => {
    axios
      .get("./feedback.json")
      .then((res) => setCustomerFeedback(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>

      <Container>
        {/* feedback heading */}
      <div className="text-center px-2">
        <p className="font-semibold text-xl">Customer feedback</p>
        <h1 className="max-w-2xl   mx-auto  text-[#4d774e] text-2xl md:text-5xl font-bold my-3">
          Unleash Your Opinions with Our New Feedback Service!
        </h1>
        <p className="text-lg">
          Your feedback is the key to shaping a banking experience tailored just
          for you!
        </p>
      </div>

      {/* feedback */}

      <Swiper
        cssMode={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Pagination, Mousewheel, Keyboard,Autoplay]}
        className="mySwiper mt-10 md:mt-20  container mx-auto"
      >
        {customerFeedback.map((feedback, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-10 justify-center items-center  px-2">
           <div className="col-span-2  flex justify-end">
           <img
                src={feedback?.customerImg}
                alt="image 1"
                className="h-96 w-96 object-cover rounded-full"
              />
           </div>
              <div className="col-span-3 py-10">
                <ImQuotesLeft className="text-5xl mb-5 text-[#4d774e] " />
                <p className="text-2xl font-semibold my-7">
                  {feedback?.reviewHeadline}
                </p>
                <p className="text-xl text-gray-700 font-normal">
                  {feedback?.detailsReview}
                </p>
                <p className="text-2xl font-semibold mt-4">{feedback.name}</p>
                <p className="text-[#4d774e] font-light mt-2">
                  {feedback?.country}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </Container>
    </>
  );
};

export default CustomerReview;
