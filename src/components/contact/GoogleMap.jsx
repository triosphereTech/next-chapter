"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function GoogleMap() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] pb-28">
      {/* Background Blur */}

      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#84212E]/5 blur-[120px]" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#D3AF5F]/10 blur-[120px]" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Heading */}

        <div className="text-center">
          <span className="inline-flex rounded-full bg-[#84212E]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#84212E]">
            Visit Our Office
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#1F2430] md:text-5xl">
            Find Us On The Map
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5C6070]">
            We'd love to welcome you to our office. Schedule a consultation
            or visit us to discuss your study abroad plans with our expert
            counsellors.
          </p>
        </div>

        {/* Map */}

        <div className="mt-14 overflow-hidden rounded-[32px] border border-black/5 bg-white p-3 shadow-sm">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Ahmedabad,Gujarat&output=embed"
            className="h-[500px] w-full rounded-[24px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
}