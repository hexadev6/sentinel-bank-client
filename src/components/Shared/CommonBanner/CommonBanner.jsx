import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const CommonBanner = ({ title, subtitle, img, orientation }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className='flex h-[60vh] justify-center items-center flex-col'>
      <div
        className={`w-full h-[60vh] bg-[url('${img}')] bg-cover bg-center`}
        style={{ backgroundImage: `url(${img})` }}>
        <div
          className={`w-full h-full flex  justify-center items-center 
          ${
            orientation === "right" ? "bg-gradient-to-l" : "bg-gradient-to-r"
          } from-black/60 to-white/0 backdrop-brightness-75`}>
          <div
            className={`text-white w-1/2 ${
              orientation === "right" && "text-right"
            }`}>
            <h1 className='text-5xl font-bold'>{title}</h1>
            <p className='text-white/80 text-xl font-medium mt-4'>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;

CommonBanner.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  subtitle: PropTypes.string,
  orientation: PropTypes.string,
};
