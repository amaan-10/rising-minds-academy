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
      name: "Dr. Wade Warren",
      role: "Director, Center",
      imageSrc: "/images/academic-1.jpg",
    },
    {
      name: "Dr. Savannah Nguyen",
      role: "Deputy Director, Center",
      imageSrc: "/images/academic-2.jpg",
    },
    {
      name: "Dr. Kathryn Murphy",
      role: "Principal Research Scientist",
      imageSrc: "/images/academic-3.jpg",
    },
    {
      name: "Dr. Arlene McCoy",
      role: "Research Associate Professor",
      imageSrc: "/images/academic-4.jpg",
    },
    {
      name: "Dr. Darrell Steward",
      role: "Lead Research Analyst",
      imageSrc: "/images/academic-5.jpg",
    },
    {
      name: "Dr. Floyd Miles",
      role: "Senior Scientist",
      imageSrc: "/images/academic-6.jpg",
    },
    {
      name: "Dr. Ralph Edwards",
      role: "Research Project Coordinator",
      imageSrc: "/images/academic-7.jpg",
    },
  ],
}: Props) {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {academics.map((a, idx) => (
            <div
              key={`${a.name}-${idx}`}
              className="flex flex-col items-start gap-4 bg-[#FAF7EF] rounded-2xl overflow-hidden shadow-sm p-4"
            >
              <div className="w-full h-44 md:h-48 relative rounded-lg overflow-hidden bg-gray-100">
                {a.imageSrc ? (
                  <Image
                    src={a.imageSrc}
                    alt={a.imageAlt ?? a.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <p className="text-lg font-semibold text-gray-900">{a.name}</p>
                <p className="text-sm text-gray-600 mt-1">{a.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
