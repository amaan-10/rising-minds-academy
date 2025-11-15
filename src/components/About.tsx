"use client";

import React from "react";
import Image from "next/image";
export default function About() {
  const heading = "Learn. Grow. Excel.";
  const subheading =
    "Rising Mind's Academy offers expert teachers, CBSE/Maharashtra State Board curriculum support, personalised lesson plans, and regular assessments to help students in Classes 1-10 improve grades and build confidence.";
  const features = [
    {
      title: "Academic Excellence",
      description:
        "We nurture strong conceptual understanding and problem-solving skills through expert guidance and innovative teaching methods — helping every student achieve top academic performance from Class 1 to 10.",
      imageSrc: "/placeholder.jpeg",
      imageAlt: "Students at Academy",
    },
    {
      title: "Holistic Development",
      description:
        "Beyond academics, we focus on building confidence, creativity, and communication skills. Our balanced approach ensures students grow intellectually, emotionally, and socially — preparing them for success in every field.",
      imageSrc: "/placeholder.jpeg",
      imageAlt: "Students collaborating",
    },
    {
      title: "Personalized Learning Journey",
      description:
        "Every student learns differently. Our customized study plans, small batch sizes, and regular assessments ensure that each learner gets the attention, feedback, and motivation they need to excel.",
      imageSrc: "/placeholder.jpeg",
      imageAlt: "Learning journey",
    },
  ];
  return (
    <div>
      <section
        id="hero-section"
        className="py-20 px-8 bg-[#faf7ef] h-[350px] w-full"
      >
        <div className="flex flex-row items-start relative w-full h-full flex-1">
          {/* Left content */}
          <div className="flex flex-col items-start gap-6 w-full">
            <h1 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight text-gray-900">
              {/* Keeping letters in normal flow — if you want per-letter animation, we can split into spans */}
              About Rising Mind&apos;s Academy
            </h1>
          </div>

          <div className="w-1 h-[350px] -my-20 bg-[#3b3b3b1f] mx-6"></div>

          {/* Right content */}
          <div className="flex flex-row items-end w-full h-full pl-24">
            <p className="flex flex-col max-w-md text-lg md:text-xl text-gray-600">
              We are a forward-thinking institution committed to academic
              excellence, innovation, and real-world impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-white flex flex-col gap-20">
        <div className="flex flex-row gap-4 relative w-full text-left">
          <h2 className="text-3xl md:text-4xl font-medium text-[#12161a] w-full">
            {heading}
          </h2>
          <p className="text-base md:text-lg text-[#3b3b3b] w-full">
            {subheading}
          </p>
        </div>

        <div className="relative flex flex-col items-center w-full">
          {features.map((feature, idx) => {
            const isEven = idx % 2 === 0;
            console.log("Rendering feature:", feature.title, "isEven:", isEven);
            return (
              <div
                key={feature.title}
                className="flex flex-row items-center relative w-full"
              >
                {/* Image column */}
                <div
                  className={`relative w-full h-64 md:h-96 overflow-hidden shadow-sm ${
                    isEven ? "" : "order-1"
                  }`}
                >
                  {/* Image wrapper uses next/image with fill behaviour */}
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt ?? feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Text column */}
                <div
                  className={`flex flex-col justify-center w-full h-auto self-stretch relative items-center ${
                    isEven ? "bg-[#FAF7EF] text-left" : "bg-[#FAF7EF] text-left"
                  }`}
                >
                  <div className="flex flex-col gap-3 max-w-[428px] items-center">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
