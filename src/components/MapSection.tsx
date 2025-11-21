// components/MapSection.tsx
import React, { JSX } from "react";

type MapSectionProps = {
  query?: string;
  zoom?: number;
  className?: string;
};

export default function MapSection({
  query = "Framer B.V.",
  zoom = 15,
  className = "",
}: MapSectionProps): JSX.Element {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(
    query
  )}&z=${encodeURIComponent(String(zoom))}&output=embed`;

  return (
    <section
      aria-labelledby="map-heading"
      className={`py-8 bg-white ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex flex-row flex-[1_0_0px] justify-start items-start gap-[60px] h-min overflow-visible p-0 relative">
          <div className="outline-none flex flex-col justify-center shrink-0 flex-[1_0_0px] h-auto max-w-[569px] relative whitespace-pre-wrap wrap-break-word">
            <h2 className="text-[#12161a] text-3xl md:text-4xl lg:text-5xl font-heading font-semibold">
              Our Location
            </h2>
          </div>
        </div>

        <div className="w-full h-[360px] md:h-[520px] rounded-md overflow-hidden shadow-sm">
          <iframe
            title={`map-${query}`}
            src={src}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            aria-hidden={false}
          />
        </div>
      </div>
    </section>
  );
}
