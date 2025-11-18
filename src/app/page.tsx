"use client";
import About from "@/components/About";
import Faculty from "@/components/Faculty";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;
  return (
    <div>
      <section id="banner" className="w-full bg-black">
        <div className="relative flex items-center justify-center py-1">
          {/* Text */}
          <div className="relative h-8 overflow-hidden">
            <div className="flex items-center gap-3 h-8">
              <div className="h-6 shrink-0">
                <div className="flex items-center gap-3 text-sm font-medium text-white">
                  <span className="w-full text-center">
                    Admission Open AY-2025-26. CBSE BOARD 8 to 10th. SSC BOARD 1
                    to 10th (ALL SUBJECTS)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-8 h-3 w-3 text-white cursor-pointer"
            aria-label="Close notification"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="white"
            >
              <path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z" />
            </svg>
          </button>
        </div>
      </section>
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Faculty />
      <Footer />
    </div>
  );
}
