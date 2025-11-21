"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.025, duration: 0.25, ease: easeInOut },
  }),
};

const Footer: React.FC = () => {
  const ref = React.useRef(null);
  return (
    <footer className="flex items-center justify-center bg-[#03091f] text-white p-[80px_30px] lg:p-[100px_30px]">
      <div className="flex flex-col items-center justify-center w-full max-w-[1320px] relative gap-[50px] lg:gap-[100px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 relative pb-12 lg:pb-20 items-start lg:items-center justify-between w-full border-b border-white/15">
          <motion.h3
            ref={ref}
            initial="hidden"
            whileInView="show"
            variants={variants}
            viewport={{ once: true }}
            className="relative w-full text-3xl md:text-4xl lg:text-5xl font-heading max-w-[620px] font-semibold text-white"
          >
            {"driven by innovation, guided by compassion."
              .split("")
              .map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  variants={variants}
                  custom={i}
                >
                  {word}
                </motion.span>
              ))}
          </motion.h3>

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
            className="relative flex items-center "
          >
            <Link
              href="/contact"
              className="inline-block rounded px-4 py-2 bg-white text-[#12161A] font-heading font-semibold"
            >
              Apply for this Semester
            </Link>
          </motion.div>
        </div>
        {/* Top band */}
        <div className="flex flex-col lg:flex-row items-center md:items-start justify-between gap-10 lg:gap-[100px] w-full relative h-min">
          {/* Left: title + CTA */}
          <div className="flex flex-col gap-[50px] w-48 md:w-56 lg:w-64">
            {/* Logo */}
            <Link href="/" className="block w-full">
              <Image
                src="/logo-new.png"
                alt="Logo"
                width={512}
                height={512}
                className="h-auto w-full object-contain"
                priority
              />
            </Link>
          </div>
          {/* Middle: links */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-20 lg:gap-[100px] w-full">
            <div className="flex-1 flex flex-col md:flex-row items-start justify-between lg:justify-center gap-8 max-w-[568px] relative">
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
                className="relative flex items-center md:items-start min-w-[150px] md:min-w-max lg:min-w-[150px] gap-5 flex-col"
              >
                <h4 className="text-base lg:text-xl font-heading font-semibold text-white">
                  Useful Links
                </h4>
                <ul className="flex flex-col items-center md:items-start gap-4 relative font-heading text-base text-center md:text-left">
                  <li>
                    <Link
                      href="/"
                      className="opacity-90 text-[#9b9fab] text-base lg:text-xl font-light hover:text-[#efa027]"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="opacity-90 text-[#9b9fab] text-base lg:text-xl font-light hover:text-[#efa027]"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academic"
                      className="opacity-90 text-[#9b9fab] text-base lg:text-xl font-light hover:text-[#efa027]"
                    >
                      Academic
                    </Link>
                  </li>
                </ul>
              </motion.div>

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
                className="relative flex items-center md:items-start min-w-[150px] md:min-w-max lg:min-w-[150px] gap-5 flex-col"
              >
                <h4 className="text-base lg:text-xl font-heading font-semibold text-white">
                  Support
                </h4>
                <ul className="flex flex-col items-center md:items-start gap-4 relative font-heading text-base">
                  <li>
                    <Link
                      href="/notices"
                      className="opacity-90 text-[#9b9fab] text-base lg:text-xl font-light hover:text-[#efa027]"
                    >
                      Notices
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="opacity-90 text-[#9b9fab] text-base lg:text-xl font-light hover:text-[#efa027]"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="opacity-90 text-[#9b9fab] text-base lg:text-xl font-light hover:text-[#efa027]"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.div>

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
                className="relative flex items-center md:items-start min-w-[150px] md:min-w-max lg:min-w-max gap-5 flex-col"
              >
                <h4 className="text-base lg:text-xl font-heading font-semibold text-white">
                  Social
                </h4>
                <ul className="flex flex-col items-center md:items-start gap-4 relative font-heading text-base">
                  <li>
                    <Link
                      href="https://facebook.com"
                      target="_blank"
                      className="opacity-90 text-[#9b9fab] text-base lg:text-xl font-light hover:text-[#efa027]"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      className="opacity-90 text-[#9b9fab] text-base lg:text-xl font-light hover:text-[#efa027]"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      className="opacity-90 text-[#9b9fab] text-base lg:text-xl font-light hover:text-[#efa027]"
                    >
                      Linkedin
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Right: address + logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 12,
                delay: 1,
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="flex flex-col items-center md:items-start lg:w-[340px] gap-4"
            >
              <div className="relative flex items-center md:items-start gap-5 flex-col w-full">
                <h4 className="text-base lg:text-xl font-heading font-semibold text-white">
                  Address
                </h4>
                <div className="opacity-90 text-[#9b9fab] text-base lg:text-xl font-heading font-light text-center md:text-left w-full">
                  Rising Mind&apos;s Academy,
                  <br />
                  Shop 2, B-Wing, Chetna Garden,
                  <br className="lg:block" />
                  Mitha Nagar, Kondhwa,
                  <br />
                  Pune - 411048
                  <br />
                </div>
                <Link
                  href="https://maps.app.goo.gl/ixcQF35GopXifr4z6"
                  target="_blank"
                  className="inline-flex items-center gap-2 font-heading text-base opacity-90 hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    width={20}
                    height={20}
                    fill="white"
                  >
                    <path d="M576 48c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4L413.5 77.5 234.1 17.6c-8.1-2.7-16.8-2.1-24.4 1.7l-128 64C70.8 88.8 64 99.9 64 112l0 352c0 11.1 5.7 21.4 15.2 27.2s21.2 6.4 31.1 1.4l116.1-58.1 173.3 57.8c-4.3-6.4-8.5-13.1-12.6-19.9-11-18.3-21.9-39.3-30-61.8l-101.2-33.7 0-284.5 128 42.7 0 99.3c31-35.8 77-58.4 128-58.4 22.6 0 44.2 4.4 64 12.5L576 48zM512 224c-66.3 0-120 52.8-120 117.9 0 68.9 64.1 150.4 98.6 189.3 11.6 13 31.3 13 42.9 0 34.5-38.9 98.6-120.4 98.6-189.3 0-65.1-53.7-117.9-120-117.9zM472 344a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z" />
                  </svg>
                  See on Map
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 pt-10 w-full text-base font-light opacity-80 border-t border-white/15">
          <p className="text-[#9b9fab] font-heading text-center md:text-left">
            Copyright © 2025 Rising Mind&apos;s Academy. All rights reserved.
          </p>
          <div className="flex items-center w-full justify-around md:justify-end md:gap-9">
            <Link
              href="/legal/privacy-policy"
              className="hover:underline text-[#9b9fab] font-heading"
            >
              Privacy Policy
            </Link>
            <span className="w-px h-4 bg-white/50" aria-hidden />
            <Link
              href="/legal/terms-conditions"
              className="hover:underline text-[#9b9fab] font-heading"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
