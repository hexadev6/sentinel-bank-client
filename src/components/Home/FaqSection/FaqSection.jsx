import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import picbg from "../../../assets/banner/quest.jpg";
import Container from "../../Shared/container/Container";
import PropTypes from "prop-types";
import SubHeading from "../../Shared/Heading Title/SubHeading";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const FaqSection = () => {
  const [open, setOpen] = React.useState(null);

  const handleOpen = (value) => setOpen(open === value ? null : value);

  const [showAll, setShowAll] = useState(false);
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    fetch("/FAQ.json")
      .then((res) => res.json())
      .then((data) => setFaq(data));
  }, []);

  const handleShow = () => {
    setShowAll(!showAll);
  };

  return (
    <Container>
      <div className=" bg-white pt-10 w-full min-h-sceen">
        <SubHeading title={' Freqently Asked Questions'}></SubHeading>
       
        <div className="">
          {/* <div className="w-[max-content] mx-auto">
            <img className="w-full h-96" src={picbg} alt="" />
          </div> */}
          <div className="flex-1">
            <div className="p-4">
              <div
                className={` ${
                  showAll ? "max-h-full" : "max-h-[380px]"
                } overflow-hidden transition-max-height`}
              >
                {faq?.map((item, index) => (
                  <Accordion
                    className="rounded-lg px-2 mx-2 mb-4"
                    key={item.id}
                    open={open === index}
                    icon={<Icon id={index} open={open} />}
                  >
                    <AccordionHeader
                      className="text-nevy-blue hover:text-nevy-blue"
                      onClick={() => handleOpen(index)}
                    >
                      {item?.question}
                    </AccordionHeader>
                    <AccordionBody className="text-lg ">
                      {item?.answer}
                    </AccordionBody>
                  </Accordion>
                ))}
              </div>

              <div className="w-[max-content] mx-auto">
                <button
                  className="btn rounded-lg border p-2 border-nevy-blue"
                  onClick={handleShow}
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FaqSection;

Icon.propTypes = {
  id: PropTypes.number,
  open: PropTypes.bool,
};
