"use client";

import Image from "next/image";
import { Eye, Target } from "lucide-react";

import VisionImage from "@/../public/images/sections/about/Mission.png";
import MissionImage from "@/../public/images/sections/about/Vision.png";

const VisionMission = () => {
  return (
    <section className="bg-[#FAFAF9] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#84212E]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#84212E]">
            Our Purpose
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#1F2430] sm:text-5xl">
            Building Futures Through
            <br />
            Education
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5C6070]">
            Our vision inspires where we're headed, while our mission
            defines how we help every student confidently achieve their
            global education goals.
          </p>
        </div>

        {/* Vision */}
        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#D3AF5F]/20 blur-3xl" />

            <div className="relative overflow-hidden">
              <Image
                src={VisionImage}
                alt="Our Vision"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#84212E]/10">
              <Eye className="h-7 w-7 text-[#84212E]" />
            </div>

            <span className="mt-8 block text-sm font-semibold uppercase tracking-[0.25em] text-[#84212E]">
              Our Vision
            </span>

            <h3 className="mt-3 text-4xl font-bold leading-tight text-[#1F2430]">
              Empowering Students
              <br />
              Without Boundaries
            </h3>

            <p className="mt-6 text-lg leading-8 text-[#5C6070]">
              We envision becoming one of the most trusted overseas
              education consultancies by empowering students with
              transparent guidance, global opportunities, and
              personalized support that helps transform ambitions into
              successful international careers.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="mt-24 grid items-center gap-14 lg:grid-cols-2">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D3AF5F]/20">
              <Target className="h-7 w-7 text-[#84212E]" />
            </div>

            <span className="mt-8 block text-sm font-semibold uppercase tracking-[0.25em] text-[#84212E]">
              Our Mission
            </span>

            <h3 className="mt-3 text-4xl font-bold leading-tight text-[#1F2430]">
              Guiding Every Step of
              <br />
              Your Journey
            </h3>

            <p className="mt-6 text-lg leading-8 text-[#5C6070]">
              Our mission is to simplify every stage of studying abroad
              by offering expert counselling, university admissions,
              scholarship assistance, visa guidance, and continuous
              support—ensuring every student receives the confidence and
              direction needed to achieve their academic goals.
            </p>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-[#84212E]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px]">
              <Image
                src={MissionImage}
                alt="Our Mission"
                className="h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;