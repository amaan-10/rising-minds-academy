"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";
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

const AboutPage = () => {
  const ref = React.useRef<HTMLHeadingElement | null>(null);
  const [id, setId] = useState("");
  const [password, setPassWord] = useState("");
  return (
    <div>
      <Header />
      <section className="flex flex-col flex-none justify-center items-center content-center gap-0 h-min overflow-visible p-0 relative w-full">
        <div className="flex flex-col flex-none items-center content-center gap-0 h-screen justify-center overflow-visible pt-[72px] relative w-full">
          <div className="rounded-[48px] shadow-[4px_8px_40px_4px_#00000014] flex-none absolute inset-5 overflow-hidden z-1">
            <div className="border-200 border-[#93ccfd] border-solid blur-[100px] aspect-square rounded-[2000px] bottom-[-400px] flex-none h-[2500px] overflow-hidden absolute right-[-460px] w-[2500px] z-1">
              <div className="blur-[50px] aspect-square flex-none bottom-[151px] h-[500px] left-[676px] overflow-hidden absolute w-[500px] z-1"></div>
            </div>
            <div className="border-100 border-[#e9a9fe] border-solid blur-[90px] aspect-square rounded-[3000px] bottom-[-250px] flex-none h-[2500px] overflow-hidden absolute right-[-300px] w-[2500px]"></div>
          </div>
          <div className="flex flex-col flex-none items-center content-center gap-16 h-min justify-center max-w-[1360px] overflow-visible px-5 relative w-full z-3">
            <div className="flex flex-row flex-none items-center content-center gap-0 h-min justify-start overflow-visible p-0 relative w-full">
              <div className="flex flex-col flex-none items-center content-center gap-0 h-min justify-start overflow-visible px-5 relative w-full">
                <div className="flex flex-col lg:flex-row flex-none items-center content-center gap-8 md:gap-20 lg:gap-[120px] h-min justify-center overflow-visible px-4 md:px-8 lg:px-12 relative w-full">
                  <div className="flex flex-col flex-[1_0_0] items-start content-start gap-6 h-min justify-start overflow-visible p-0 relative">
                    <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full wrap-break-word">
                      <motion.h2
                        ref={ref}
                        initial="hidden"
                        whileInView="visible"
                        variants={variants}
                        viewport={{ once: true, amount: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold font-heading text-[#12161a]"
                      >
                        {"Hello Student!".split("").map((word, i) => (
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
                    <div className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full wrap-break-word">
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
                        className="text-[#3b3b3b] font-normal font-body text-base"
                      >
                        Log in to access smart study tools, detailed
                        chapter-wise notes, interactive practice tests, and
                        performance analytics designed to help you improve
                        faster and study smarter.
                      </motion.p>
                    </div>
                  </div>
                  <div className="flex flex-row flex-[1_0_0] items-center content-center gap-2.5 h-min justify-center overflow-visible p-0 relative w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 12,
                        delay: 1,
                      }}
                      viewport={{ once: true, amount: 0.6 }}
                      className="flex flex-row flex-[1_0_0] items-center content-center gap-0 h-min justify-center overflow-hidden p-7 md:p-10 lg:p-12 relative rounded-3xl z-3 shadow-[2px_4px_25px_3px_rgba(0,0,0,0.08)] bg-[rgba(255,255,255,0.8)]"
                    >
                      <form className="flex flex-col flex-[1_0_0] items-start content-start gap-6 h-min justify-start overflow-hidden p-0 relative">
                        <div className="flex flex-col flex-none items-center content-center gap-4 h-min justify-center overflow-hidden p-0 relative w-full">
                          <label className="flex flex-col flex-none items-start content-start gap-2.5 h-min justify-start p-0 relative w-full">
                            <input
                              type="text"
                              name="id"
                              placeholder="Your Id"
                              className="flex-none h-12 relative w-full bg-white border border-[rgba(0,0,0,0.24)] rounded-lg text-[#1c1c1c] text-[16px] font-heading leading-[1.2em] font-normal placeholder-[rgba(0,0,0,0.48)] px-6 py-3"
                              value={id}
                              onChange={(e) => setId(e.target.value)}
                              required
                            />
                          </label>
                          <label className="flex flex-col flex-none items-start content-start gap-2.5 h-min justify-start p-0 relative w-full">
                            <input
                              type="password"
                              name="Password"
                              placeholder="Password"
                              className="flex-none h-12 relative w-full bg-white border border-[rgba(0,0,0,0.24)] rounded-lg text-[#1c1c1c] text-[16px] font-heading leading-[1.2em] font-normal placeholder-[rgba(0,0,0,0.48)] px-6 py-3"
                              value={password}
                              onChange={(e) => setPassWord(e.target.value)}
                              required
                            />
                          </label>
                        </div>
                        <div className="flex-none h-auto relative w-full">
                          <button
                            type="submit"
                            className="bg-[rgb(28,28,28)] rounded-[64px] opacity-100 flex items-center content-center cursor-pointer flex-row gap-0 h-min justify-center min-w-[180px] overflow-visible py-3 px-6 relative w-full"
                          >
                            <div className="outline-none flex flex-col justify-start shrink-0 text-[rgb(0,153,255)] opacity-100 select-none flex-none h-auto relative whitespace-pre w-auto">
                              <p className="text-base text-white font-heading font-medium">
                                Submit
                              </p>
                            </div>
                          </button>
                        </div>
                      </form>
                    </motion.div>
                    <div
                      className="blur-[50px] flex-none h-[400px] -left-20 overflow-hidden absolute -top-20 w-[400px] z-1"
                      style={{
                        background:
                          "radial-gradient(50% 50% at 50% 50%, #f2d2ff 0%, rgba(255,255,255,0) 100%)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
