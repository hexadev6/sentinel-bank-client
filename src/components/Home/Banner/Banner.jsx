import { useState } from "react";
import cards from "../../../assets/banner/cards.png";
import { Input, Button } from "@material-tailwind/react";

const outerDivStyle = {
  background:
    "linear-gradient(90deg, rgba(22,74,65,1) 0%, rgba(77,119,78,1) 49%, rgba(157,200,141,1) 100%)",
  height: "100vh",
  width: "100%",
  position: "relative",
  overflow: "hidden",
};

const innerDivStyle = {
  backgroundImage: `url(${cards})`,
  backgroundSize: "50%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  position: "absolute",
  //   bottom: '-25rem',
  left: 0,
  top: 0,
  right: 0,
  boxShadow: "0 50px 100px rgba(0, 0, 0, 0.5)",
};

const Banner = () => {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <div style={outerDivStyle}>
      <div
        className='-bottom-24 md:-bottom-52 lg:-bottom-[28rem]'
        style={innerDivStyle}></div>
      <div className='max-w-7xl mx-auto flex items-center justify-center text-center mt-20'>
        <div className=' flex items-center justify-center flex-col text-center'>
          <h4 className='text-xl font-medium text-green-100'>
            All in one banking for explore
          </h4>
          <h1 className='text-6xl font-bold text-white mt-3'>
            Smart and simple <br />
            online banking
          </h1>
          <p className='text-lg mt-6 text-gray-400'>
            With our simple online banking services, you can manage <br />
            your finances from anywhere, at any time
          </p>


          {/* search box */}
          <div className='relative flex items-center justify-center w-full mt-8'>
            <Input
              type='email'
              label='Email Address'
              value={email}
              onChange={onChange}
              size="lg"
              className='pr-20 text-white border-2'
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size='sm'
            //   color={email ? "gray" : "blue-gray"}
              disabled={!email}
              className={`!absolute right-1  rounded ${!email ? 'bg-gray-400': 'bg-natural-yellow'}`}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
