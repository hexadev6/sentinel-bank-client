import React, { useState } from "react";
import Container from "../../Shared/container/Container";
import SubHeading from "../../Shared/Heading Title/SubHeading";
import emptyTrophy from '../../../assets/banner/empty trophy.jpg'
import arrow from '../../../assets/icons/right-arrow-icon-114837-11.png'
import arrow2 from '../../../assets/icons/right-arrow-icon-114837-11 - Copy.png'
import award1 from "../../../assets/banner/award1 - Copy.jpeg";
import award2 from "../../../assets/banner/awards2 - Copy.jpeg";
import award3 from "../../../assets/banner/awards3 - Copy.jpg";
import award4 from "../../../assets/banner/award4.png";
import award5 from '../../../assets/banner/10603705_42828.jpg'
import award6 from '../../../assets/banner/images.jpeg'

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState(null);

  const handleClick = (award) => {
    setSelectedAward(award);
  };

  const awards = [
    { id: 1, pic: award1,title:'Innovator of the Year Award', para: 'Your groundbreaking ideas and creative solutions have reshaped industries, setting new standards for innovation and pushing the boundaries of what is possible.' },
    { id: 2, pic: award2,title:'Trailblazer Excellence Award', para: 'Your trailblazing efforts have paved the way for others to follow, demonstrating exceptional leadership, courage, and a commitment to forging new paths in your field.'  },
    { id: 3, pic: award3, title:'Humanitarian Hero Award', para: 'Your unwavering dedication to making a positive impact on society and improving the lives of others has earned you this esteemed award, recognizing your exceptional contributions to humanitarian causes.'  },
    { id: 4, pic: award4,title:'Master of Collaboration Award', para: 'Your ability to foster collaboration and bring diverse teams together to achieve common goals is unparalleled. This award acknowledges your outstanding skill in creating synergy and driving collective success.'  },
    { id: 5, pic: award5,title:'Visionary Leadership Award', para: 'Your ability to inspire, motivate, and lead with a clear vision has set you apart as a true leader. This award recognizes your exceptional leadership qualities that have propelled your team or organization to new heights.'  },
    { id: 6, pic: award6, title:'Resilience Champion Award', para: "In the face of challenges and adversity, you've demonstrated remarkable resilience, determination, and a refusal to be deterred. This award celebrates your tenacity and ability to overcome obstacles with grace and strength."},
  ];

  return (
    <div id="awards">
      <Container>
      <SubHeading title={"Our Achievements"}></SubHeading>

      <div className="w-full py-4 mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="">
        <div className="flex items-center justify-center">
          <div className="flex gap-2">
            <img
              className="w-20 h-20 rounded-full cursor-pointer"
              src={awards[0].pic}
              alt=""
              onClick={() => handleClick(awards[0])}
            />
          </div>
          <img className="w-60 h-10" src={arrow2} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex gap-2">
            <img
              className="w-20 h-20 rounded-full cursor-pointer"
              src={awards[1].pic}
              alt=""
              onClick={() => handleClick(awards[1])}
            />
          </div>
          <img className="w-52 h-10" src={arrow2} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex gap-2">
            <img
              className="w-20 h-20 rounded-full cursor-pointer"
              src={awards[4].pic}
              alt=""
              onClick={() => handleClick(awards[4])}
            />
          </div>
          <img className="w-32 h-10" src={arrow2} alt="" />
        </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="w-64 h-64 rounded-full "
            src={selectedAward ? selectedAward.pic : emptyTrophy}
            alt=""
          />
          <p className="text-xl font-semibold">{selectedAward ? selectedAward.title :""}</p>
          <p className="text-center">{selectedAward ? selectedAward.para : ""}</p>

        </div>

       <div className="">
       <div className="flex items-center justify-center">
        <img className="w-60 h-10" src={arrow} alt="" />
          <div className="flex gap-2">
         
            <img
              className="w-20 h-20 rounded-full cursor-pointer"
              src={awards[2].pic}
              alt=""
              onClick={() => handleClick(awards[2])}
            />
          </div>
          
        </div>
       <div className="flex items-center justify-center">
        <img className="w-52 h-10" src={arrow} alt="" />
          <div className="flex gap-2">
         
            <img
              className="w-20 h-20 rounded-full cursor-pointer"
              src={awards[5].pic}
              alt=""
              onClick={() => handleClick(awards[5])}
            />
          </div>
          
        </div>

        <div className="flex items-center justify-center">
        <img className="w-32 h-10" src={arrow} alt="" />
          <div className="flex gap-2">
         
            <img
              className="w-20 h-20 rounded-full cursor-pointer"
              src={awards[3].pic}
              alt=""
              onClick={() => handleClick(awards[3])}
            />
          </div>
          
        </div>
       </div>
      </div>
    </Container>
    </div>
  );
};

export default Awards;
