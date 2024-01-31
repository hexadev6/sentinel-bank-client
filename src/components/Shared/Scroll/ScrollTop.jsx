import { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
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
    <FaCircleArrowUp
      onClick={handleScrollToTop}
      className={`fixed bottom-4 right-4 text-natural-yellow  cursor-pointer text-4xl rounded-full ${
        isVisible ? " opacity-100 ease-linear duration-1000" : " opacity-0"
      }`}
    />
  );
};

export default ScrollTop;
