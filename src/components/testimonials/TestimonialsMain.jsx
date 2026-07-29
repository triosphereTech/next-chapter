"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import testimonials from "./testimonialData";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0 },
};

function TestimonialCard({ item }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      layout
      className="group rounded-[28px] border border-black/5 bg-white p-6 shadow-sm transition-all duration-500 hover:border-[#84212E]/20 hover:shadow-[0_25px_60px_rgba(132,33,46,0.12)] hover:-translate-y-1"
    >
      <div className="flex flex-col items-center">
        <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-[#84212E]/10">
          <Image src={item.image} alt={item.name} fill className="object-cover" />
        </div>

        <h3 className="mt-5 text-xl font-bold text-[#1F2430]">{item.name}</h3>
        <p className="mt-1 text-sm text-[#6B7280]">
          {item.city} • {item.country}
        </p>

        <div className="mt-6 h-px w-14 bg-[#84212E]/10" />
      </div>

      <div className="mt-6 text-center">
        <h4 className="text-xl font-semibold leading-snug text-[#1F2430]">{item.title}</h4>
      </div>

      <p className="mt-4 text-center text-[15px] leading-7 text-[#5C6070] line-clamp-4">
        {item.review}
      </p>

      <div className="mt-7 flex justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#84212E]/10 bg-[#84212E]/5 text-[#84212E] transition-all duration-300 group-hover:bg-[#84212E] group-hover:text-white">
          <Quote size={20} />
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsMain() {
  const [showAll, setShowAll] = useState(false);

  const firstNine = testimonials.slice(0, 9);
  const rest = testimonials.slice(9);
  const hasMore = testimonials.length > 9;

  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] pt-44 pb-20">
      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#84212E]/5 blur-[120px]" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#D3AF5F]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#84212E]/15 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#84212E] shadow-sm">
            Student Success Stories
          </span>

          <h2 className="mt-6 font-semibold leading-tight text-[#1F2430] text-2xl md:text-4xl lg:text-5xl">
            Every Dream Has
            <br />
            <i className="text-[#84212E]">A Success Story</i>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5C6070]">
            Behind every admission letter is a story of ambition, determination, and expert
            guidance. Discover how we have helped students confidently begin their international
            education journey.
          </p>
        </motion.div>

        {/* First 9 cards — always rendered, no fade/clip games needed here */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {firstNine.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>

        {/* Extra cards — clipped + faded when collapsed, revealed on demand */}
        {hasMore && (
          <div
            className={`relative overflow-hidden transition-[max-height] duration-700 ease-in-out ${
              showAll ? "max-h-[10000px]" : "max-h-[420px]"
            }`}
          >
            <div className="grid gap-6 pt-6 md:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {(showAll ? rest : rest.slice(0, 3)).map((item) => (
                  <TestimonialCard key={item.name} item={item} />
                ))}
              </AnimatePresence>
            </div>

            {/* Fade only ever covers this clipped box, never the button below it */}
            {!showAll && (
              <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-[#FAFAF9]" />
            )}
          </div>
        )}

        {/* Button — normal flow, never overlapping cards */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="group inline-flex items-center gap-3 rounded-full border border-[#84212E]/15 bg-white px-8 py-3 font-semibold text-[#84212E] shadow-xl transition-all duration-300 hover:border-[#84212E] hover:bg-[#84212E] hover:text-white"
            >
              {showAll ? "Show Less" : "View More Success Stories"}
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                {showAll ? "↑" : "↓"}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}