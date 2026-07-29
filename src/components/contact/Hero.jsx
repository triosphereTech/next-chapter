"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] pt-44 pb-24">
      {/* Background Blur */}

      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#84212E]/5 blur-[120px]" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#D3AF5F]/10 blur-[120px]" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
      >
        {/* Badge */}

        <span className="inline-flex items-center rounded-full border border-[#84212E]/15 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#84212E] shadow-sm">
          Contact Us
        </span>

        {/* Heading */}

        <h1 className="mt-6 font-semibold leading-tight text-[#1F2430] text-2xl md:text-4xl lg:text-5xl">
          Let's Build Your
          <br />
          <i className="text-[#84212E]">
            Global Education Journey
          </i>
        </h1>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#5C6070]">
          Whether you're exploring universities, planning your visa, or
          looking for expert guidance, our experienced counsellors are ready
          to help you achieve your international education goals.
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#84212E] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6F1B26]">
            Book Free Consultation

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <button className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#84212E]/15 bg-white px-8 py-4 font-semibold text-[#84212E] transition-all duration-300 hover:-translate-y-1 hover:border-[#84212E] hover:bg-[#84212E]/5">
            <Phone size={18} />
            Call Our Experts
          </button>
        </div>

        {/* Trust Points */}

        <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm font-medium text-[#5C6070]">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-[#84212E]" />
            500+ Students Guided
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-[#84212E]" />
            98% Visa Success
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-[#84212E]" />
            Personalized Counselling
          </div>
        </div>
      </motion.div>
    </section>
  );
}