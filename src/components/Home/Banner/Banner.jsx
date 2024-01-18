import cards from "../../../assets/banner/cards.png";

const outerDivStyle = {
  background: "linear-gradient(90deg, rgba(22,74,65,1) 0%, rgba(77,119,78,1) 49%, rgba(157,200,141,1) 100%)",
  height: "100vh",
  width: "100%",
  position: "relative",
  overflow: "hidden"
};

const innerDivStyle = {
  backgroundImage: `url(${cards})`,
  backgroundSize: "50%",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: "bottom",
  position: "absolute",
//   bottom: '-25rem',
  left: 0,
  top: 0,
  right: 0,
  boxShadow: '0 50px 100px rgba(0, 0, 0, 0.5)', 
};

const Banner = () => {
  return (
    <div style={outerDivStyle}>
      <div className="-bottom-24 md:-bottom-52 lg:-bottom-[28rem]" style={innerDivStyle}></div>
      <div className="max-w-7xl mx-auto flex items-center">
        
      </div>
    </div>
  );
};

export default Banner;
