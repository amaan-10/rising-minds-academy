"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

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
  autoplayDelay?: number; // ms
};

export default function Testimonials({
  heading = "Voices of Our Learners",
  testimonials = [
    {
      quote:
        "Choosing this academy for my child was one of the best decisions we've ever made. From day one, the teachers have been incredibly supportive, patient, and dedicated to each student's growth. The learning experience here is both fun and structured — my child actually looks forward to classes every day!",
      name: "Rohit Sharma",
      id: "Parent",
      imageSrc: "/images/testi-1.jpg",
      imageAlt: "Parent portrait",
    },
    {
      quote:
        "My daughter's confidence and academic performance have improved tremendously within just a few months of joining this academy. The small class sizes ensure that every child receives personal attention, and the regular feedback from teachers helps us stay involved in her progress. Highly recommend!",
      name: "Sneha Patel",
      id: "Parent",
      imageSrc: "/images/testi-2.jpg",
      imageAlt: "Parent portrait",
    },
    {
      quote:
        "The teachers at this academy are incredibly friendly, patient, and truly passionate about teaching. Their focus on building strong fundamentals has made a noticeable difference in my son's understanding and confidence. The personalized approach to learning ensures that each student's unique needs are met.",
      name: "Amit Desai",
      id: "Parent",
      imageSrc: "/images/testi-3.jpg",
      imageAlt: "Parent portrait",
    },
  ],
  autoplay = false,
  autoplayDelay = 5000,
}: Props) {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

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
    <section className="py-20 px-8 w-full bg-white">
      <div className="flex relative flex-col items-center gap-14">
        <div className="self-start">
          <h2 className="text-3xl md:text-5xl font-medium text-[#12161a]">
            {heading}
          </h2>
        </div>

        <div className="relative flex flex-row items-center gap-8 w-full h-[400px]">
          {/* Single card view */}
          <div className="flex-[1_0_0] w-px h-full relative">
            <article className="flex flex-col justify-center items-center gap-0 w-full h-min px-14 pt-10 pb-14 relative overflow-hidden bg-[#FAF7EF] opacity-100">
              <div className="border-b border-[rgba(59,59,59,0.12)] pb-6 mb-6">
                <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
                  “{t.quote}”
                </p>
              </div>

              <div className="flex items-center gap-4">
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
                  <p className="text-sm font-medium text-gray-900">{t.name}</p>
                  {t.id && <p className="text-xs text-gray-600">{t.id}</p>}
                </div>
              </div>
            </article>

            {/* Prev / Next buttons */}
            <div className="absolute -translate-y-1/2 top-1/2 left-2 md:left-4 flex items-center gap-2">
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

            <div className="absolute -translate-y-1/2 top-1/2 right-2 md:right-4 flex items-center gap-2">
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
          </div>

          {/* CTA */}
          <div className="bg-[#efa027] flex flex-col flex-1 justify-start items-start content-center self-stretch gap-8 w-full max-w-[390px] h-auto p-5 relative overflow-visible">
            <div className="flex flex-col flex-1 justify-start content-center items-start gap-8 w-full p-[110px_40px] border-[1.5px] border-[#fff6] border-solid relative overflow-visible">
              <div className="flex flex-col flex-none justify-start content-center items-start gap-4 w-full h-min p-0 relative overflow-visible">
                <div className="whitespace-pre-wrap wrap-break-word flex-none w-full max-w-[569px] h-auto relative">
                  <h3 className="text-2xl font-medium text-white">
                    Accepting applications for Fall 2025!
                  </h3>
                </div>
                <div className="w-auto h-auto relative">
                  <div className="cursor-pointer flex flex-row items-center gap-2.5 w-full h-min p-0 relative overflow-hidden">
                    <a
                      className="will-change-transform flex flex-row flex-none justify-center items-center gap-3.5 w-full h-min px-8 py-2.5 no-underline relative overflow-hidden bg-white rounded-sm"
                      href="./contact"
                    >
                      <div className="flex flex-row flex-none justify-center items-center gap-2.5 w-full h-min p-0 relative overflow-hidden">
                        <div className="outline-none flex flex-col justify-center shrink-0 relative">
                          <p className="text-base font-medium">Apply Now</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
