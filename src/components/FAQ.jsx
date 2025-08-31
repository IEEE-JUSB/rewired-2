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
    const [open, setOpen] = useState(null);
    const handleOpen = (value) => setOpen(open === value ? null : value);
    const faqs = [
        {
            question: "What’s the buzz about ReWired? Why should I join?",
            answer:
                "Picture this: two days where you get to play with signals, watch an ECG turn from random spikes into meaningful stories, and realize, “No way - we actually built that!” Add in some laughs, teamwork, and a spark of creativity, and you’ll see why everyone’s heart skips a beat for ReWired."
        },
        {
            question: "Are there any prerequisites?",
            answer:
                "A basic understanding of Fourier Transforms is good enough. Even if you don’t really understand, you will be given a basic idea to work on."
        },
        {
            question: "Do I need to bring anything?",
            answer:
                "All you need is a laptop, an extension cord per team, and an eager mind. We’ve got the rest covered."
        },
        {
            question: "Is the process safe? Will I get shocked?",
            answer:
                "Only by how cool it is! And no, don’t worry, ECG probes will not shock you because they don’t send electricity into your body; they only detect the natural activity of your heart."
        },
        {
            question: "Do I need a team to join?",
            answer:
                "Forming a team before the event is not mandatory. Register solo and we’ll group everyone into teams of 4 on the spot."
        },
        {
            question: "Can I bring friends from other institutes too?",
            answer:
                "Yes, you can! The more, the merrier!"
        },
        {
            question: "Where will the workshop be held?",
            answer: ""
        },
        {
            question: "Still have questions?",
            answer: "Maybe your heartbeat has the answers… See you at ReWired!"
        }
    ];

    return (
        <div id="faq" className="w-full flex flex-col items-center mt-6">
            <h1 className="w-full text-center text-4xl md:text-6xl lg:text-7xl font-extrabold mt-5">Frequently Asked Questions</h1>
            <div className="w-50% md:w-full max-w-5xl flex flex-col items-center my-30 px-10 ">
                {faqs.map((faq, index) => (
                    <Accordion className="align-center" open={open === index} icon={<Icon id={index} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(index)} className="text-lg sm:text-2xl pl-5 cursor-pointer text-left">
                            {index + 1}. {faq.question}
                        </AccordionHeader>
                        <AccordionBody className="text-lg">
                            {faq.answer}
                        </AccordionBody>
                    </Accordion>
                ))}
                </div>
        </div>
    )
}

export default FAQ;