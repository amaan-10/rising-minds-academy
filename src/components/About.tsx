"use client";

import React from "react";
import Image from "next/image";
import { easeInOut, motion, useAnimation, useInView } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.025, duration: 0.25, ease: easeInOut },
  }),
};

export default function About({ isAbout = false }: { isAbout?: boolean }) {
  const ref = React.useRef<HTMLHeadingElement | null>(null);

  const Aboutref = React.useRef<HTMLHeadingElement | null>(null);
  const inView = useInView(Aboutref, { amount: 0.15 });
  const controls = useAnimation();
  const pathname = usePathname();
  const hasAnimatedRef = React.useRef(false);

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
              {"About Rising Mind's Academy".split("").map((ch, i) => (
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
              We are a forward-thinking institution committed to academic
              excellence, innovation, and real-world impact.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-20 px-5 md:px-8 bg-white flex flex-col gap-10 md:gap-12 lg:gap-20">
        <div className="flex flex-col md:flex-row gap-4 relative w-full text-center md:text-left">
          <motion.h2
            ref={ref}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: true, amount: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-semibold text-[#12161a] w-full"
          >
            {heading.split("").map((word, i) => (
              <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
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
            viewport={{ once: true, amount: 0.6 }}
            className="text-base md:text-lg font-body text-[#3b3b3b] w-full"
          >
            {subheading}
          </motion.p>
        </div>

        <div className="relative flex flex-col items-center w-full">
          {features.map((feature, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={feature.title}
                className="flex flex-col md:flex-row items-center relative w-full"
              >
                {/* Image column */}
                <div
                  className={`relative w-full h-64 md:h-96 overflow-hidden shadow-sm ${
                    isEven ? "" : "md:order-1"
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
                  <div className="flex flex-col gap-3 max-w-[428px] px-3.5 md:px-7 py-7 md:py-0 items-center">
                    <motion.h2
                      ref={ref}
                      initial="hidden"
                      whileInView="visible"
                      variants={variants}
                      viewport={{ once: true }}
                      className="text-2xl font-heading font-semibold text-[#12161a] text-center"
                    >
                      {feature.title.split("").map((word, i) => (
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
                        delay: 0.25,
                      }}
                      viewport={{ once: true, amount: 0.6 }}
                      className="text-base font-body text-[#3b3b3b] text-center"
                    >
                      {feature.description}
                    </motion.p>
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
