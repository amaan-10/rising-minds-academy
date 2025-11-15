"use client";

import React from "react";
import Image from "next/image";

export type Academic = {
  name: string;
  role: string;
  imageSrc?: string;
  imageAlt?: string;
};

type Props = {
  heading?: string;
  academics?: Academic[];
};

export default function Faculty({
  heading = "Meet Our Educators",
  academics = [
    {
      name: "Mrs. Samina Azhar Khan",
      role: "M.A., M.Ed.",
      imageSrc: "/profile-placeholder.png",
    },
    {
      name: "Mr. Asif Sandu Shaikh",
      role: "M.Sc., B.Ed.",
      imageSrc: "/profile-placeholder.png",
    },
    {
      name: "Mrs. Lubna Asif Shaikh",
      role: "M.Sc., B.Ed.",
      imageSrc: "/profile-placeholder.png",
    },
    // {
    //   name: "Dr. Arlene McCoy",
    //   role: "Research Associate Professor",
    //   imageSrc: "/images/academic-4.jpg",
    // },
    // {
    //   name: "Dr. Darrell Steward",
    //   role: "Lead Research Analyst",
    //   imageSrc: "/images/academic-5.jpg",
    // },
    // {
    //   name: "Dr. Floyd Miles",
    //   role: "Senior Scientist",
    //   imageSrc: "/images/academic-6.jpg",
    // },
    // {
    //   name: "Dr. Ralph Edwards",
    //   role: "Research Project Coordinator",
    //   imageSrc: "/images/academic-7.jpg",
    // },
  ],
}: Props) {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="flex relative flex-col items-center gap-14">
        <div className="self-start">
          <h2 className="text-3xl md:text-5xl font-medium text-[#12161a]">
            {heading}
          </h2>
        </div>

        <div className="grid flex-none gap-6 grid-rows-[repeat(2,min-content)] grid-cols-[repeat(4,minmax(50px,1fr))] h-min justify-center overflow-visible p-0 relative w-full">
          {academics.map((a, idx) => (
            <div
              key={`${a.name}-${idx}`}
              className="self-start h-auto w-full relative"
            >
              <div className="flex flex-col justify-center items-center gap-2.5 h-min overflow-hidden p-0 relative w-full">
                <div className="flex flex-col flex-none justify-start items-start gap-3 h-min overflow-visible p-0 relative w-full">
                  <div className="flex justify-center items-center aspect-[0.847826/1] flex-none flex-row gap-0 h-[368px] overflow-hidden p-0 relative w-full">
                    <div className="flex-[1_0_0] h-full relative w-px">
                      <div className="absolute inset-0">
                        {a.imageSrc ? (
                          <Image
                            src={a.imageSrc}
                            alt={a.imageAlt ?? a.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="block w-full h-full rounded-[inherit] object-cover object-center"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-500">
                            No Image
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-none items-start gap-0 h-min overflow-visible p-0 relative w-full">
                    <p className="text-xl font-medium text-[#12161a]">
                      {a.name}
                    </p>
                    <p className="text-base text-[#3b3b3b]">{a.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
