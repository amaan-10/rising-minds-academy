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
      <div className="flex flex-col justify-start items-start flex-none gap-5 h-min max-w-[1400px] overflow-visible py-16 md:py-20 px-5 md:px-8 relative">
        <div className="flex-none h-auto max-w-[850px] relative whitespace-pre-wrap w-full wrap-break-word">
          <h6 className="text-sm font-body font-semibold text-[#3b3b3b]">
            Frequently Asked Questions
          </h6>
        </div>
        <div className="flex-none h-auto max-w-[75%] lg:max-w-[60%] relative whitespace-pre-wrap w-full wrap-break-word">
          <motion.h1
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium leading-tight tracking-tight text-[#12161a]"
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
            className="flex flex-col text-base md:text-lg lg:text-xl font-body text-[#3b3b3b] w-full"
          >
            We bring focused teaching, effective strategies, and personalized
            support to help Class 1-10 students build strong fundamentals and
            achieve outstanding results in CBSE and Maharashtra Board exams.
          </motion.p>
        </div>
      </div>

      <section className="flex justify-center items-center w-full pb-20 md:pb-[100px] lg:pb-[130px] relative">
        <div className="flex flex-col lg:flex-row justify-start items-start w-full max-w-[1400px] gap-8 md:gap-20 lg:gap-[110px] px-4 md:px-8">
          {/* Image block */}
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
            className="w-full lg:flex-1 lg:max-w-[530px] h-[360px] md:h-[503px] overflow-hidden relative"
          >
            <div className="absolute inset-0">
              <Image
                decoding="auto"
                width={1333}
                height={2000}
                sizes="(min-width: 768px) 50vw, 100vw"
                src="/faq.jpg"
                alt="Conference — people at a discussion table"
                className="block w-full h-full object-cover object-[0%_30%]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* FAQ block */}
          <div className="w-full lg:w-1/2 relative">
            <FAQ />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
