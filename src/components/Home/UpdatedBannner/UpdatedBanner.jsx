// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./banner.css";
import bg1 from "../../../assets/banner/1.jpg";
import bg2 from "../../../assets/banner/2.jpg";
import bg3 from "../../../assets/banner/3.jpg";
import bg4 from "../../../assets/banner/4.jpg";
import bg5 from "../../../assets/banner/5.jpg";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";

const UpdatedBanner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="relative -z-10">
      <Swiper
        direction="vertical"
        // direction={"vertical"}
        pagination={pagination}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        modules={[Pagination, Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div
            className="w-full h-full  bg-center bg-cover bg-no-repeat "
            style={{ backgroundImage: `url(${bg1})` }}
          >
            <div className="w-full h-full backdrop-blur-md">
              <div className="max-w-7xl mx-auto text-center flex justify-center items-center h-full">
                <div>
                  <h1 className="text-6xl font-bold">
                    Secure <br />
                    Multilevel Transactions
                  </h1>
                  <p className="mt-5">
                    Experience the power of our advanced multilevel transaction
                    system.
                    <br /> Your financial transactions are secured with
                    cutting-edge technology at every level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-full  bg-center bg-cover bg-no-repeat "
            style={{ backgroundImage: `url(${bg2})` }}
          >
            <div className="w-full h-full backdrop-blur-sm">
              <div className="max-w-7xl mx-auto text-center flex justify-center items-center h-full">
                <div>
                  <h1 className="text-6xl font-bold">
                    Effortless <br />
                    Fund Management
                  </h1>
                  <p className="mt-5">
                    Simplify your financial life with our intuitive interface.{" "}
                    <br />
                    Easily manage and transfer funds across different levels
                    with just a few clicks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-full  bg-center bg-cover bg-no-repeat "
            style={{ backgroundImage: `url(${bg4})` }}
          >
            <div className="w-full h-full backdrop-blur-sm">
              <div className="max-w-7xl mx-auto text-center flex justify-center items-center h-full">
                <div>
                  <h1 className="text-6xl font-bold">
                    Enhanced <br />
                    Security Protocols
                  </h1>
                  <p className="mt-5">
                    Your financial security is our top priority. <br />
                    Benefit from our robust security protocols that safeguard
                    your transactions against potential threats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-full  bg-center bg-cover bg-no-repeat "
            style={{ backgroundImage: `url(${bg3})` }}
          >
            <div className="w-full h-full backdrop-blur-sm">
              <div className="max-w-7xl mx-auto text-center flex justify-center items-center h-full">
                <div>
                  <h1 className="text-6xl font-bold">
                    Real-Time <br />
                    Transaction Monitoring
                  </h1>
                  <p className="mt-5">
                    Stay informed with real-time updates on your transactions.{" "}
                    <br />
                    Our monitoring system ensures you have complete visibility
                    into your financial activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-full  bg-center bg-cover bg-no-repeat "
            style={{ backgroundImage: `url(${bg5})` }}
          >
            <div className="w-full h-full backdrop-blur-sm">
              <div className="max-w-7xl mx-auto text-center flex justify-center items-center h-full">
                <div>
                  <h1 className="text-6xl font-bold">
                    Seamless <br />
                    Cross-Border Transactions
                  </h1>
                  <p className="mt-5">
                    Experience hassle-free cross-border transactions with our
                    banking platform. <br />
                    Enjoy the convenience of conducting international
                    transactions effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default UpdatedBanner;
