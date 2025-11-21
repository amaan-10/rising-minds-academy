"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const faqData = [
  {
    question: "Which classes do you provide coaching for?",
    answer: [
      "We offer coaching for students from Class 1 to 10, covering both CBSE and Maharashtra State Board. Each grade has separate batches, syllabus plans, and teaching methods designed according to board guidelines.",
    ],
  },
  {
    question: "What subjects do you teach?",
    answer: [
      "We provide complete academic support in all major subjects, including Mathematics, Science, English, Marathi / Hindi, Social Studies and EVS (for lower grades) Class 9th & 10th students also receive board-oriented preparation with chapter tests and model papers.",
    ],
  },
  {
    question: "How are batches structured?",
    answer: [
      "Batches are kept small to ensure focus and personal attention, with separate groups for each board and class, along with extra help for slow learners.",
    ],
  },
  {
    question: "Do you provide study materials?",
    answer: [
      "Yes! We provide:",
      "Chapter-wise notes",
      "Solved examples",
      "Weekly tests",
      "Monthly assessments",
      "Previous year's board-style question papers (for 9th & 10th)",
      "Homework sheets for Classes 1-8",
      "Everything is designed according to the student's board and grade.",
    ],
  },
  {
    question: "How do you track student progress?",
    answer: [
      "We conduct weekly tests, monthly reports, and regular parent updates to monitor performance and provide extra support where needed.",
    ],
  },
  {
    question: "What are the class timings?",
    answer: [
      "We offer convenient morning and evening batches, weekend sessions, and extra classes during exam periods for flexible learning.",
    ],
  },
];

const FAQ = () => {
  const [openStates, setOpenStates] = useState<boolean[]>(
    faqData.map(() => false)
  );

  const toggle = (index: number) => {
    setOpenStates((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const [parent] = useAutoAnimate({
    duration: 600,
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  });
  return (
    <section className="flex flex-col items-center justify-center bg-white gap-0 w-full h-min overflow-hidden relative">
      <div className="flex flex-col items-center justify-center flex-none flex-nowrap gap-[60px] h-min overflow-hidden p-0 relative w-full">
        <div className="flex flex-col items-center justify-center flex-none flex-nowrap h-min w-full max-w-[1018px] overflow-hidden p-0 relative">
          {faqData.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 40,
                delay: 0.4,
                duration: 0.3,
              }}
              viewport={{ once: true, amount: 0.2 }}
              key={index}
              onClick={() => toggle(index)}
              className="cursor-pointer border-b-2 border-black/50 w-full overflow-hidden"
            >
              <div className="pt-6 px-6 flex flex-col gap-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl md:text-[23px] font-heading font-semibold text-[#111111] font-urbanist">
                    {faq.question}
                  </h3>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    initial={false}
                    animate={{ rotate: openStates[index] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#616161"
                  >
                    <polyline
                      points="6 9 12 15 18 9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </div>

                <div ref={parent}>
                  {openStates[index] && (
                    <div className="text-[#616161] pb-6 text-base font-body font-normal">
                      <p>{faq.answer.slice(0, 1)}</p>
                      {faq.answer.length > 1 && (
                        <>
                          <ul className="list-disc pl-10 space-y-1 mt-2">
                            {faq.answer.slice(1, -1).map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>

                          <p className="mt-3">
                            {faq.answer[faq.answer.length - 1]}
                          </p>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
