"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import HeroImage from "@/../public/images/sections/Home/hero.png";

const AboutHero = () => {
  return (
    <section className="bg-[#FAFAF9]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

        {/* Breadcrumb */}

        <div className="mb-10 flex items-center gap-2 text-sm">
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

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full bg-[#84212E]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#84212E]">
              About NCO
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-bold leading-tight text-[#1F2430] sm:text-5xl lg:text-6xl">
              Guiding Students
              <br />
              Beyond Borders
              <br />
              <span className="text-[#84212E]">
                Towards Success.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#5C6070]">
              We simplify the journey to international education with
              expert counselling, university admissions, visa guidance,
              scholarships, and end-to-end support that helps students
              achieve their academic goals with confidence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="rounded-xl bg-[#84212E] px-7 py-4 font-semibold text-white transition hover:bg-[#6E1A26]"
              >
                Book Free Consultation
              </Link>

              <Link
                href="/services"
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

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-[#FFF9F2] to-[#FAFAF9]" />

            <div className="relative overflow-hidden rounded-[36px]">
              <Image
                src={HeroImage}
                alt="About NCO"
                priority
                className="w-full object-cover"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-5 left-8 rounded-2xl bg-white px-6 py-5 shadow-xl">

              <p className="text-sm text-[#5C6070]">
                Trusted by Students
              </p>

              <h3 className="mt-1 text-2xl font-bold text-[#84212E]">
                Since 2015
              </h3>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;