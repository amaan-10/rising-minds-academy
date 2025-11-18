"use client";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useRef } from "react";
import { easeInOut, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.025, duration: 0.25, ease: easeInOut },
  }),
};

const FAQPage = () => {
  const ref = useRef(null);
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-start items-start flex-none gap-5 h-min max-w-[1400px] overflow-visible px-[50px] pt-20 pb-[130px] relative">
        <div className="flex-none h-auto max-w-[850px] relative whitespace-pre-wrap w-full wrap-break-word">
          <h6 className="text-sm font-semibold text-[#3b3b3b]">
            Frequently Asked Questions
          </h6>
        </div>
        <div className="flex-none h-auto max-w-[60%] relative whitespace-pre-wrap w-full wrap-break-word">
          <motion.h1
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-5xl md:text-[68px] font-medium leading-tight tracking-tight text-[#12161a]"
          >
            {"Smart Learning Begins With the Right Guidance"
              .split("")
              .map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  variants={variants}
                  custom={i}
                >
                  {word}
                </motion.span>
              ))}
          </motion.h1>
        </div>
        <div className="flex-none h-auto max-w-[635px] relative whitespace-pre-wrap w-full wrap-break-word">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
              delay: 1.2,
            }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col text-lg md:text-xl text-[#3b3b3b] w-full"
          >
            We bring focused teaching, effective strategies, and personalized
            support to help Class 1-10 students build strong fundamentals and
            achieve outstanding results in CBSE and Maharashtra Board exams.
          </motion.p>
        </div>
      </div>
      <section className="flex flex-row justify-center items-center flex-none gap-0 h-min overflow-clip pb-[130px] relative w-full">
        <div className="flex flex-row justify-start items-start flex-1 gap-[110px] h-min max-w-[1400px] overflow-visible px-[50px] relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex-1 h-[503px] max-w-[530px] overflow-clip relative w-full"
          >
            <div className="absolute inset-0">
              <Image
                decoding="auto"
                width="1333"
                height="2000"
                sizes="min(max((min(max(100vw, 1px), 1400px) - 210px) / 2, 1px), 530px)"
                src="/faq.jpg"
                alt="Conference"
                className="block w-full h-full rounded-inherit object-cover object-[0%_30%]"
              />
            </div>
          </motion.div>
          <div className="relative h-auto w-1/2">
            <FAQ />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
