// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./banner.css";
import bg1 from "../../../assets/banner/1.png";
import bg2 from "../../../assets/banner/2.jpg";
import bg3 from "../../../assets/banner/3.jpg";
import bg4 from "../../../assets/banner/4.jpg";
import bg5 from "../../../assets/banner/5.png";

// import required modules
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

const UpdatedBanner = () => {
  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty("--progress", 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return (
  //       '<span class="' +
  //       className +
  //       '">' +
  //       '<div class="dot"></div>' +
  //       "</span>"
  //     );
  //   },
  // };

  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: bg1,
      title: "Secure Multilevel Transactions",
      des: "Experience the power of our advanced multilevel transaction system.Your financial transactions are secured with cutting-edge technology at every level."
    },
    {
      img: bg2,
      title: "Effortless Fund Management",
      des: "Simplify your financial life with our intuitive interface.Easily manage and transfer funds across different levels  with just a few clicks.",
    },
    {
      img: bg3,
      title: "Seamless Cross-Border Transactions",
      des: " Experience hassle-free cross-border transactions with our banking platform. Enjoy the convenience of conducting international transactions effortlessly.",
    },
    {
      img: bg4,
      title: " Enhanced Security Protocols",
      des: " Your financial security is our top priority. Benefit from our robust security protocols that safeguard your transactions against potential threats.",
    },
    {
      img: bg5,
      title: "Real-Time Transaction Monitoring",
      des: "Stay informed with real-time updates on your transactions. Our monitoring system ensures you have complete visibility into your financial activities.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <>
      <div
        className="w-full h-72 sm:h-96 md:h-[540px] lg:h-[640px] xl:h-[780px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
        style={{
          backgroundImage: `url(${sliders[currentSlider].img})`,backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        }}
      >
        {/* text container here */}
        <div className="drop-shadow-lg text-white  px-5">
          <h1 className="text-xl lg:text-3xl font-semibold mb-3">
            {sliders[currentSlider].title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
            {sliders[currentSlider].des}
          </p>
        </div>
      </div>
      
    </>
  );
};

export default UpdatedBanner;

