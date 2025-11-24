"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import Link from "next/link";

export type Testimonial = {
  quote: string;
  name: string;
  id?: string;
  imageSrc?: string;
  imageAlt?: string;
};

type Props = {
  heading?: string;
  testimonials?: Testimonial[];
  autoplay?: boolean;
  autoplayDelay?: number;
};

const variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.025, duration: 0.25, ease: easeInOut },
  }),
};

export default function Testimonials({
  heading = "Voices of Our Learners",
  testimonials = [
    {
      quote:
        "Choosing this academy for my child was one of the best decisions we've ever made. From day one, the teachers have been incredibly supportive, patient, and dedicated to each student's growth. The learning experience here is both fun and structured — my child actually looks forward to classes every day!",
      name: "Rohit Sharma",
      id: "Parent",
      imageSrc: "/profile-placeholder.png",
      imageAlt: "Parent portrait",
    },
    {
      quote:
        "My daughter's confidence and academic performance have improved tremendously within just a few months of joining this academy. The small class sizes ensure that every child receives personal attention, and the regular feedback from teachers helps us stay involved in her progress.",
      name: "Sneha Patel",
      id: "Parent",
      imageSrc: "/profile-placeholder.png",
      imageAlt: "Parent portrait",
    },
    {
      quote:
        "The teachers here are incredibly friendly, patient, and truly passionate about teaching. Their focus on strong fundamentals has made a noticeable difference in my son's understanding and confidence. The personalized learning approach ensures each student's unique needs are met.",
      name: "Amit Desai",
      id: "Parent",
      imageSrc: "/profile-placeholder.png",
      imageAlt: "Parent portrait",
    },
  ],
  autoplay = false,
  autoplayDelay = 5000,
}: Props) {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const ref = React.useRef(null);

  useEffect(() => {
    if (!autoplay || total <= 1) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % total),
      autoplayDelay
    );
    return () => clearInterval(t);
  }, [autoplay, autoplayDelay, total]);

  const prev = useCallback(
    () => setIndex((i: number) => (i - 1 + total) % total),
    [total]
  );
  const next = useCallback(
    () => setIndex((i: number) => (i + 1) % total),
    [total]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  if (total === 0) return null;

  const t = testimonials[index];

  return (
    <section className="py-8 lg:py-20 px-5 md:px-8 w-full bg-white">
      <div className="flex relative flex-col items-center gap-10 md:gap-14">
        <div className="self-start">
          <motion.h2
            ref={ref}
            initial="hidden"
            whileInView="show"
            variants={variants}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-heading font-semibold text-[#12161a]"
          >
            {heading.split("").map((word, i) => (
              <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center gap-12 md:gap-10 lg:gap-8 w-full lg:h-[400px]">
          {/* Single card view */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
              delay: 0,
            }}
            viewport={{ once: true, amount: 0.6 }}
            className="flex-[1_0_0] w-full lg:w-px lg:h-[400px] relative"
          >
            <article className="flex flex-col justify-center items-center gap-0 w-full h-min p-5 md:p-10 lg:px-14 lg:pt-10 lg:pb-14 relative overflow-hidden bg-[#FAF7EF] opacity-100">
              <div className="border-b border-[rgba(59,59,59,0.12)] pb-6 mb-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                    delay: 0.25,
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                  className="text-gray-800 text-lg font-heading leading-relaxed font-medium"
                >
                  “{t.quote}”
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                  delay: 0.5,
                }}
                viewport={{ once: true, amount: 0.6 }}
                className="flex flex-row items-center justify-between w-full"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 shrink-0">
                    {t.imageSrc ? (
                      <Image
                        src={t.imageSrc}
                        alt={t.imageAlt ?? t.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sm text-gray-600">
                        No Image
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="text-lg font-semibold font-heading text-gray-900">
                      {t.name}
                    </p>
                    {t.id && (
                      <p className="text-sm font-body text-gray-600">{t.id}</p>
                    )}
                  </div>
                </div>
                {/* Prev / Next buttons */}
                <div className="flex flex-row items-center gap-5 justify-end">
                  <div className=" flex items-center gap-2">
                    <button
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="w-9 h-9 rounded-full bg-black/25 flex items-center justify-center"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M15 6L9 12L15 18"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className=" flex items-center gap-2">
                    <button
                      onClick={next}
                      aria-label="Next testimonial"
                      className="w-9 h-9 rounded-full bg-black/25 flex items-center justify-center"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M9 6L15 12L9 18"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </article>

            {/* Dots / pagination */}
            <div className="mt-6 flex items-center justify-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-gray-900 rounded-full" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="bg-[#efa027] flex flex-col flex-1 justify-start items-start content-center self-stretch gap-8 w-full lg:max-w-[390px] h-auto p-5 relative overflow-visible">
            <div className="flex flex-col flex-1 justify-start content-center items-start gap-8 w-full p-[110px_40px] border-[1.5px] border-[#fff6] border-solid relative overflow-visible">
              <div className="flex flex-col flex-none justify-start content-center items-start gap-4 w-full h-min p-0 relative overflow-visible">
                <div className="whitespace-pre-wrap wrap-break-word flex-none w-full max-w-[569px] h-auto relative">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 12,
                      delay: 0.5,
                    }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="text-[22px] font-heading font-semibold text-white"
                  >
                    Accepting applications for 2025-26!
                  </motion.h3>
                </div>
                <div className="w-auto h-auto relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 12,
                      delay: 0.75,
                    }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="cursor-pointer flex flex-row items-center gap-2.5 w-full h-min p-0 relative overflow-hidden"
                  >
                    <Link
                      className="will-change-transform flex flex-row flex-none justify-center items-center gap-3.5 w-full h-min px-8 py-2.5 no-underline relative overflow-hidden bg-white"
                      href="./contact"
                    >
                      <div className="flex flex-row flex-none justify-center items-center gap-2.5 w-full h-min p-0 relative overflow-hidden">
                        <div className="outline-none flex flex-col justify-center shrink-0 relative">
                          <p className="text-base font-heading font-medium">
                            Apply Now
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
