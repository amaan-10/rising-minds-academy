"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface AcademicCardProps {
  image: string;
  title: string;
  shortDescription: string;
  link: string;
}

export const AcademicCard = ({
  image,
  title,
  shortDescription,
  link,
}: AcademicCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link}
      className="group relative overflow-hidden duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-367/405 overflow-hidden rounded-2xl shadow-lg">
        <Image
          width={505}
          height={505}
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-card-foreground">
          {title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
          {shortDescription}
        </p>

        <div className="inline-flex items-center gap-3">
          <span className="text-lg font-semibold text-black">Learn More</span>

          <span className="w-8 h-8 flex items-center justify-center relative bg-blue-600 rounded-full group-hover:bg-black transition-colors duration-300">
            <div
              className="flex items-center justify-center flex-row flex-nowrap gap-2.5 flex-none h-min w-min min-h-5 min-w-5 overflow-hidden p-0 relative -rotate-90"
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
          </span>
        </div>
      </div>
    </Link>
  );
};
