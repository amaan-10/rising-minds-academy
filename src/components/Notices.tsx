"use client";

import React from "react";
import { easeInOut, motion, useAnimation, useInView } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Notices as NoticesData } from "@/lib/notices";

const variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.025, duration: 0.25, ease: easeInOut },
  }),
};

export default function Notices({ isAbout = false }: { isAbout?: boolean }) {
  const ref = React.useRef<HTMLHeadingElement | null>(null);

  const Aboutref = React.useRef<HTMLHeadingElement | null>(null);
  const inView = useInView(Aboutref, { amount: 0.15 });
  const controls = useAnimation();
  const pathname = usePathname();
  const hasAnimatedRef = React.useRef(false);

  console.log(inView, isAbout, controls);
  // start/stop animation based on intersection
  React.useEffect(() => {
    hasAnimatedRef.current = false;
  }, [pathname]);

  React.useEffect(() => {
    if (hasAnimatedRef.current) return;
    if (inView || isAbout) {
      controls.start("visible");
      hasAnimatedRef.current = true;
    } else controls.start("hidden");
  }, [inView, isAbout, controls]);

  return (
    <div>
      <section
        id="hero-section"
        className="py-16 md:py-20 px-5 md:px-8 bg-[#faf7ef] h-full md:h-[400px] w-full"
      >
        <div className="flex flex-col md:flex-row items-start relative w-full h-full gap-6 md:gap-0">
          {/* Left content */}
          <div className="flex flex-col items-center md:items-start gap-6 w-full">
            <motion.h1
              ref={Aboutref}
              initial="hidden"
              animate={controls}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight tracking-tight text-gray-900 text-center md:text-left"
            >
              {"Important Notice".split("").map((ch, i) => (
                <motion.span key={`${ch}-${i}`} custom={i} variants={variants}>
                  {ch}
                </motion.span>
              ))}
            </motion.h1>
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
              className="flex flex-col w-full md:max-w-md font-body text-lg md:text-xl text-gray-600 text-center md:text-left"
            >
              Please be informed that all students and faculty members are
              required to update their contact information in the academy portal
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-white flex flex-col gap-20">
        <div className="flex flex-col md:flex-row gap-16 relative w-full items-center md:items-start text-center md:text-left">
          <motion.h2
            ref={ref}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: true, amount: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-[#12161a] w-full max-w-[230px] lg:max-w-[420px]"
          >
            {"All Notice".split("").map((word, i) => (
              <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
                {word}
              </motion.span>
            ))}
          </motion.h2>

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
            className="flex flex-col flex-[1_0_0] justify-start items-start gap-12 max-w-[660px] h-min p-0 relative"
          >
            {/*  */}
            {NoticesData.map((notice, index) => (
              <div
                key={index}
                className="flex flex-row flex-none place-content-center items-center gap-2.5 w-full h-min p-0 relative"
              >
                <div className="flex-[1_0_0] h-auto relative">
                  <div className="flex flex-col justify-start items-start gap-8 w-full max-w-[515px] h-min pb-12 relative overflow-visible border-b border-[rgba(59,59,59,0.12)]">
                    <div className="flex flex-col flex-none justify-start items-start gap-4 w-full h-min p-0 relative overflow-visible">
                      <div className="flex flex-col flex-none justify-start items-start gap-2 w-full h-min p-0 relative overflow-visible">
                        <div className="outline-none flex flex-col justify-start shrink-0 whitespace-pre-wrap wrap-break-word flex-none w-full h-auto relative opacity-100">
                          <p className="text-[#cf102d] font-heading font-medium text-base">
                            {notice.date}
                          </p>
                        </div>
                        <div className="outline-none flex flex-col justify-start shrink-0 whitespace-pre-wrap wrap-break-word flex-none w-full h-auto relative opacity-100">
                          <h4 className="text-2xl font-heading font-semibold text-[#12161a]">
                            {notice.title}
                          </h4>
                        </div>
                      </div>
                      <div className="outline-none flex flex-col justify-start shrink-0 whitespace-pre-wrap wrap-break-word flex-none w-full h-auto relative opacity-100">
                        <p className="text-[#3b3b3b] font-body font-normal text-base">
                          {notice.shortDescription}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full justify-center md:justify-start h-auto relative">
                      <div className="cursor-pointer flex flex-row justify-center items-center gap-2.5 w-min h-min p-0 relative overflow-hidden">
                        <Link
                          href={notice.link}
                          className="flex flex-row flex-none justify-center items-center gap-[5px] w-min h-min p-0 no-underline relative overflow-hidden group"
                        >
                          <div className="flex flex-row flex-none justify-center items-center gap-2.5 w-min h-min p-0 relative overflow-hidden">
                            <div className="outline-none flex flex-col justify-center shrink-0 whitespace-pre flex-none w-auto h-auto relative opacity-100">
                              <p className="text-base font-heading font-medium text-[#12161a]">
                                Read more
                              </p>
                            </div>
                          </div>
                          <div className="aspect-square h-[19px] flex flex-row flex-none items-center gap-2.5 w-5 p-0 relative overflow-hidden">
                            <div className="z-1 flex-none w-full h-full absolute top-0 left-0">
                              <div
                                className="flex items-center justify-center flex-row flex-nowrap gap-2.5 flex-none h-min w-min min-h-5 min-w-5 overflow-hidden mr-[3px] relative -rotate-90"
                                style={{ opacity: 1 }}
                              >
                                <div className="absolute transition-all duration-300 ease-in-out group-hover:translate-x-[21px] group-hover:translate-y-[21px]">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="var(--token-21001bb2-95fc-4899-93cf-7cca6736a1a2, rgb(0, 0, 0))"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ width: "100%", height: "100%" }}
                                    className="stroke-[#12161a] transition-colors duration-300"
                                  >
                                    <line x1="7" y1="7" x2="17" y2="17"></line>
                                    <polyline points="17 7 17 17 7 17"></polyline>
                                  </svg>
                                </div>

                                <div className="absolute top-[-21px] left-[-21px] w-5 h-5 transition-all duration-300 ease-in-out group-hover:translate-x-[21px] group-hover:translate-y-[21px]">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="var(--token-21001bb2-95fc-4899-93cf-7cca6736a1a2, rgb(0, 0, 0))"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ width: "100%", height: "100%" }}
                                    className=" stroke-[#12161a] transition-colors duration-300"
                                  >
                                    <line x1="7" y1="7" x2="17" y2="17"></line>
                                    <polyline points="17 7 17 17 7 17"></polyline>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
