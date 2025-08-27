import React, { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

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

const FAQ = () => {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div id="faq" className="w-full flex flex-col items-center mt-6">
            <h1 className="w-full text-center text-4xl md:text-6xl lg:text-7xl font-extrabold mt-5">Frequently Asked Questions</h1>
            <div className="w-50% md:w-full max-w-2xl flex flex-col items-center my-30 px-10 ">
                <Accordion className="align-center" open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(1)} className="text-lg sm:text-2xl pl-5 cursor-pointer">
                        Question 1
                    </AccordionHeader>
                    <AccordionBody className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium obcaecati eum, sit corrupti error iste quas officia aperiam sapiente perspiciatis.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(2)} className="text-lg sm:text-2xl pl-5 cursor-pointer">
                        Question 2
                    </AccordionHeader>
                    <AccordionBody className="text-lg">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio non harum distinctio at unde similique dignissimos dolorum aliquam totam. Optio, reiciendis facere? Dolore iure laboriosam voluptatem fugiat facere ipsa nobis doloribus odio veniam voluptates eum soluta facilis, cupiditate autem, ratione quia possimus tempore consectetur perferendis repellat? Cupiditate doloremque ut provident.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(3)} className="text-lg sm:text-2xl pl-5 cursor-pointer">
                        Question 3
                    </AccordionHeader>
                    <AccordionBody className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, pariatur?
                    </AccordionBody>
                </Accordion>
            </div>
        </div>
    )
}

export default FAQ;