import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";
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
 
    const [faq,setFaq] = useState([])
    useEffect(()=>{
        fetch('/FAQ.json')
        .then(res=> res.json())
        .then(data=> setFaq(data))
    },[])
   
  
    return (
        <div className="m-10">
            <h2 className="text-4xl">Freqently Asked Questions</h2>
        <div className="border p-4">
       {
        faq?.map((item,index)=><Accordion key={item.id} open={open === index} icon={<Icon id={index} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(index)}>{item?.question}</AccordionHeader>
        <AccordionBody>
         {item?.answer}
        </AccordionBody>
      </Accordion> )
       }
       
      </div>
      </div>
    );
}

export default FaqSection;