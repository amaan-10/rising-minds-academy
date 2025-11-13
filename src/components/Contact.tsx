import React from "react";
import MapSection from "./MapSection";

type Requirement = {
  id: string;
  text: string;
};

const REQUIREMENTS: Requirement[] = [
  {
    id: "r1",
    text: "Completed admission/enrollment form for classes 1 to 10",
  },
  {
    id: "r2",
    text: "Previous school report card or progress sheet (latest academic year)",
  },
  {
    id: "r3",
    text: "Birth certificate or age proof document",
  },
  {
    id: "r4",
    text: "Aadhaar card copy of the student (optional but recommended)",
  },
  {
    id: "r5",
    text: "Passport-size photographs of the student (2–4 copies)",
  },
  {
    id: "r6",
    text: "Address proof of parent/guardian (Aadhaar, electricity bill, etc.)",
  },
  {
    id: "r7",
    text: "School leaving certificate (if applicable for transfers)",
  },
  {
    id: "r8",
    text: "Parent/guardian contact details for communication",
  },
  {
    id: "r9",
    text: "Admission/registration fee payment (as per academy guidelines)",
  },
];

const Contact = () => {
  return (
    <div>
      <section
        id="hero-section"
        className="py-20 px-8 bg-[#faf7ef] h-[350px] w-full"
      >
        <div className="flex flex-row items-start justify-self-center relative max-w-[1320px] w-full h-full flex-1">
          {/* Left content */}
          <div className="flex flex-col items-start gap-6 w-full">
            <h1 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight text-gray-900">
              {/* Keeping letters in normal flow — if you want per-letter animation, we can split into spans */}
              Get In Touch
            </h1>
          </div>

          <div className="w-1 h-[350px] -my-20 bg-[#3b3b3b1f] mx-6"></div>

          {/* Right content */}
          <div className="flex flex-row items-end w-full h-full pl-24">
            <p className="flex flex-col max-w-md text-lg md:text-xl text-gray-600">
              Have questions about our tuition programs for Grades 1 to 10?
              We&apos;re here to guide you and help you choose the right
              learning path for your child.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col flex-none justify-center items-center gap-0 h-min overflow-hidden py-20 px-[30px] pb-[70px] relative w-full">
        <div className="flex flex-col flex-none justify-center items-center gap-14 h-min max-w-[1320px] overflow-hidden p-0 relative w-full z-0">
          <div className="flex flex-row flex-none justify-start items-start gap-16 h-min overflow-visible p-0 relative w-full">
            <div className="flex flex-row flex-[1_0_0px] justify-start items-start gap-[60px] h-min overflow-visible p-0 relative w-px">
              <div className="outline-none flex flex-col justify-center shrink-0 flex-[1_0_0px] h-auto max-w-[569px] relative whitespace-pre-wrap w-px wrap-break-word">
                <h2 className=" text-[#12161a] text-5xl font-medium">
                  Send us a Message
                </h2>
              </div>
            </div>
            <form className="flex flex-col flex-[1_0_0px] justify-start items-start gap-5 h-min max-w-[580px] overflow-visible p-0 relative w-px">
              <label className="flex flex-col justify-start items-start gap-2.5 h-min p-0 relative w-full flex-none">
                <div className="outline-none flex flex-col justify-start flex-none h-auto relative whitespace-pre w-auto">
                  <p className="text-[#12161a] text-base">Your Name *</p>
                </div>
                <div className="relative w-full h-auto border border-[#3b3b3b1f] rounded-lg">
                  <input
                    type="text"
                    name="Your Name"
                    placeholder="Your first name"
                    className="p-[12px_18px_12px_18px] w-full"
                    value=""
                    required
                  />
                </div>
              </label>
              <label className="flex flex-col justify-start items-start flex-none gap-2 h-min p-0 relative w-full">
                <div className="outline-none flex flex-col justify-start flex-none h-auto relative whitespace-pre w-auto">
                  <p className="text-[#12161a] text-base">Email Address *</p>
                </div>
                <div className="relative w-full h-auto border border-[#3b3b3b1f] rounded-lg">
                  <input
                    type="email"
                    required
                    name="Email"
                    placeholder="email@mail.com"
                    className="p-[12px_18px_12px_18px] w-full"
                    value=""
                  />
                </div>
              </label>
              <label className="flex flex-col justify-start items-start flex-none gap-2.5 h-min p-0 relative w-full">
                <div className="outline-none flex flex-col justify-start flex-none h-auto relative whitespace-pre w-auto">
                  <p className="text-[#12161a] text-base">Select Dept </p>
                </div>
                <div className="relative w-full h-auto border border-[#3b3b3b1f] rounded-lg">
                  <select
                    name="Select Dep"
                    className="p-[12px_18px_12px_18px] w-full"
                    defaultValue="0"
                  >
                    <option value="0" disabled className="text-[#0006]">
                      Add a subject
                    </option>
                    <option value="1">
                      Bachelor of Business Administration
                    </option>
                    <option value="2">Master of Business Administration</option>
                    <option value="3">Computer Science and Engineering</option>
                    <option value="4">
                      Data Science and Artificial Intelligence
                    </option>
                  </select>
                </div>
              </label>
              <label className="flex flex-col justify-start items-start flex-none gap-2.5 h-min p-0 relative w-full">
                <div className="outline-none flex flex-col justify-start flex-none h-auto relative whitespace-pre w-auto">
                  <p className="text-[#12161a] text-base">Message *</p>
                </div>
                <div className="relative w-full h-auto border border-[#3b3b3b1f] rounded-lg">
                  <textarea
                    required
                    name="Message"
                    placeholder="Write your message"
                    className="p-[12px_18px_12px_18px] w-full"
                  ></textarea>
                </div>
              </label>
              <div className="relative w-auto h-auto">
                <button
                  type="submit"
                  className="flex items-center justify-center cursor-pointer flex-row gap-0 h-min overflow-visible px-8 py-3.5 relative w-min bg-[#cf102d] rounded opacity-100"
                >
                  <div className="outline-none flex flex-col justify-start flex-none h-auto relative select-none whitespace-pre w-auto">
                    <p className="text-white text-base font-medium">
                      Send Message
                    </p>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="flex flex-col flex-none justify-center items-center gap-0 h-min overflow-hidden py-20 px-[30px] pb-[70px] relative w-full">
        <div className="flex flex-col flex-none justify-center items-center gap-8 h-min max-w-[1320px] overflow-hidden p-0 relative w-full z-0">
          <div className="flex flex-row flex-[1_0_0px] justify-start items-start gap-[60px] h-min overflow-visible p-0 relative">
            <div className="outline-none flex flex-col justify-center shrink-0 flex-[1_0_0px] h-auto max-w-[569px] relative whitespace-pre-wrap wrap-break-word">
              <h2 className=" text-[#12161a] text-5xl font-medium">
                Application Requirements
              </h2>
            </div>
          </div>

          <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none text-gray-700">
            <p>
              All students — whether new admissions or transferring from another
              school — are required to complete the following enrollment steps:
            </p>
          </div>

          {/* Requirements list: responsive 1/2 column layout */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {REQUIREMENTS.map((req) => (
              <li key={req.id} className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="inline-flex self-center justify-self-center h-2 w-2 shrink-0 rounded-full bg-gray-900"
                />
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  {req.text}
                </p>
              </li>
            ))}
          </ul>

          {/* Optional CTA area if you want an Apply button */}
          <div className="mt-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-base text-gray-600">
              Need help with your application or have questions about required
              documents? Reach out to our admissions team.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#cf102d] px-5 py-2.5 text-base font-medium text-white shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#cf102d]/40"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </section>
      <MapSection
        query="Chetna Garden, Building A/2, Chetna Garden, Meetha Nagar, Kondhwa Khurd, Pune 411048., Meeta Nagar, Kondhwa, Pune, Maharashtra 411048"
        zoom={12}
      />
    </div>
  );
};

export default Contact;
