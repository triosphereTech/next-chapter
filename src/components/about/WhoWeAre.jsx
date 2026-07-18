"use client";

import Image from "next/image";
import { GraduationCap, Globe2, ShieldCheck } from "lucide-react";

import AboutImage from "@/../public/images/sections/Home/hero.png";

const cards = [
  {
    icon: GraduationCap,
    title: "Student-Centric Guidance",
    desc: "Every recommendation is tailored to each student's academic goals, career aspirations, and financial plans.",
  },
  {
    icon: Globe2,
    title: "Global Opportunities",
    desc: "We connect aspiring students with leading universities and institutions across multiple countries.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Support",
    desc: "From applications to visas, our experienced team provides transparent guidance throughout the journey.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-[#84212E]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#84212E]">
            Who We Are
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#1F2430] sm:text-5xl">
            Building Futures
            <br />
            Beyond Borders
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5C6070]">
            We are passionate about helping students achieve their dream of studying abroad by offering expert guidance, personalized counselling, and reliable support throughout every stage of their international education journey.
          </p>

        </div>

        {/* Content */}

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Image */}

          <div className="overflow-hidden rounded-[32px] bg-[#FAFAF9]">
            <Image
              src={AboutImage}
              alt="Students"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Cards */}

          <div className="flex flex-col gap-6">

            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className="rounded-[28px] border border-[#ECECEC] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#84212E]/20 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#84212E]/10">
                    <Icon className="h-7 w-7 text-[#84212E]" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-[#1F2430]">
                    {card.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#5C6070]">
                    {card.desc}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}