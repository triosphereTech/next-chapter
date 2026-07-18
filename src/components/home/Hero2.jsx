"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Bg from "@/../public/images/sections/Home/worldbg.png";
import Fg from "@/../public/images/sections/Home/studentsbg.png";

const Hero2 = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#FAFAF9]">

        {/* Background Illustration */}
        <Image
          src={Bg}
          alt="World Illustration"
          priority
          className="absolute inset-0 bottom-0 h-full w-full object-cover object-bottom opacity-95"
        />

        {/* Decorative Dots */}
        <div className="absolute left-[10%] top-20 h-5 w-5 rounded-full bg-[#D3AF5F]" />
        <div className="absolute right-[12%] top-28 h-4 w-4 rounded-full bg-[#84212E]" />
        <div className="absolute left-[18%] top-56 h-32 w-32 rounded-full bg-[#D3AF5F]/10 blur-sm" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6 pt-12 text-center sm:px-10 lg:px-16 lg:pt-16">

          <span className="rounded-full bg-[#84212E]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#84212E]">
            Start Your Journey
          </span>

          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-[#1F2430] sm:text-5xl lg:text-6xl">
            Your Gateway to
            <br />
            <span className="text-[#84212E]">
              Global Education
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5C6070] sm:text-lg">
            Every step of your international education journey with
            confidence. From university admissions to visa guidance,
            we're here to help you achieve your dream of studying
            abroad.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-[#84212E] px-8 py-4 font-semibold text-white transition hover:bg-[#6E1A26]">
              Book Free Consultation
            </button>

            <button className="inline-flex items-center gap-2 rounded-xl border border-[#DADADA] bg-white px-8 py-4 font-semibold text-[#1F2430] transition hover:border-[#84212E] hover:text-[#84212E]">
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Students */}
        <div className="relative z-10 mt-10 flex justify-center lg:mt-2">
          <Image
            src={Fg}
            alt="Graduated Students"
            priority
            className="
              w-auto
              h-auto
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;