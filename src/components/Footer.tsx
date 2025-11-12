import React from "react";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    id: "facebook",
    href: "https://facebook.com",
    alt: "Facebook",
    src: "https://framerusercontent.com/images/bscbwoExxyrMOdIjZvVmnoRU090.svg",
    boxBg: "#efa027",
  },
  {
    id: "instagram",
    href: "https://instagram.com",
    alt: "Instagram",
    src: "https://framerusercontent.com/images/7DVzA5iG2CYjJbqVtTSNTE05Tms.svg",
    boxBg: "#efa027",
  },
  {
    id: "linkedin",
    href: "https://Linkedin.com",
    alt: "LinkedIn",
    src: "https://framerusercontent.com/images/VR36DOL9DgR1v4rsS1bzGPm5jE.svg",
    boxBg: "#efa027",
  },
  {
    id: "x",
    href: "https://x.com",
    alt: "X",
    src: "https://framerusercontent.com/images/mkAffh6qbI5VNCJ39mxXR7LXVc.svg",
    boxBg: "#efa027",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center bg-[#12161A] text-white p-[100px_30px]">
      <div className="flex flex-col items-center justify-center w-full max-w-[1320px] relative gap-[100px]">
        <div className="flex flex-row relative pb-20 items-center justify-between w-full border-b border-white/7">
          <h3 className="relative w-full text-4xl sm:text-5xl max-w-[620px] font-semibold text-white">
            driven by innovation, guided by compassion.
          </h3>
          <div className="relative flex items-center ">
            <Link
              href="/contact"
              className="inline-block rounded px-4 py-2 bg-white text-[#12161A] font-semibold"
            >
              Apply for this Semester
            </Link>
          </div>
        </div>
        {/* Top band */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[100px] w-full relative h-min">
          {/* Left: title + CTA */}
          <div className="flex flex-col gap-[50px] w-64">
            {/* Logo */}
            <Link href="/" className="block w-full">
              <Image
                src="/logo.png"
                alt="Logo"
                width={512}
                height={512}
                className="h-auto w-full object-contain"
                priority
              />
            </Link>

            {/* Social icons */}
            <div className="flex items-center justify-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#efa027] hover:border-black bg-[#efa027] hover:bg-black p-[7px] w-8 h-8"
                  aria-label={s.alt}
                >
                  <Image src={s.src} alt={s.alt} width={22} height={22} />
                </a>
              ))}
            </div>
          </div>
          {/* Middle: links */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-[100px] w-full">
            <div className="flex-1 flex items-start justify-center gap-8 max-w-[568px] relative">
              <div className="relative flex items-start min-w-[150px] gap-5 flex-col">
                <h4 className="text-base font-medium text-white/50">
                  Useful Links
                </h4>
                <ul className="flex flex-col items-start gap-4 relative text-base">
                  <li>
                    <Link href="/" className="opacity-90 hover:text-[#efa027]">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="opacity-90 hover:text-[#efa027]"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/events"
                      className="opacity-90 hover:text-[#efa027]"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/program"
                      className="opacity-90 hover:text-[#efa027]"
                    >
                      Programs
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="relative flex items-start gap-5 flex-col">
                <h4 className="text-base font-medium text-white/50">Support</h4>
                <ul className="flex flex-col items-start gap-4 relative text-base">
                  <li>
                    <Link
                      href="/research"
                      className="opacity-90 hover:text-[#efa027]"
                    >
                      Research
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/notices"
                      className="opacity-90 hover:text-[#efa027]"
                    >
                      Notices
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news"
                      className="opacity-90 hover:text-[#efa027]"
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="opacity-90 hover:text-[#efa027]"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: address + logos */}
            <div className="flex flex-col  items-start w-[300px] gap-4">
              <div className="relative flex items-start gap-5 flex-col">
                <h4 className="text-base font-medium text-white/50">Address</h4>
                <div className="text-base text-white/90 text-left w-full">
                  Rising Mind&apos;s Academy,
                  <br />
                  Shop 2, B-Wing, Chetna Garden,
                  <br />
                  Mitha Nagar, Kondhwa,
                  <br />
                  Pune - 411048
                  <br />
                </div>
                <Link
                  href="https://www.google.com/maps"
                  className="inline-flex items-center gap-2 text-sm opacity-90 hover:underline"
                >
                  <Image
                    src="https://framerusercontent.com/images/d9d0PA0AxS8vT9U6jdVcnUDJ0U.svg"
                    alt="Map"
                    width={20}
                    height={20}
                  />
                  See on Map
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 w-full text-sm font-medium opacity-80 border-t border-white/7">
          <p>
            Copyright © 2025 Rising Mind&apos;s Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-9">
            <Link href="/legal/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span className="w-px h-4 bg-white/50" aria-hidden />
            <Link href="/legal/terms-conditions" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
