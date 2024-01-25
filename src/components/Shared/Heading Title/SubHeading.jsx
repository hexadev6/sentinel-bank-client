import React from "react";

const SubHeading = ({ title }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex gap-2 justify-center items-center ">
        <div className="bg-light-gray h-[1px] w-full"></div>
        <p className="text-center text-light-gray text-xl lg:text-4xl w-full font-light">
          {title}
        </p>
        <div className="bg-light-gray h-[1px] w-full"></div>
      </div>
    </div>
  );
};

export default SubHeading;
