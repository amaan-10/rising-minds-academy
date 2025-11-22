"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { getNoticesBySlug } from "@/lib/notices";
import { NoticeItem } from "@/types/notices";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
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

export default function NoticePage() {
  const params = useParams();
  const { slug } = params;
  const item: NoticeItem | null =
    typeof slug === "string" ? getNoticesBySlug(slug) : null;

  const Aboutref = React.useRef<HTMLHeadingElement | null>(null);

  if (!item) return notFound();

  return (
    <>
      <Header />
      <section
        id="hero-section"
        className="py-16 md:py-20 px-5 md:px-8 bg-[#faf7ef] h-full md:h-[400px] w-full"
      >
        <div className="flex flex-col md:flex-row items-start relative w-full h-full gap-6 md:gap-0">
          {/* Left content */}
          <div className="flex flex-col items-center md:items-start gap-6 w-full">
            <motion.h2
              ref={Aboutref}
              initial="hidden"
              animate="visible"
              variants={variants}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight tracking-tight text-[#12161a] text-center md:text-left"
            >
              {item.title.split("").map((word, i) => (
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
              {item.shortDescription}
            </motion.p>
          </div>
        </div>
      </section>
      <section className="flex flex-col flex-none justify-center items-center gap-0 w-full h-min px-[30px] pt-16 pb-[76px] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 12,
            delay: 0.5,
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="z-0 flex flex-col flex-none justify-center items-center gap-14 w-full max-w-[1320px] h-min p-0 relative overflow-hidden"
        >
          <div className="flex flex-row flex-none justify-center items-center gap-16 w-full h-min p-0 relative overflow-visible">
            <div className="outline-none flex flex-col justify-center shrink-0 whitespace-pre-wrap wrap-break-word flex-[1_0_0] w-px max-w-[773px] h-auto relative">
              <p className="text-base font-body text-[#3b3b3b]">
                {item.overview}
              </p>
              <br />
              <h3 className="text-3xl lg:text-4xl text-[#12161a] font-heading font-medium">
                Key Details
              </h3>
              <ul className="mt-8 list-disc list-inside space-y-1">
                {item.keyDetails.map((topic, idx) => (
                  <li className="text-base font-body text-[#3b3b3b]" key={idx}>
                    {topic}
                  </li>
                ))}
              </ul>
              <br />
              <h3 className="text-3xl lg:text-4xl text-[#12161a] font-heading font-medium">
                Guidelines for Students
              </h3>
              <ul className="mt-8 list-disc list-inside space-y-1">
                {item.guidelines.map((topic, idx) => (
                  <li className="text-base font-body text-[#3b3b3b]" key={idx}>
                    {topic}
                  </li>
                ))}
              </ul>
              <br />
              <br />
              <p className="text-base font-body text-[#3b3b3b]">
                For additional queries or clarification, contact your department
                coordinator or reach out to the Academy Office at{" "}
                <Link
                  className="text-base font-body text-[#3b3b3b] underline"
                  href="mailto:info@risingmindsacademy.com"
                  target="_blank"
                  rel="noopener"
                >
                  info@risingmindsacademy.com
                  <br />
                </Link>
              </p>
              <br />
              <p className="text-base font-body text-[#3b3b3b]">Issued by: </p>
              <p className="text-base font-body text-[#3b3b3b]">Controller </p>
              <p className="text-base font-body text-[#3b3b3b]">
                Rising Mind&apos;s Academy
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
