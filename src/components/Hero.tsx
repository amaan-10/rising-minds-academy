"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { easeInOut, motion, useInView } from "framer-motion";

export type HeroProps = {
  title?: string;
  description?: string;
  imageSrc?: string;
};

export type Announcement = {
  id: string;
  text: string;
  href?: string;
  linkText?: string;
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.075,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeInOut,
    },
  },
};

const variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.07, duration: 0.45, ease: easeInOut },
  }),
};

const Hero: React.FC<HeroProps> = ({
  title = "Shaping Young Mind's for a Brighter Tomorrow!",
  description = "Expert teachers, personalized learning, and proven results — helping every student learn smarter and score higher.",
  imageSrc = "/hero-1.png",
}) => {
  const items = [
    {
      id: "a1",
      text: "Calls for admission for the academic year 2025-26 now online or ",
      href: "/",
      linkText: "visit our academy",
    },
  ];
  const first = items[0];
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section className="relative w-full overflow-hidden" aria-label="Hero">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={imageSrc}
            alt="CTA background"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-black/40" aria-hidden />

        {/* Bottom linear gradient (like Framer 'Linear') */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-linear-to-t from-black/50 to-transparent"
          aria-hidden
        />

        {/* Content */}
        <div className="mx-auto px-5 md:px-6 lg:px-8">
          <div className="pt-32 pb-14 md:py-24 lg:py-52">
            <div className="max-w-lg md:max-w-2xl lg:max-w-3xl flex flex-col justify-self-center md:justify-self-start">
              <motion.h1
                className="text-white text-center md:text-left font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                variants={container}
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {title.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordAnimation}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                  delay: 1,
                }}
                viewport={{ once: true, amount: 0.1 }}
                className="mt-4 font-body text-center md:text-left text-white/90 text-base md:text-lg max-w-2xl"
              >
                {description}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Announcements"
        className="w-full bg-neutral-900 text-white"
      >
        <div className="px-5 md:px-8 py-8 max-w-[1320px] w-full">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Title */}
            <motion.h2
              ref={ref}
              initial="hidden"
              animate={isInView ? "show" : ""}
              variants={variants}
              viewport={{ once: true }}
              className="text-xl lg:text-2xl font-heading text-center font-bold"
            >
              {"ANNOUNCEMENTS".split("").map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  variants={variants}
                  custom={i}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            {/* Divider */}
            <div
              className="h-5 sm:h-6 w-px bg-white/20 hidden md:block"
              aria-hidden
            />

            {/* Bullet + Text */}
            {first && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                  delay: 0.4,
                }}
                viewport={{ once: true, amount: 0.6 }}
                className="flex items-center gap-2 text-sm text-center md:text-left"
              >
                <div className="w-2.5 flex self-start pt-2">
                  <span
                    className="bullet h-2 w-2 flex self-start lg:self-center"
                    aria-hidden
                  />
                </div>
                <style jsx>{`
                  .bullet {
                    margin-top: 1px;
                    border-radius: 9999px;
                    display: inline-block;
                    background-color: #cf1230;
                    animation: blink 1s infinite ease-in-out;
                  }

                  @keyframes blink {
                    0%,
                    100% {
                      background-color: #cf1230; /* red */
                    }
                    50% {
                      background-color: white; /* white */
                    }
                  }
                `}</style>
                <p className="font-body text-base lg:text-lg font-medium w-full">
                  {first.text}
                  {first.href ? (
                    <Link
                      href={first.href}
                      className="underline underline-offset-2"
                    >
                      {first.linkText ?? "learn more"}
                    </Link>
                  ) : null}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
