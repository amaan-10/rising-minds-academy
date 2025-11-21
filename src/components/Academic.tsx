"use client";
import { AcademicCard } from "./AcademicCard";
import { Academic as AcademicData } from "@/lib/academics";
import { easeInOut, motion } from "framer-motion";
import { useRef } from "react";

const variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.025, duration: 0.25, ease: easeInOut },
  }),
};

const Academic = () => {
  const ref = useRef(null);

  return (
    <div>
      <section
        id="hero-section"
        className="py-16 md:py-20 px-5 md:px-8 bg-[#faf7ef] h-full md:h-[400px] w-full"
      >
        <div className="flex flex-col md:flex-row items-start relative w-full h-full gap-6 md:gap-0">
          {/* Left content */}
          <div className="flex flex-col items-center md:items-start gap-6 w-full">
            <motion.h2
              ref={ref}
              initial="hidden"
              animate="visible"
              variants={variants}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight tracking-tight text-[#12161a]"
            >
              {"Academics".split("").map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  variants={variants}
                  custom={i}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          <div className="w-1 h-[400px] -my-20 bg-[#3b3b3b1f] mx-6 hidden md:block"></div>

          {/* Right content */}
          <div className="flex flex-row items-center md:items-end justify-center md:justify-start w-full h-full pl-0 md:pl-12 lg:pl-24">
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
              className="flex flex-col w-full md:max-w-md text-lg md:text-xl font-body text-gray-600 text-center md:text-left"
            >
              We are a forward-thinking academy committed to academic
              excellence, innovation, and real-world impact.
            </motion.p>
          </div>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 12,
          delay: 0.5,
        }}
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-8 md:py-20 px-5 md:px-8"
      >
        {AcademicData.map((academic, index) => (
          <AcademicCard key={index} {...academic} />
        ))}
      </motion.section>
    </div>
  );
};

export default Academic;
