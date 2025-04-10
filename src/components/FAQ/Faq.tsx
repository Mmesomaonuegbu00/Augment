'use client'

import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        if (openIndex === index) {
            setOpenIndex(null); // close if clicked again
        } else {
            setOpenIndex(index); // open the clicked one
        }
    };

    const items = [
        {
            title: "I work full-time, is Augment for me?",
            content: " Yes, Augment is designed for busy professionals. Our courses are flexible and can be completed at your own pace, allowing you to balance work and learning."
        },
        {
            title: " An MeetBA for $1759? Whats the catch",
            content: "There is no catch! We believe in making quality education accessible. The $1759 fee covers all course materials, mentorship, and certification. No hidden costs."
        },
        {
            title: "Is Augment just lessons Videos",
            content: "No, Augment offers a comprehensive learning experience. In addition to video lessons, you will have access to live Q&A sessions, mentorship, and hands-on projects to apply your knowledge."
        },
        {
            title: "Is Augment Acrredited?",
            content: "While Augment is not a traditional accredited institution, our courses are designed by industry experts and recognized by employers. We focus on practical skills that are in demand in the job market."
        },
        {
            title: "What is the refund policy?",
            content: "We offer a 30-day money-back guarantee. If you're not satisfied with the course within the first 30 days, you can request a full refund."
        },
        {
            title: "How do I get started?",
            content: "Getting started is easy! Simply sign up on our website, choose your desired course, and start learning at your own pace."
        },
        {
            title: "What if I have more questions?",
            content: "Feel free to reach out to our support team via email or chat. We're here to help!"
        }

    ];

    return (
        <div>
            <div className="pt-16 pb-16">
                <div className="w-[90%] mx-auto">
                    <div className="flex flex-col md:flex-row gap-10 justify-between px-12 md:px-40 ">

                        <h1 className="text-3xl md:text-4xl max-w-[350px] font-sans pt-6 pb-10">
                            Frequently Asked Questions
                        </h1>



                        <div>
                            {items.map((item, index) => (
                                <div key={index} className="">
                                    <div className=" flex justify-between w-[100%] md:w-[800px] max-w-[100%] items-center text-xl font-sans font-semibold mt-4 border-b pb-2 space-y-6" onClick={() => toggleAccordion(index)}>
                                        <p className="">{item.title}</p>
                                        <span className="arrow">
                                            {openIndex === index ? <BiChevronUp /> : <BiChevronDown />}
                                        </span>
                                    </div>

                                    {openIndex === index && (
                                        <div className="accordion-content">
                                            <p className="w-[100%] md:w-[800px]">{item.content}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
