"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export type Notice = { id: string; text: string; href?: string };

const notices: Notice[] = [
  { id: "n1", text: "Course registration ends on May 10, 2025" },
  { id: "n2", text: "Result for Semester 4 will be declared on May 8, 2025" },
  { id: "n3", text: "The university will remain closed on May 12, 2025" },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [allPagesOpen, setAllPagesOpen] = useState(false);
  const loop = [...notices, ...notices, ...notices];

  return (
    <>
      <header className="w-full bg-white shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-28">
            {/* left: logo + nav */}
            <div className="flex items-center justify-between w-full">
              <Link href="/" className="block">
                <Image
                  width={512}
                  height={512}
                  src="/logo.png"
                  alt="Logo"
                  className="h-20 w-auto object-contain"
                />
              </Link>

              {/* Desktop nav */}
              <nav className="hidden md:flex items-center gap-2">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setAllPagesOpen((s) => !s)}
                    aria-expanded={allPagesOpen}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 focus:outline-none"
                  >
                    <span className="text-sm font-medium text-gray-800">
                      All Pages
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-gray-700"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {allPagesOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-20">
                      <Link
                        href="/about"
                        className="block px-4 py-2 text-sm hover:bg-gray-50"
                      >
                        About
                      </Link>
                      <Link
                        href="/program"
                        className="block px-4 py-2 text-sm hover:bg-gray-50"
                      >
                        Admission
                      </Link>
                      <Link
                        href="/research"
                        className="block px-4 py-2 text-sm hover:bg-gray-50"
                      >
                        Research
                      </Link>
                      <Link
                        href="/news"
                        className="block px-4 py-2 text-sm hover:bg-gray-50"
                      >
                        News & Events
                      </Link>
                      <Link
                        href="/contact"
                        className="block px-4 py-2 text-sm hover:bg-gray-50"
                      >
                        Contact Us
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/events"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100"
                >
                  Events
                </Link>

                <Link
                  href="/research"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100"
                >
                  Research
                </Link>

                <Link
                  href="/program"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100"
                >
                  Faculty
                </Link>
              </nav>
            </div>

            {/* center: search (desktop)
          <div className="flex-1 px-4">
            <div className="hidden md:flex justify-center">
              <div className="w-full max-w-md bg-gray-100 rounded-full px-3 py-2 flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  width="18"
                  height="18"
                  className="flex-shrink-0"
                >
                  <path
                    d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"
                    fill="currentColor"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent w-full text-sm outline-none placeholder-gray-600"
                />
              </div>
            </div>
          </div> */}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t">
            <div className="px-4 py-3 space-y-1">
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50"
              >
                About
              </Link>
              <Link
                href="/program"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50"
              >
                Admission
              </Link>
              <Link
                href="/events"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50"
              >
                Events
              </Link>
              <Link
                href="/research"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50"
              >
                Research
              </Link>
              <Link
                href="/news"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50"
              >
                News & Events
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
      <section id="notice" className="w-full bg-[#faf7ef]">
        <div className="mx-auto flex justify-between px-4 sm:px-6 lg:px-8 py-2.5">
          {/* Heading */}
          <h2 className="w-full self-center text-sm font-semibold text-neutral-700">
            <Link href="/" className="underline-offset-4 hover:underline">
              Apply / Admitted? Let&apos;s make it official!
            </Link>
          </h2>
          {/* Ticker */}
          <div
            className="relative h-8 overflow-hidden"
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
              className="flex items-center gap-4 h-8 will-change-transform animate-marquee [animation-duration:30s] hover:[animation-play-state:paused]"
              role="list"
            >
              {loop.map((item, idx) => (
                <li key={`${item.id}-${idx}`} className="h-6 shrink-0">
                  <div className="flex items-center gap-2 text-sm text-neutral-700">
                    <span
                      className="h-2 w-2 rounded-full bg-neutral-700"
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
