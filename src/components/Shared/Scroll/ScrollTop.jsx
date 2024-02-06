import { useEffect, useState } from "react";
import { FaArrowUpFromBracket } from "react-icons/fa6";
const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <FaArrowUpFromBracket
      onClick={handleScrollToTop}
      className={`fixed bottom-6 right-6  cursor-pointer text-2xl rounded-full ${
        isVisible
          ? " opacity-100 ease-linear duration-500 text-green-500 hover:bg-nevy-blue  p-2 text-4xl hover:text-white "
          : " opacity-0 "
      }`}
    />
  );
};

export default ScrollTop;
