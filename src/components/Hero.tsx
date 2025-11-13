"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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

// Tailwind + Next.js TSX conversion of the provided Framer Hero section
// - Optimized background using next/image (fill)
// - Subtle overlay + bottom gradient layer like the original
// - Responsive typography and spacing

const Hero: React.FC<HeroProps> = ({
  title = "Personalized School Tuition for Class 1-10",
  description = "Expert teachers, personalized learning, and proven results — helping every student learn smarter and score higher.",
  imageSrc = "/hero.png",
}) => {
  const items = [
    {
      id: "a1",
      text: "Calls for admission for the academic year 2025-26 now online or ",
      href: "/",
      linkText: "visit our campus",
    },
  ];
  const first = items[0];
  return (
    <>
      <section
        className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] overflow-hidden"
        aria-label="Hero"
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={imageSrc}
            alt="CTA background"
            fill
            priority
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
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24 lg:py-52">
            <div className="max-w-3xl">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {title}
              </h1>
              <p className="mt-4 text-white/90 text-base sm:text-lg md:text-xl max-w-2xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Announcements"
        className="w-full bg-neutral-900 text-white"
      >
        <div className="mx-auto px-12 py-8">
          <div className="flex items-center gap-4">
            {/* Title */}
            <h2 className="whitespace-nowrap text-sm md:text-2xl font-bold tracking-wide">
              ANNOUNCEMENTS
            </h2>

            {/* Divider */}
            <div className="h-5 sm:h-6 w-px bg-white/20" aria-hidden />

            {/* Bullet + Text */}
            {first && (
              <div className="min-w-0 flex items-center gap-2 text-xs sm:text-sm">
                <span className="bullet" aria-hidden />
                <style jsx>{`
                  .bullet {
                    height: 8px;
                    width: 8px;
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

                <p className="min-w-0 truncate text-lg font-medium">
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
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
