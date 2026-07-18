"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaUserCircle, FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TESTIMONIALS = [
  {
    name: "Aarav Patel",
    meta: "Canada · Master's in Computer Science",
    title: "Stress-Free Study Abroad Journey",
    review:
      "The team made my study abroad journey completely stress-free. From university shortlisting to visa approval, they guided me at every stage with clear advice and constant support.",
    bg: "bg-[#FBF6EE]",
    quote: "text-[#C9A35A]",
  },
  {
    name: "Emily Carter",
    meta: "United Kingdom · MBA",
    title: "Perfect University Guidance",
    review:
      "I was confused about choosing the right university, but their counselors understood my goals and recommended the perfect options. I'm now pursuing my MBA at my dream university.",
    bg: "bg-[#EAF1FB]",
    quote: "text-[#5B7FA6]",
  },
  {
    name: "Riya Shah",
    meta: "Australia · Bachelor of Business",
    title: "Smooth Admission Process",
    review:
      "Their guidance throughout the admission and documentation process was exceptional. Every deadline was handled professionally, making the entire experience smooth and worry-free.",
    bg: "bg-[#F3EEFB]",
    quote: "text-[#8B72B8]",
  },
  {
    name: "Daniel Wilson",
    meta: "Germany · MSc Mechanical Engineering",
    title: "SOP & Documentation Support",
    review:
      "From preparing my SOP to organizing all the required documents, the team ensured everything was perfect. Their expertise gave me confidence throughout the application process.",
    bg: "bg-[#EEF6EF]",
    quote: "text-[#6FA37B]",
  },
  {
    name: "Neha Mehta",
    meta: "Ireland · Postgraduate Diploma",
    title: "Honest & Personalized Advice",
    review:
      "What impressed me most was their honest guidance. They suggested universities that matched my profile, budget, and career aspirations instead of simply giving me a long list of options.",
    bg: "bg-[#FBEFE8]",
    quote: "text-[#C97F55]",
  },
  {
    name: "Ethan Brown",
    meta: "New Zealand · Bachelor of Commerce",
    title: "Successful Visa Approval",
    review:
      "The visa process felt overwhelming at first, but their experienced team handled every detail with care. Thanks to their support, my application was approved without any complications.",
    bg: "bg-[#EAF1FB]",
    quote: "text-[#5B7FA6]",
  },
];

export default function Testimonial() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full bg-linear-to-b from-[#FAFAF9] to-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="text-xs font-semibold tracking-[0.25em] text-[#8B72B8] uppercase">
          Testimonials
        </span>
        <h2 className="mt-4 font-bold text-4xl leading-tight text-[#1F2430] sm:text-5xl">
          Success Validated
          <br />
          by Clients
        </h2>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-6 flex">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="min-w-0 shrink-0 grow-0 basis-full pl-6 sm:basis-1/2 lg:basis-1/3"
              >
                <div
                  className={`group relative flex h-full min-h-[360px] flex-col justify-between rounded-[32px] ${t.bg} p-8  transition-all duration-300 ease-out hover:scale-95`}
                >
                  <FaQuoteLeft className={`h-9 w-9 ${t.quote} opacity-90`} />

<div className="mt-6 flex-1">
  <h3 className="mb-3 text-xl font-bold leading-snug text-[#1F2430]">
    {t.title}
  </h3>

  <p className="text-[17px] leading-relaxed text-[#2E3140]">
    {t.review}
  </p>
</div>

                  <div className="mt-8 flex items-end justify-between">
                    <div>
                      <p className="text-base font-semibold text-[#1F2430]">{t.name}</p>
                      <p className="text-sm text-[#5C6070]">{t.meta}</p>
                    </div>
                    <FaUserCircle className="h-12 w-12 shrink-0 text-[#1F2430]/20 transition-colors duration-300 group-hover:text-[#1F2430]/35" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1F2430]/10 bg-white text-[#1F2430] shadow-sm transition-all duration-200 hover:bg-[#1F2430] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-[#1F2430]"
          >
            <FaArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1F2430]/10 bg-white text-[#1F2430] shadow-sm transition-all duration-200 hover:bg-[#1F2430] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-[#1F2430]"
          >
            <FaArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}