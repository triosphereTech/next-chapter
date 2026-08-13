"use client";

import React from "react";
import Image from "next/image";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

import CtaImage from "@/../public/images/sections/Home/cta.png";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-5 px-0 lg:px-16">
      <div className="mx-auto max-w-7xl px-3   lg:px-8">
        <div className="relative overflow-hidden rounded-xl lg:rounded-[35px] bg-gradient-to-r from-[#84212E] via-[#8E2433] to-[#6F1B25]">
          {/* Decorative Blur */}
          {/* <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#8B72B8]/10 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#5B7FA6]/10 blur-3xl" /> */}

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="px-8 py-10 sm:px-10 lg:px-12 lg:py-12">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D3AF5F]">
                Let's Get Started
              </span>

              <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[42px]">
                Your Global Education Journey Starts Here.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
                Whether you're planning to study in Canada, the UK, Australia,
                Germany, or beyond, our experienced counselors are here to guide
                you through university selection, applications, scholarships,
                and visa assistance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-[#84212E] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8F3EA]"
                >
                  Book Free Consultation
                  <FaArrowRight />
                </Link>

                <a
                  href="tel:+916353157921"
                  className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-transparent px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#84212E]"
                >
                  <FaPhoneAlt />
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden relative lg:flex justify-center self-center lg:justify-center">
              <Image
                src={CtaImage}
                alt="Student"
                priority
                className="w-[240px] sm:w-[290px] md:w-[340px] lg:w-[400px] xl:w-[450px] h-auto object-contain lg:translate-y-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
