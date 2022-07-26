import React from 'react'
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";



export default function Questions() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className='h-2/4 bg-yellow-300'>
       <h1 className="text-center font-bold pt-16 pb-8 text-2xl">
        Popular Questions
      </h1>
<div className=' w-3/5 pb-10 m-auto'>
      <Fragment>
        <div className='grid grid-cols-2 gap-10   place-items-center justify-items-center pl-10 '>
      <Accordion open={open === 1} onClick={() => handleOpen(1)}>
        <AccordionHeader>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing.  
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} onClick={() => handleOpen(2)}>
        <AccordionHeader>How to use Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing.  
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} onClick={() => handleOpen(3)}>
        <AccordionHeader>How to use Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. 
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4} onClick={() => handleOpen(4)}>
        <AccordionHeader>How to use Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing.  
        </AccordionBody>
      </Accordion>

       
      </div>
    </Fragment>
      </div>
      </div>
  )
}
