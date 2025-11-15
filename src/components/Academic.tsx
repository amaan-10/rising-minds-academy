
import { AcademicCard } from "./AcademicCard";
import { Academic as AcademicData } from "@/lib/academics";

const Academic = () => {

  return (
    <div>
      <section
        id="hero-section"
        className="py-20 px-8 bg-[#faf7ef] h-[350px] w-full"
      >
        <div className="flex flex-row items-start relative w-full h-full flex-1">
          {/* Left content */}
          <div className="flex flex-col items-start gap-6 w-full">
            <h1 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight text-gray-900">
              {/* Keeping letters in normal flow — if you want per-letter animation, we can split into spans */}
              Academics
            </h1>
          </div>

          <div className="w-1 h-[350px] -my-20 bg-[#3b3b3b1f] mx-6"></div>

          {/* Right content */}
          <div className="flex flex-row items-end w-full h-full pl-24">
            <p className="flex flex-col max-w-md text-lg md:text-xl text-gray-600">
              We are a forward-thinking academy committed to academic
              excellence, innovation, and real-world impact.
            </p>
          </div>
        </div>
      </section>
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-[120px] px-[30px] pb-[60px]">
        {AcademicData.map((academic, index) => (
          <AcademicCard key={index} {...academic} />
        ))}
      </section>
    </div>
  );
};

export default Academic;
