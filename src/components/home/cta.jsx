"use client";

import React from "react";
import Image from "next/image";
import {
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";

import CtaImage from "@/../public/images/sections/Home/cta.png";

const Cta = () => {
  return (
    <section className="py-14 px-4 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[35px] bg-[#FAFAF9]">
          {/* Decorative Blur */}
          {/* <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#8B72B8]/10 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#5B7FA6]/10 blur-3xl" /> */}

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="px-8 py-10 sm:px-10 lg:px-12 lg:py-12">
              <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
                Let's Get Started
              </span>

              <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight text-[#1F2430] sm:text-4xl lg:text-[42px]">
                Your Global Education Journey Starts Here.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#5C6070]">
                Whether you're planning to study in Canada, the UK,
                Australia, Germany, or beyond, our experienced
                counselors are here to guide you through university
                selection, applications, scholarships, and visa
                assistance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-3 rounded-full bg-[#1F2430] px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-black">
                  Book Free Consultation
                  <FaArrowRight />
                </button>

                <button className="inline-flex items-center gap-3 rounded-full border border-[#1F2430]/10 bg-white px-7 py-4 font-semibold text-[#1F2430] transition hover:border-[#1F2430]">
                  <FaPhoneAlt />
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden relative lg:flex justify-center self-center lg:justify-center">
              <Image
  src={CtaImage}
  alt="Student"
  priority
  className="w-[240px] sm:w-[290px] md:w-[340px] lg:w-[400px] xl:w-[450px] h-auto object-contain lg:translate-y-4"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;