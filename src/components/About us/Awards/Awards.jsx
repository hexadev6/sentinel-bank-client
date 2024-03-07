import React, { useState } from "react";
import Container from "../../Shared/container/Container";
import SubHeading from "../../Shared/Heading Title/SubHeading";
import emptyTrophy from "../../../assets/banner/empty trophy.jpg";
import arrow from "../../../assets/icons/right-arrow-icon-114837-11.png";
import arrow2 from "../../../assets/icons/right-arrow-icon-114837-11 - Copy.png";
import award1 from "../../../assets/banner/award1 - Copy.jpeg";
import award2 from "../../../assets/banner/awards2 - Copy.jpeg";
import award3 from "../../../assets/banner/awards3 - Copy.jpg";
import award4 from "../../../assets/banner/381-3814072_leisure-time-awards-awards-and-trophies-png-transparent.png";
import award5 from "../../../assets/banner/58b77c2473162ba16d1eacf52917a59453879137.jpeg";
import award6 from "../../../assets/banner/18-189657_award-image-gold-star-trophy-png.png";
import { FaArrowLeftLong } from "react-icons/fa6";

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState(null);

  const handleClick = (award) => {
    setSelectedAward(award);
  };

  const awards = [
    {
      id: 1,
      pic: award1,
      title: "Innovator of the Year Award",
      para: "Your groundbreaking ideas and creative solutions have reshaped industries, setting new standards for innovation and pushing the boundaries of what is possible.",
    },
    {
      id: 2,
      pic: award2,
      title: "Trailblazer Excellence Award",
      para: "Your trailblazing efforts have paved the way for others to follow, demonstrating exceptional leadership, courage, and a commitment to forging new paths in your field.",
    },
    {
      id: 3,
      pic: award3,
      title: "Humanitarian Hero Award",
      para: "Your unwavering dedication to making a positive impact on society and improving the lives of others has earned you this esteemed award, recognizing your exceptional contributions to humanitarian causes.",
    },
    {
      id: 4,
      pic: award4,
      title: "Master of Collaboration Award",
      para: "Your ability to foster collaboration and bring diverse teams together to achieve common goals is unparalleled. This award acknowledges your outstanding skill in creating synergy and driving collective success.",
    },
    {
      id: 5,
      pic: award5,
      title: "Visionary Leadership Award",
      para: "Your ability to inspire, motivate, and lead with a clear vision has set you apart as a true leader. This award recognizes your exceptional leadership qualities that have propelled your team or organization to new heights.",
    },
    {
      id: 6,
      pic: award6,
      title: "Resilience Champion Award",
      para: "In the face of challenges and adversity, you've demonstrated remarkable resilience, determination, and a refusal to be deterred. This award celebrates your tenacity and ability to overcome obstacles with grace and strength.",
    },
  ];

  return (
    <div id="awards">
      <div className="container px-4 mx-auto mt-28">
        <SubHeading title={"Our Achievements"}></SubHeading>

        <div className="w-full py-4 mx-auto grid grid-cols-1 lg:grid-cols-3 justify-between items-center">
          <div className=" flex flex-col gap-5 ">
            <div
              className="flex gap-5 justify-between items-center"
              onClick={() => handleClick(awards[0])}
            >
              <div className="w-24 h-24 p-5 rounded-full bg-[#f7f7f7]  cursor-pointer ">
                <img className=" w-full h-full " src={awards[0]?.pic} alt="" />
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flowchart_arrow.svg"
                alt=""
                className="rotate-180 w-1/3"
              />
            </div>

            <div
              className="flex gap-5 justify-between items-center"
              onClick={() => handleClick(awards[1])}
            >
              <div className="w-24 h-24 p-5 rounded-full bg-[#f7f7f7]  cursor-pointer ">
                <img className=" w-full h-full " src={awards[1]?.pic} alt="" />
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flowchart_arrow.svg"
                alt=""
                className="rotate-180 w-1/3"
              />
            </div>

            <div
              className="flex gap-5 justify-between items-center"
              onClick={() => handleClick(awards[2])}
            >
              <div className="w-24 h-24 p-5 rounded-full bg-[#f7f7f7]  cursor-pointer ">
                <img className=" w-full h-full " src={awards[2]?.pic} alt="" />
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flowchart_arrow.svg"
                alt=""
                className="rotate-180 w-1/3"
              />
            </div>
          </div>

          <div className="flex flex-col items-center p-5">
            <div className="w-64 h-64 rounded-full bg-[#f7f7f7]  mb-5 p-5 ">
              <img
                className="w-full h-full rounded-full"
                src={selectedAward ? selectedAward.pic : emptyTrophy}
                alt=""
              />
            </div>
            <p className="text-xl font-semibold mb-5">
              {selectedAward ? selectedAward.title : ""}
            </p>
            <p className="text-center">
              {selectedAward ? selectedAward.para : ""}
            </p>
          </div>

          <div className=" flex flex-col gap-5 ">
            <div
              className="flex gap-5 justify-between items-center"
              onClick={() => handleClick(awards[3])}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flowchart_arrow.svg"
                alt=""
                className=" w-1/3"
              />
              <div className="w-24 h-24 p-5 rounded-full bg-[#f7f7f7]  cursor-pointer ">
                <img className=" w-full h-full " src={awards[3]?.pic} alt="" />
              </div>
            </div>

            <div
              className="flex gap-5 justify-between items-center"
              onClick={() => handleClick(awards[4])}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flowchart_arrow.svg"
                alt=""
                className=" w-1/3"
              />
              <div className="w-24 h-24 p-5 rounded-full bg-[#f7f7f7]  cursor-pointer ">
                <img className=" w-full h-full " src={awards[4]?.pic} alt="" />
              </div>
            </div>

            <div
              className="flex gap-5 justify-between items-center"
              onClick={() => handleClick(awards[5])}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flowchart_arrow.svg"
                alt=""
                className=" w-1/3"
              />
              <div className="w-24 h-24 p-5 rounded-full bg-[#f7f7f7]  cursor-pointer ">
                <img className=" w-full h-full " src={awards[5]?.pic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
