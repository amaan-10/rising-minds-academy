"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export type Notice = { id: string; text: string; href?: string };

const notices: Notice[] = [
  {
    id: "n1",
    text: "Admissions for the new academic semester close on Nov 15, 2025.",
  },
  {
    id: "n2",
    text: "Homework and practice worksheets for all classes have been updated.",
  },
  {
    id: "n3",
    text: "Maharashtra Board has updated the Class 10 exam pattern for 2025.",
  },
];

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Academic", href: "/academic" },
  // { label: "News", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const loop = [...notices, ...notices, ...notices];

  return (
    <>
      <header className="bg-white">
        {/* dark navy background */}
        <div className="px-5 md:px-8">
          <div className="flex items-center justify-between h-24">
            {/* LEFT: Logo */}
            <div className="flex items-center lg:w-[172px]">
              <Link href="/" className="inline-flex items-center">
                {/* put your logo in /public/logo.svg or change src */}
                <Image
                  src="/logo.png"
                  alt="Rising Mind's Academy"
                  width={72}
                  height={72}
                  priority
                  className="object-contain"
                />
              </Link>
            </div>

            {/* CENTER: Nav (hidden on small screens) */}
            <nav
              className="hidden md:flex flex-1 justify-center"
              aria-label="Primary Navigation"
            >
              <ul className="flex items-center gap-8">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm md:text-base font-heading font-semibold text-[#12161a] hover:text-[#efa207] transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* RIGHT: CTA + Mobile Hamburger */}
            <div className="flex items-center gap-4">
              {/* Desktop CTA */}
              <div className="hidden md:block relative w-auto h-auto">
                <Link
                  className="flex cursor-pointer flex-row justify-center items-center gap-2 h-min px-5 py-2.5 relative bg-[#efa027] no-underline group"
                  href="/login"
                >
                  <div className="flex flex-row justify-center items-center gap-0 h-min pt-[3px] relative overflow-visible">
                    <div className="relative ">
                      <p className="text-base font-heading font-semibold text-white">
                        Student Portal
                      </p>
                    </div>
                  </div>
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
                        className="stroke-white transition-colors duration-300"
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
                        className=" stroke-white transition-colors duration-300"
                      >
                        <line x1="7" y1="7" x2="17" y2="17"></line>
                        <polyline points="17 7 17 17 7 17"></polyline>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Mobile hamburger */}
              <div
                onClick={() => setMobileOpen(!mobileOpen)}
                className="cursor-pointer md:hidden flex-none w-10 h-10 overflow-hidden relative transform-none origin-center"
                data-framer-name="Icon"
                data-highlight="true"
              >
                <motion.div
                  className="absolute w-5 h-0.5 left-[calc(65%-10px)] overflow-hidden flex-none"
                  animate={{
                    top: mobileOpen ? "calc(50% - 2px)" : "calc(60% - 2px)",
                    rotate: mobileOpen ? -45 : 0,
                    borderRadius: mobileOpen ? "50% / 501.099%" : "10px",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    backgroundColor: "rgb(17, 17, 17)",
                    transformOrigin: "50% 50% 0px",
                    willChange: "transform",
                  }}
                />

                {/* Top Line */}
                <motion.div
                  className="absolute flex-none w-5 h-0.5 overflow-hidden left-[calc(65%-10px)] top-[calc(40%-1px)] bg-[rgb(17,17,17)] rounded-[10px] origin-center"
                  animate={{
                    top: mobileOpen ? "calc(50% - 2px)" : "calc(40% - 2px)",
                    rotate: mobileOpen ? 45 : 0,
                    borderRadius: mobileOpen ? "50% / 501.099%" : "10px",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    backgroundColor: "rgb(17, 17, 17)",
                    transformOrigin: "50% 50% 0px",
                    willChange: "transform",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu (slide down) */}
        <div
          id="mobile-menu"
          className={`md:hidden bg-white border-t border-white/6 overflow-hidden transition-all ${
            mobileOpen ? "max-h-[480px] py-4" : "max-h-0"
          }`}
        >
          <div className="px-6">
            <ul className="flex flex-col items-center gap-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 font-medium font-heading text-black/90 hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Link
                className="flex cursor-pointer flex-row justify-center items-center gap-2 h-min px-5 py-2.5 relative bg-[#efa027] no-underline group"
                href="/login"
              >
                <div className="flex flex-row justify-center items-center gap-0 h-min pt-[3px] relative overflow-visible">
                  <div className="relative ">
                    <p className="text-base font-heading font-medium text-white">
                      Student Portal
                    </p>
                  </div>
                </div>
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
                      className="stroke-white transition-colors duration-300"
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
                      className=" stroke-white transition-colors duration-300"
                    >
                      <line x1="7" y1="7" x2="17" y2="17"></line>
                      <polyline points="17 7 17 17 7 17"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section id="notice" className="w-full bg-[#ce4901]">
        <div className="mx-auto flex justify-between py-0 md:py-1">
          {/* Ticker */}
          <div
            className="relative h-8 overflow-hidden"
            aria-label="Important notices"
          >
            {/* Track */}
            <ul
              className="flex items-center justify-center gap-3 h-8 will-change-transform animate-marquee [animation-duration:30s] hover:[animation-play-state:paused]"
              role="list"
            >
              {loop.map((item, idx) => (
                <li key={`${item.id}-${idx}`} className="shrink-0">
                  <div className="flex items-center justify-center gap-3 text-xs md:text-sm font-medium font-heading text-white">
                    <span
                      className="h-1.5 w-1.5 flex items-center justify-center rounded-full bg-white"
                      aria-hidden
                    />
                    {item.href ? (
                      <Link href={item.href} className="hover:underline">
                        {item.text}
                      </Link>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Local CSS for marquee animation; can be moved to globals.css if preferred */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation-name: marquee;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default Header;
