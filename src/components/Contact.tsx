"use client";
import React from "react";
import MapSection from "./MapSection";
import { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { useRef } from "react";

type Requirement = {
  id: string;
  text: string;
};

const REQUIREMENTS: Requirement[] = [
  {
    id: "r1",
    text: "Completed admission/enrollment form for classes 1 to 10",
  },
  {
    id: "r2",
    text: "Previous school report card or progress sheet (latest academic year)",
  },
  {
    id: "r3",
    text: "Birth certificate or age proof document",
  },
  {
    id: "r4",
    text: "Aadhaar card copy of the student (optional but recommended)",
  },
  {
    id: "r5",
    text: "Passport-size photographs of the student (2-4 copies)",
  },
  {
    id: "r6",
    text: "Address proof of parent/guardian (Aadhaar, electricity bill, etc.)",
  },
  {
    id: "r7",
    text: "School leaving certificate (if applicable for transfers)",
  },
  {
    id: "r8",
    text: "Parent/guardian contact details for communication",
  },
  {
    id: "r9",
    text: "Admission/registration fee payment (as per academy guidelines)",
  },
];

const variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.025, duration: 0.25, ease: easeInOut },
  }),
};

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const Titleref = useRef(null);
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
              ref={Titleref}
              initial="hidden"
              animate="visible"
              variants={variants}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight tracking-tight text-[#12161a]"
            >
              {"Get In Touch".split("").map((word, i) => (
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
              Have questions about our tuition programs for Grades 1 to 10?
              We&apos;re here to guide you and help you choose the right
              learning path for your child.
            </motion.p>
          </div>
        </div>
      </section>
      <section className="flex flex-col flex-none justify-center items-center gap-0 h-min overflow-hidden py-20 px-[30px] pb-[70px] relative w-full">
        <div className="flex flex-col flex-none justify-center items-center gap-14 h-min max-w-[1320px] overflow-hidden p-0 relative w-full z-0">
          <div className="flex flex-col lg:flex-row flex-none justify-start items-start gap-10 lg:gap-16 h-min overflow-visible p-0 relative w-full">
            <div className="flex flex-col flex-[1_0_0px] self-stretch overflow-visible p-0 relative">
              <div className="outline-none flex flex-col gap-5 items-center md:items-start justify-start shrink-0 flex-[1_0_0px] h-auto max-w-[569px] relative whitespace-pre-wrap wrap-break-word">
                <motion.h2
                  ref={ref}
                  initial="hidden"
                  whileInView="visible"
                  variants={variants}
                  viewport={{ once: true, amount: 0.6 }}
                  className="text-[#12161a] text-3xl md:text-4xl lg:text-5xl font-heading font-semibold"
                >
                  {"Send us a Message".split("").map((word, i) => (
                    <motion.span
                      key={`${word}-${i}`}
                      variants={variants}
                      custom={i}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                    delay: 0.5,
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="text-base font-body text-[#3b3b3b] text-center md:text-left"
                >
                  Fill out the form and we&apos;ll get back to you within 24hrs
                </motion.p>
              </div>
              <div className="hidden lg:flex flex-row flex-none items-start justify-between h-min overflow-clip mb-7 relative w-full">
                <div className="flex flex-col justify-start items-start flex-1 gap-2.5 h-min overflow-clip p-0 relative w-px">
                  <div className="flex flex-row justify-start items-start flex-none gap-2.5 h-min overflow-clip p-0 relative w-full">
                    <div className="relative flex self-center justify-center h-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-5 w-5"
                      >
                        <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" />
                      </svg>
                    </div>
                    <div className="flex-none h-auto relative whitespace-pre w-auto">
                      <motion.h5
                        ref={ref}
                        initial="hidden"
                        whileInView="visible"
                        variants={variants}
                        viewport={{ once: true }}
                        className="text-xl font-semibold font-heading text-black"
                      >
                        {"Call Us".split("").map((word, i) => (
                          <motion.span
                            key={`${word}-${i}`}
                            variants={variants}
                            custom={i}
                          >
                            {word}
                          </motion.span>
                        ))}
                      </motion.h5>
                    </div>
                  </div>
                  <div className="flex-none h-auto relative whitespace-pre-wrap w-full wrap-break-word">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 12,
                        delay: 0.5,
                      }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="text-base font-body text-[#787878]"
                    >
                      +91 9876543210
                    </motion.p>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start flex-1 gap-2.5 h-min overflow-clip p-0 relative w-px">
                  <div className="flex flex-row justify-start items-start flex-none gap-2.5 h-min overflow-clip p-0 relative w-full">
                    <div className="relative flex self-center justify-center h-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-5 w-5"
                      >
                        <path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z" />
                      </svg>
                    </div>
                    <div className="flex-none h-auto relative whitespace-pre w-auto">
                      <motion.h5
                        ref={ref}
                        initial="hidden"
                        whileInView="visible"
                        variants={variants}
                        viewport={{ once: true }}
                        className="text-xl font-semibold font-heading text-black"
                      >
                        {"Email".split("").map((word, i) => (
                          <motion.span
                            key={`${word}-${i}`}
                            variants={variants}
                            custom={i}
                          >
                            {word}
                          </motion.span>
                        ))}
                      </motion.h5>
                    </div>
                  </div>
                  <div className="flex-none h-auto relative whitespace-pre-wrap w-full wrap-break-word">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 12,
                        delay: 0.5,
                      }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="text-base font-body text-[#787878]"
                    >
                      contact@risingmindsacademy.com
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
            <form className="flex flex-col flex-[1_0_0px] justify-start items-start gap-5 h-min w-full max-w-[580px] overflow-visible p-0 relative">
              <label className="flex flex-col justify-start items-start gap-2.5 h-min p-0 relative w-full flex-none">
                <div className="outline-none flex flex-col justify-start flex-none h-auto relative whitespace-pre w-auto">
                  <p className="text-[#12161a] font-heading text-base">
                    Your Name <span className="text-[#ff0000]">*</span>
                  </p>
                </div>
                <div className="relative w-full h-auto border border-[#3b3b3b1f] font-body rounded-lg">
                  <input
                    type="text"
                    name="Your Name"
                    placeholder="Your Name"
                    className="p-[12px_18px_12px_18px] w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </label>
              <label className="flex flex-col justify-start items-start flex-none gap-2 h-min p-0 relative w-full">
                <div className="outline-none flex flex-col justify-start flex-none h-auto relative whitespace-pre w-auto">
                  <p className="text-[#12161a] font-heading text-base">
                    Phone No. <span className="text-[#ff0000]">*</span>
                  </p>
                </div>
                <div className="relative w-full h-auto border border-[#3b3b3b1f] font-body rounded-lg">
                  <input
                    type="phone"
                    required
                    name="Phone No."
                    placeholder="Your Phone No."
                    className="p-[12px_18px_12px_18px] w-full"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </label>
              <label className="flex flex-col justify-start items-start flex-none gap-2.5 h-min p-0 relative w-full">
                <div className="outline-none flex flex-col justify-start flex-none h-auto relative whitespace-pre w-auto">
                  <p className="text-[#12161a] font-heading text-base">
                    Select Class
                  </p>
                </div>
                <div className="relative w-full h-auto border border-[#3b3b3b1f] font-body rounded-lg">
                  <select
                    name="Select Class"
                    className="p-[12px_18px_12px_18px] w-full"
                    defaultValue="0"
                  >
                    <option value="0" disabled className="text-[#0006]">
                      Choose an option
                    </option>
                    <option value="1">1st to 4th</option>
                    <option value="2">5th to 8th</option>
                    <option value="3">9th</option>
                    <option value="4">10th</option>
                  </select>
                </div>
              </label>
              <label className="flex flex-col justify-start items-start flex-none gap-2.5 h-min p-0 relative w-full">
                <div className="outline-none flex flex-col justify-start flex-none h-auto relative whitespace-pre w-auto">
                  <p className="text-[#12161a] font-heading text-base">
                    Message <span className="text-[#ff0000]">*</span>
                  </p>
                </div>
                <div className="relative w-full h-auto border border-[#3b3b3b1f] font-body rounded-lg">
                  <textarea
                    required
                    name="Message"
                    placeholder="Write your message"
                    className="p-[12px_18px_12px_18px] w-full"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </label>
              <div className="relative w-auto h-auto">
                <button
                  type="submit"
                  className="flex items-center justify-center cursor-pointer flex-row gap-0 h-min overflow-visible px-8 py-3.5 relative w-min bg-[#efa027] rounded opacity-100"
                >
                  <div className="outline-none flex flex-col justify-start flex-none h-auto relative select-none whitespace-pre w-auto">
                    <p className="text-white text-base font-heading font-medium">
                      Send Message
                    </p>
                  </div>
                </button>
              </div>
            </form>
            <div className="flex lg:hidden flex-row flex-none items-start justify-between h-min overflow-clip mb-7 relative w-full">
              <div className="flex flex-col justify-start items-start flex-1 gap-2.5 h-min overflow-clip p-0 relative w-px">
                <div className="flex flex-row justify-start items-start flex-none gap-2.5 h-min overflow-clip p-0 relative w-full">
                  <div className="relative flex self-center justify-center h-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="h-5 w-5"
                    >
                      <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" />
                    </svg>
                  </div>
                  <div className="flex-none h-auto relative whitespace-pre w-auto">
                    <motion.h5
                      ref={ref}
                      initial="hidden"
                      whileInView="visible"
                      variants={variants}
                      viewport={{ once: true }}
                      className="text-xl font-semibold font-heading text-black"
                    >
                      {"Call Us".split("").map((word, i) => (
                        <motion.span
                          key={`${word}-${i}`}
                          variants={variants}
                          custom={i}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.h5>
                  </div>
                </div>
                <div className="flex-none h-auto relative whitespace-pre-wrap w-full wrap-break-word">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 12,
                      delay: 0.5,
                    }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="text-base font-body text-[#787878]"
                  >
                    +91 9876543210
                  </motion.p>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-1 gap-2.5 h-min overflow-clip p-0 relative w-px">
                <div className="flex flex-row justify-start items-start flex-none gap-2.5 h-min overflow-clip p-0 relative w-full">
                  <div className="relative flex self-center justify-center h-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="h-5 w-5"
                    >
                      <path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z" />
                    </svg>
                  </div>
                  <div className="flex-none h-auto relative whitespace-pre w-auto">
                    <motion.h5
                      ref={ref}
                      initial="hidden"
                      whileInView="visible"
                      variants={variants}
                      viewport={{ once: true }}
                      className="text-xl font-semibold font-heading text-black"
                    >
                      {"Email".split("").map((word, i) => (
                        <motion.span
                          key={`${word}-${i}`}
                          variants={variants}
                          custom={i}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.h5>
                  </div>
                </div>
                <div className="flex-none h-auto relative whitespace-pre-wrap w-full wrap-break-word">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 12,
                      delay: 0.5,
                    }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="text-base font-body text-[#787878]"
                  >
                    contact@risingmindsacademy.com
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col flex-none justify-center items-center gap-0 h-min overflow-hidden py-20 px-[30px] pb-[70px] relative w-full">
        <div className="flex flex-col flex-none justify-center items-center gap-8 h-min max-w-[1320px] overflow-hidden p-0 relative w-full z-0">
          <div className="flex flex-row flex-[1_0_0px] justify-start items-start gap-[60px] h-min overflow-visible p-0 relative">
            <div className="outline-none flex flex-col justify-center shrink-0 flex-[1_0_0px] h-auto max-w-[569px] relative whitespace-pre-wrap wrap-break-word">
              <motion.h2
                ref={ref}
                initial="hidden"
                whileInView="visible"
                variants={variants}
                viewport={{ once: true }}
                className="text-[#12161a] text-3xl md:text-4xl font-heading font-semibold text-center md:text-left"
              >
                {"Application Requirements".split("").map((word, i) => (
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
          </div>

          <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none ">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 12,
                delay: 0.5,
              }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-base font-body text-[#787878] text-center lg:text-left"
            >
              All students — whether new admissions or transferring from another
              school — are required to complete the following enrollment steps:
            </motion.p>
          </div>

          {/* Requirements list: responsive 1/2 column layout */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
              delay: 0.5,
            }}
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-8"
          >
            {REQUIREMENTS.map((req) => (
              <li key={req.id} className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="inline-flex self-center justify-self-center h-2 w-2 shrink-0 rounded-full bg-gray-900"
                />
                <p className="text-base font-body text-gray-800 leading-relaxed">
                  {req.text}
                </p>
              </li>
            ))}
          </motion.ul>

          {/* Optional CTA area if you want an Apply button */}
          <div className="mt-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 12,
                delay: 0.5,
              }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-base font-body text-gray-600 text-center lg:text-left"
            >
              Need help with your application or have questions about required
              documents? Reach out to our admissions team.
            </motion.p>
          </div>
        </div>
      </section>
      <MapSection
        query="Chetna Garden, Building A/2, Chetna Garden, Meetha Nagar, Kondhwa Khurd, Pune 411048., Meeta Nagar, Kondhwa, Pune, Maharashtra 411048"
        zoom={12}
      />
    </div>
  );
};

export default Contact;
