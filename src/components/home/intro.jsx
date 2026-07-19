import Link from "next/link";
import React from "react";
import {
  FiArrowUpRight,
  FiCompass,
  FiAward,
  FiGlobe,
} from "react-icons/fi";

const features = [
  {
    icon: <FiCompass className="text-[30px]" />,
    title: "Expert Guidance",
    description:
      "Experienced counselors helping students make informed decisions for their international education journey.",
    filled: false,
  },
  {
    icon: <FiAward className="text-[30px]" />,
    title: "Personalized Support",
    description:
      "Tailored university and course recommendations based on your academic profile and career aspirations.",
    filled: true,
  },
  {
    icon: <FiGlobe className="text-[30px]" />,
    title: "Global Opportunities",
    description:
      "End-to-end assistance from university applications to student visas and pre-departure support.",
    filled: false,
  },
];

const Intro = () => {
  return (
    <section className="py-5 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}

        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Introduction
          </span>

          <h2 className="mt-6 text-[34px] leading-tight font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Start Your Study Abroad Journey Today
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            We believe studying abroad should be exciting—not overwhelming. Our
            experienced counselors simplify every step, helping you choose the
            right destination, secure university admissions, and confidently
            begin your global academic journey.
          </p>

          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-[16px] font-semibold text-black transition-all duration-300 hover:gap-3"
          >
            Learn More About Us
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Features */}

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-5"
            >
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  item.filled
                    ? "border-[#e67080] bg-[#7b1e2b] text-white"
                    : "border-neutral-300 bg-white text-neutral-900"
                }`}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="text-[26px] font-semibold tracking-tight text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-[17px] leading-7 text-neutral-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;