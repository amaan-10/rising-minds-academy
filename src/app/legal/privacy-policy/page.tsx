"use client";

import React, { useRef } from "react";
import { easeInOut, motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Policy as policyData } from "@/lib/policy";

const variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.025, duration: 0.25, ease: easeInOut },
  }),
};

export default function PrivacyPolicyPage() {
  const ref = useRef(null);

  return (
    <div>
      <Header />
      <section
        id="hero-section"
        className="py-20 px-8 bg-[#faf7ef] h-[400px] w-full"
      >
        <div className="flex flex-row items-start relative w-full h-full flex-1">
          {/* Left content */}
          <div className="flex flex-col items-start gap-6 w-full">
            <motion.h1
              ref={ref}
              initial="hidden"
              animate="visible"
              variants={variants}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-heading font-semibold leading-tight tracking-tight text-gray-900"
            >
              {"Privacy Policy".split("").map((ch, i) => (
                <motion.span key={`${ch}-${i}`} custom={i} variants={variants}>
                  {ch}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <div className="w-1 h-[400px] -my-20 bg-[#3b3b3b1f] mx-6"></div>

          {/* Right content */}
          <div className="flex flex-row items-end w-full h-full pl-24">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 12,
                delay: 0.5,
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="flex flex-col max-w-md text-lg md:text-xl font-body text-gray-600"
            >
              Last Updated: 18 Nov, 2025
            </motion.p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-24 w-full h-min p-[76px_30px_100px] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 12,
            delay: 0.5,
          }}
          viewport={{ once: true, amount: 0.1 }}
          className="z-1 flex flex-col items-center gap-14 w-full max-w-[1320px] h-min relavtive overflow-visible"
        >
          <div className="relative flex h-auto w-full flex-none max-w-[912px] flex-col justify-start shrink-0 whitespace-pre-wrap wrap-break-words outline-none opacity-100 will-change-transform transform-none">
            {policyData.map((item, index) => (
              <div key={index} className="mb-10">
                <h3 className="text-[32px] text-[#12161a] font-heading font-semibold">
                  {item.title}
                </h3>

                <br />

                <p className="text-base text-[#3b3b3b] font-body font-normal">
                  {item.description}
                </p>

                {/* Add <br /><br /> except for the LAST item */}
                {index !== policyData.length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
