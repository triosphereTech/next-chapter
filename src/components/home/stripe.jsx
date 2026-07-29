"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Stripe from "@/../public/images/sections/Home/stripe.png";

const StripeSection = () => {
  return (
    <section className="">
      <div className="overflow-hidden bg-[#84212E]">
        <div className="grid items-center lg:grid-cols-[2fr_0.8fr]">
          {/* Left */}

          <div className="px-8 py-10 sm:px-10 lg:px-14 lg:py-12">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D3AF5F]">
              Start Your Journey
            </span>

            <h2 className="mt-5 max-w-4xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Take Your
              <br />
              First Step Towards
              <br />
              Studying Abroad
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80">
              Get expert guidance for university admissions, visa assistance,
              scholarships, and every stage of your international education
              journey.
            </p>

            <div className="mt-8">
              <button className="inline-flex items-center gap-3 rounded-xl bg-white px-7 py-3.5 font-semibold text-[#84212E] transition duration-300 hover:bg-[#F7F4EE]">
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right */}

          <div className="relative flex justify-center self-end lg:justify-end">
            <Image
              src={Stripe}
              alt="Student"
              className="w-[240px] sm:w-[290px] md:w-[340px] lg:w-[360px] xl:w-[400px] h-auto object-contain lg:translate-y-3"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StripeSection;
