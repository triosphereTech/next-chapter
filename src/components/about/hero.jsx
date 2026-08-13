"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="bg-[#FAFAF9]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:pt-40">

        {/* Breadcrumb */}

        <div className="mb-5 flex items-center justify-center gap-2 text-sm">
          <Link
            href="/"
            className="text-[#6B7280] hover:text-[#84212E]"
          >
            Home
          </Link>

          <ChevronRight className="h-4 w-4 text-[#B5B7C0]" />

          <span className="font-medium text-[#1F2430]">
            About Us
          </span>
        </div>

        <div className="flex flex-col items-center text-center">

          <span className="inline-flex rounded-full bg-[#84212E]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#84212E]">
            About NCO
          </span>

          <h1 className="mt-6 max-w-2xl font-semibold leading-tight text-[#1F2430] text-4xl lg:text-5xl">
            Guiding Students
            <br />
          <i className="text-[#84212E]">   Beyond Borders </i>
          </h1>

          <p className="mt-7 max-w-2xl text-md lg:text-lg leading-8 text-[#5C6070]">
            We simplify the journey to international education with
            expert counselling, university admissions, visa guidance,
            scholarships, and end-to-end support that helps students
            achieve their academic goals with confidence.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-xl bg-[#84212E] px-7 py-4 font-semibold text-white transition hover:bg-[#6E1A26]"
            >
              Book Free Consultation
            </Link>

            <Link
              href="/service"
              className="inline-flex items-center gap-2 rounded-xl border border-[#DDD] bg-white px-7 py-4 font-semibold text-[#1F2430] transition hover:border-[#84212E] hover:text-[#84212E]"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-3 gap-5">

            <div>
              <h3 className="text-3xl font-bold text-[#84212E]">
                1000+
              </h3>

              <p className="mt-2 text-sm text-[#5C6070]">
                Students Guided
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#84212E]">
                25+
              </h3>

              <p className="mt-2 text-sm text-[#5C6070]">
                Countries
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#84212E]">
                95%
              </h3>

              <p className="mt-2 text-sm text-[#5C6070]">
                Visa Success
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;