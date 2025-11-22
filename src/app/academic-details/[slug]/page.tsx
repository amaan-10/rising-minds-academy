"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { getAcademicBySlug } from "@/lib/academics";
import { AcademicItem } from "@/types/academics";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { Academic as AcademicData } from "@/lib/academics";
import { AcademicCard } from "@/components/AcademicCard";

export default function AcademicDetailPage() {
  const params = useParams();
  const { slug } = params;
  const item: AcademicItem | null =
    typeof slug === "string" ? getAcademicBySlug(slug) : null;

  if (!item) return notFound();

  return (
    <>
      <Header />
      <main className="w-full">
        {/* Hero Section */}
        <section className="px-4 py-12 md:py-20 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-4 text-balance">
              {item.title}
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-body leading-relaxed">
              {item.shortDescription}
            </p>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl flex items-center justify-center overflow-hidden shadow-lg mb-12 bg-[#f5f5f5] ">
            <Image
              width={505}
              height={505}
              src={item.image}
              alt="Team collaboration"
              className="aspect-16/11 bg-[#f5f5f5] object-cover"
            />
          </div>

          {/* Three Column Section */}
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex flex-col gap-8 md:gap-6">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  Overview
                </h2>
                <p className="text-gray-600 font-body leading-relaxed">
                  {item.overview}
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-8 md:gap-6 w-full justify-between pr-5">
                {/* Subject Covered */}
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-4">
                    Subjects Covered
                  </h2>
                  <div className="space-y-4">
                    {Object.entries(item.subjects).map(
                      ([subject, topics], index) => (
                        <div key={index}>
                          <h3 className="text-xl font-heading font-semibold mb-2 capitalize">
                            {subject}
                          </h3>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 font-body leading-relaxed">
                            {topics.map((topic, idx) => (
                              <li key={idx}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-8 md:gap-6">
                  {/* What You Can Expect */}
                  <div>
                    <h2 className="text-2xl font-heading font-bold mb-4">
                      What You Can Expect
                    </h2>
                    <ul className="list-disc list-inside font-body space-y-2 text-gray-600 leading-relaxed">
                      {item.whatYouCanExpect.map((expectation, index) => (
                        <li key={index}>{expectation}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Focus Area */}
                  <section>
                    <h2 className="text-2xl font-bold font-heading mb-6">
                      Key Focus Area
                    </h2>
                    <ul className="list-disc list-inside space-y-2 font-body text-gray-600 leading-relaxed">
                      {item.whatYouCanExpect.map((expectation, index) => (
                        <li key={index}>{expectation}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </div>

            {/* Get Started Today */}
            <div className="flex flex-col min-w-xs bg-white rounded-2xl shadow-lg p-6 h-min sticky top-20 border border-gray-200">
              <h2 className="text-[22px] font-heading font-semibold mb-4">
                Enroll Your Child Today
              </h2>
              <p className="text-gray-600 text-sm font-body leading-relaxed mb-4">
                Secure their spot and help them build strong fundamentals from
                Class 1 to 10.
              </p>
              <ul className="list-disc text-sm font-body list-inside mb-4 space-y-2 ">
                <li>Average reply time: 1 hour</li>
                <li>Consistent improvement results</li>
                <li>Dedicated and friendly teachers</li>
              </ul>
              <div className="relative w-full h-11 group">
                <Link
                  href="/contact"
                  className="bg-[#1d1ee3] h-full w-full rounded-[50px] opacity-100 cursor-pointer flex flex-row items-center justify-center gap-0 px-[50px] py-1 pr-[50px] pl-0 relative overflow-hidden"
                >
                  <div className="flex flex-col flex-[1_0_0] items-center gap-[5px] w-px pl-[5px] relative overflow-hidden">
                    <div className="whitespace-pre flex-none w-auto h-auto relative opacity-100 transform-none">
                      <p className="text-base font-medium font-heading text-white">
                        Admission Open
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-[35px] opacity-100 aspect-square z-1 flex flex-row flex-none justify-center items-center gap-2.5 pl-1 absolute top-1 bottom-1 right-1 overflow-hidden">
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
                          className="stroke-[#1d1ee3] transition-colors duration-300"
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
                          className=" stroke-[#1d1ee3] transition-colors duration-300"
                        >
                          <line x1="7" y1="7" x2="17" y2="17"></line>
                          <polyline points="17 7 17 17 7 17"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-[120px] px-[30px] pb-[60px]">
          {AcademicData.filter((item) => item.slug !== slug).map(
            (item, index) => (
              <AcademicCard key={index} {...item} />
            )
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
