"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
  { label: "Courses", href: "/courses" },
  // { label: "News", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const loop = [...notices, ...notices, ...notices];

  return (
    <>
      <header className="bg-white">
        {" "}
        {/* dark navy background */}
        <div className="px-8">
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
                      className="text-sm md:text-base font-semibold text-[#12161a] hover:text-[#efa207] transition"
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
                  className="flex cursor-pointer flex-row justify-center items-center gap-2 h-min px-5 py-2.5 relative bg-[#efa027] no-underline"
                  href="./contact-us"
                >
                  <div className="flex flex-row justify-center items-center gap-0 h-min pt-[3px] relative overflow-visible">
                    <div className="relative ">
                      <p className="text-base font-medium text-white">
                        Student Portal
                      </p>
                    </div>
                  </div>
                  <svg
                    data-framer-name="Icon"
                    className="flex items-center justify-center mt-1 w-5 h-5 relative opacity-100 transform-none text-white"
                    role="presentation"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </Link>
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen((s) => !s)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-white text-black/90 hover:bg-white/10 transition"
              >
                <span className="sr-only">Open menu</span>
                {/* simple hamburger icon */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
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
            <ul className="flex flex-col gap-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-black/90 hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Link
                href="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="inline-block w-full text-center bg-[#efa027] text-white px-4 py-2"
              >
                Student Portal
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section id="notice" className="w-full bg-[#faf7ef]">
        <div className="mx-auto flex justify-between px-4 sm:px-6 lg:px-8 py-2.5">
          {/* Heading */}
          {/* <h2 className="w-full self-center text-sm font-semibold text-neutral-700">
            <Link href="/" className="underline-offset-4 hover:underline">
              Apply / Admitted? Let&apos;s make it official!
            </Link>
          </h2> */}
          {/* Ticker */}
          <div
            className="relative h-8 overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
            }}
            aria-label="Important notices"
          >
            {/* gradient masks left/right */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-white to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-white to-transparent"
            />

            {/* Track */}
            <ul
              className="flex items-center gap-3 h-8 will-change-transform animate-marquee [animation-duration:30s] hover:[animation-play-state:paused]"
              role="list"
            >
              {loop.map((item, idx) => (
                <li key={`${item.id}-${idx}`} className="h-6 shrink-0">
                  <div className="flex items-center gap-3 text-sm text-neutral-700">
                    <span
                      className="h-1.5 w-1.5 flex items-center justify-center rounded-full bg-neutral-700"
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
