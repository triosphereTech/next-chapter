"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiUserCheck,
  FiCompass,
  FiAward,
  FiFileText,
  FiGlobe,
  FiGift,
  FiBriefcase,
  FiTrendingUp,
  FiArrowUpRight,
} from "react-icons/fi";

/**
 * WhyChooseUsBento
 * -------------------------------------------------------------
 * "Why Choose Us" section for an overseas education consultancy,
 * laid out as a bento grid (mixed tile sizes) instead of a uniform
 * card grid.
 *
 * Grid plan on large screens (4 cols):
 *   Row 1-2: [ Feature tile — 2x2 ] [ Career Guidance ] [ University Partnerships ]
 *   Row 3:   [ Feature tile cont. ] [ Admission Assistance — 2x1        ]
 *   Row 4:   [ Visa Support ] [ Scholarship Guidance ] [ Pre-Departure ] [ Success Rate ]
 *
 * Collapses to 2 cols on tablet and 1 col on mobile.
 *
 * Drop into /components/WhyChooseUsBento.jsx and render <WhyChooseUsBento />
 * -------------------------------------------------------------
 */

const TILE_BG = "bg-[#F6F6F2]";
const ICON_BG = "bg-white";
const ICON_COLOR = "text-blue-700";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Icon({ icon: Cmp, dark }) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-full shadow-sm ${
        dark ? "bg-white/10 text-white" : `${ICON_BG} ${ICON_COLOR}`
      }`}
    >
      <Cmp className="h-5 w-5" strokeWidth={1.75} />
    </div>
  );
}

function ArrowHint({ dark }) {
  return (
    <div
      className={`mt-5 flex items-center gap-1.5 text-sm font-medium opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 ${
        dark ? "text-white/70" : "text-slate-400"
      }`}
    >
      <span>Learn more</span>
      <FiArrowUpRight className="h-4 w-4" />
    </div>
  );
}

export default function WhyChooseUsBento() {
  return (
    <section className="relative bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F6F6F2] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            Why Choose Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-2xl text-center text-[34px] leading-[1.15] md:text-5xl md:leading-[1.1] font-bold tracking-tight text-slate-900">
          Why Students Trust Us for Their Study Abroad Journey
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-center text-base md:text-lg text-slate-500">
          Guidance you can rely on, from the first shortlist to the day you
          land at your new campus.
        </p>

        {/* Bento grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 md:auto-rows-[170px] lg:grid-cols-4 lg:auto-rows-[160px]">
          {/* 1. Feature tile — Expert Counselors */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-amber-300 bg-[#370a10] p-8 shadow-[0_2px_20px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.18)] md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2"
          >
            <Icon icon={FiUserCheck} dark />
            <div>
              <h3 className="mb-2 text-2xl font-semibold leading-snug text-white">
                Expert Study Abroad Counselors
              </h3>
              <p className="max-w-sm text-[15.5px] leading-relaxed text-white/70">
                One-on-one guidance from certified counselors who understand
                global admissions inside out — from first shortlist to final
                offer letter.
              </p>
              <ArrowHint dark />
            </div>
          </motion.div>

          {/* 2. Personalized Career Guidance */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`group relative flex flex-col justify-between rounded-[28px] border border-amber-300 ${TILE_BG} p-7 shadow-[0_2px_20px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)]`}
          >
            {/* <Icon icon={FiCompass} /> */}
            <div>
              <h3 className="mb-1.5 text-lg font-semibold leading-snug text-slate-900">
                Personalized Career Guidance
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-600">
                Matched to your goals, strengths, and long-term path.
              </p>
            </div>
          </motion.div>

          {/* 3. Top University Partnerships */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`group relative flex flex-col justify-between rounded-[28px] border border-amber-300 ${TILE_BG} p-7 shadow-[0_2px_20px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)]`}
          >
            {/* <Icon icon={FiAward} /> */}
            <div>
              <h3 className="mb-1.5 text-lg font-semibold leading-snug text-slate-900">
                Top University Partnerships
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-600">
                Direct access to 500+ globally ranked universities.
              </p>
            </div>
          </motion.div>

          {/* 4. Complete Admission Assistance — wide */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`group relative flex flex-col justify-between rounded-[28px] border border-amber-300 ${TILE_BG} p-7 shadow-[0_2px_20px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)] md:col-span-2 lg:col-span-2`}
          >
            {/* <Icon icon={FiFileText} /> */}
            <div>
              <h3 className="mb-1.5 text-lg font-semibold leading-snug text-slate-900">
                Complete Admission Assistance
              </h3>
              <p className="max-w-sm text-[15px] leading-relaxed text-slate-600">
                From shortlisting to final submission, we manage every step
                of your application with care.
              </p>
            </div>
          </motion.div>

          {/* 5. Student Visa Support */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`group relative flex flex-col justify-between rounded-[28px] border border-amber-300 ${TILE_BG} p-7 shadow-[0_2px_20px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)]`}
          >
            {/* <Icon icon={FiGlobe} /> */}
            <div>
              <h3 className="mb-1.5 text-lg font-semibold leading-snug text-slate-900">
                Student Visa Support
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-600">
                Documentation and interview prep, stress-free.
              </p>
            </div>
          </motion.div>

          {/* 6. Scholarship Guidance */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`group relative flex flex-col justify-between rounded-[28px] border border-amber-300 ${TILE_BG} p-7 shadow-[0_2px_20px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)]`}
          >
            {/* <Icon icon={FiGift} /> */}
            <div>
              <h3 className="mb-1.5 text-lg font-semibold leading-snug text-slate-900">
                Scholarship Guidance
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-600">
                Find and apply for aid that eases the cost.
              </p>
            </div>
          </motion.div>

          {/* 7. Pre-Departure Assistance */}
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`group relative flex flex-col justify-between rounded-[28px] border border-amber-300 ${TILE_BG} p-7 shadow-[0_2px_20px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)]`}
          >
            {/* <Icon icon={FiBriefcase} /> */}
            <div>
              <h3 className="mb-1.5 text-lg font-semibold leading-snug text-slate-900">
                Pre-Departure Assistance
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-600">
                Briefings on travel, stay, and settling in.
              </p>
            </div>
          </motion.div>

          {/* 8. High Success Rate — stat tile */}
          <motion.div
            custom={7}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`group relative flex flex-col justify-between rounded-[28px] border border-amber-300 ${TILE_BG} p-7 shadow-[0_2px_20px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)]`}
          >
            <div className="flex items-center justify-between">
              {/* <Icon icon={FiTrendingUp} /> */}
              <span className="text-3xl mb-1 font-bold tracking-tight text-green-500">
                98%
              </span>
            </div>
            <div>
              <h3 className="mb-1.5 text-lg font-semibold leading-snug text-slate-900">
                High Success Rate
              </h3>
              <p className="mb-2 text-[15px] leading-relaxed text-slate-600">
                Consistent admission and visa approvals.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/15"
          >
            Book Your Free Consultation
            <FiArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}