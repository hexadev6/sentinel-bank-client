<<<<<<< HEAD
import { Accordion, AccordionBody, AccordionHeader, Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import picbg from '../../../assets/banner/confused.jpg'
import Container from "../../Shared/container/Container";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const FaqSection = () => {


    const [open, setOpen] = React.useState(null);

    const handleOpen = (value) => setOpen(open === value ? null : value);
     const [showAll,setShowAll]= useState(false)
    const [faq, setFaq] = useState([])
    useEffect(() => {
        fetch('/FAQ.json')
            .then(res => res.json())
            .then(data => setFaq(data))
    }, [])

    const handleShow =()=>{
        setShowAll(!showAll)
    }

    return (
       <Container>
         <div className=" my-10 mx-16 w-full border min-h-sceen">


<h2 className="text-4xl font-bold text-center text-[#4d774e] ">Freqently Asked Questions</h2>
<p className="text-xl text-center py-2">Navigating the Uncharted: Your Curated FAQ Expedition with Sentinel Trust Bank</p>
<div className="">
<div className="w-[max-content] mx-auto">
<img className="w-96 h-96" src={picbg} alt="" />
</div>

<div className=" w-[900px]">


    <div className="p-4">
    <div className={` ${showAll ? 'max-h-full' : 'max-h-96'} overflow-hidden transition-max-height`}>
        {
            faq?.map((item, index) => <Accordion className="rounded-lg px-2 mx-2 mb-4" key={item.id} open={open === index} icon={<Icon id={index} open={open} />}>
                <AccordionHeader className="text-[#4d774e] hover:text-[#4d774e]" onClick={() => handleOpen(index)}>{item?.question}</AccordionHeader>
                <AccordionBody className="text-lg ">
                    {item?.answer}
                </AccordionBody>
            </Accordion>)
        }
      </div>
        
        <div className="w-[max-content] mx-auto">
        <button className="btn rounded-lg border p-2 border-[#4d774e]" onClick={handleShow}>{showAll? "Show Less": "Show More"}</button>
        </div>

    </div>
</div>
</div>
</div>
       </Container>
    );
=======
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import picbg from "../../../assets/banner/Faq.jpg";

function Icon({ id, open }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  );
>>>>>>> 8bb25005679d35ba00b7626e662caf2e079aa956
}

const FaqSection = () => {
  const [open, setOpen] = React.useState(null);

  const handleOpen = (value) => setOpen(open === value ? null : value);

  const [faq, setFaq] = useState([]);
  useEffect(() => {
    fetch("/FAQ.json")
      .then((res) => res.json())
      .then((data) => setFaq(data));
  }, []);

  return (
    <div className='max-w-7xl mx-auto'>
      <div className=' my-10 mx-16 w-full min-h-screen'>
        <img
          src={picbg}
          alt='image 1'
          className='relative h-96 w-[900px] rounded-2xl object-cover'
        />

        <h2 className='absolute lg:-mt-72 text-center w-full font-bold text-white text-4xl my-4'>
          Freqently Asked Questions
        </h2>

        <div className='absolute w-[900px] bg-blue-gray-900 -mt-52'>
          <div className='p-4'>
            {faq?.map((item, index) => (
              <Accordion
                className='bg-black rounded-lg px-2 my-4'
                key={item.id}
                open={open === index}
                icon={<Icon id={index} open={open} />}>
                <AccordionHeader
                  className='text-[#4d774e] hover:text-[#4d774e]'
                  onClick={() => handleOpen(index)}>
                  {item?.question}
                </AccordionHeader>
                <AccordionBody className='text-lg text-white'>
                  {item?.answer}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
