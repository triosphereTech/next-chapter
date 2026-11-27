"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

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

export default function ContactForm() {
  return (
    <section className="bg-[#FAFAF9] py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"
      >
        {/* ================= LEFT SIDE ================= */}

        <motion.div
          variants={fadeUp}
          className="rounded-[32px] border border-black/5 bg-white p-8 shadow-sm"
        >
          <span className="inline-flex rounded-full bg-[#84212E]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#84212E]">
            Get In Touch
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#1F2430]">
            We'd Love
            <br />
            To Hear From You
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-[#5C6070]">
            Whether you're planning to study abroad or simply have a
            question, our experienced counsellors are ready to guide you
            every step of the way.
          </p>
    
          <div className="mt-10 space-y-5">

            {/* Phone */}

            <a
              href="tel:+919876543210"
              className="group flex items-center gap-5 rounded-3xl border border-black/5 bg-[#FAFAF9] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#84212E]/15 hover:bg-white hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#84212E]/10 text-[#84212E] transition-all duration-300 group-hover:bg-[#84212E] group-hover:text-white">
                <Phone size={22} />
              </div>

              <div>
                <p className="text-sm font-medium text-[#84212E]">
                  Call Us
                </p>

                <h4 className="mt-1 text-lg font-semibold text-[#1F2430]">
                  +91 76000 17132
                </h4>
              </div>
            </a>

            {/* Email */}

            <a
              href="mailto:hello@example.com"
              className="group flex items-center gap-5 rounded-3xl border border-black/5 bg-[#FAFAF9] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#84212E]/15 hover:bg-white hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#84212E]/10 text-[#84212E] transition-all duration-300 group-hover:bg-[#84212E] group-hover:text-white">
                <Mail size={22} />
              </div>

              <div>
                <p className="text-sm font-medium text-[#84212E]">
                  Email Us
                </p>

                <h4 className="mt-1 text-lg font-semibold text-[#1F2430]">
                  info@nextoverseas.com
                </h4>
              </div>
            </a>

            {/* Address */}

            <div className="group flex items-center gap-5 rounded-3xl border border-black/5 bg-[#FAFAF9] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#84212E]/15 hover:bg-white hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#84212E]/10 text-[#84212E] transition-all duration-300 group-hover:bg-[#84212E] group-hover:text-white">
                <MapPin size={22} />
              </div>

              <div>
                <p className="text-sm font-medium text-[#84212E]">
                  Office Address
                </p>

                <h4 className="mt-1 text-lg font-semibold text-[#1F2430]">
                  T-6 Vikram chambers
                  <br />
                  Near sales india Income tax, <br /> Ahmedabad, Gujarat


                </h4>
              </div>
            </div>

            {/* Working Hours */}

            <div className="group flex items-center gap-5 rounded-3xl border border-black/5 bg-[#FAFAF9] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#84212E]/15 hover:bg-white hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#84212E]/10 text-[#84212E] transition-all duration-300 group-hover:bg-[#84212E] group-hover:text-white">
                <Clock size={22} />
              </div>

              <div>
                <p className="text-sm font-medium text-[#84212E]">
                  Working Hours
                </p>

                <h4 className="mt-1 text-lg font-semibold text-[#1F2430]">
                  Monday – Saturday
                </h4>

                <p className="mt-1 text-[#5C6070]">
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          variants={fadeUp}
          className="rounded-[32px] border border-black/5 bg-white p-8 shadow-sm"
        >
          <span className="inline-flex rounded-full bg-[#84212E]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#84212E]">
            Send Message
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#1F2430]">
            Let's Discuss Your Future
          </h2>

          <p className="mt-4 text-[16px] leading-8 text-[#5C6070]">
            Complete the form below and our counsellors will get back to
            you within 24 hours.
          </p>

          {/* FORM STARTS HERE */}

          <form
            action="https://ayvanfinserv.com/api/v1/public"
            method="POST"
            className="mt-10 space-y-6"
          >
            <input
              type="hidden"
              name="access_key"
              value="39f97463-22a7-4b36-ac7a-e9bb14a5bdec"
            />
            <input type="hidden" name="subject" value="New enquiry from Next Overseas" />
            <input type="hidden" name="from_name" value="Next Overseas Website" />
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              aria-hidden="true"
              className="absolute h-px w-px overflow-hidden opacity-0"
            />
                        {/* Name */}

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1F2430]">
                  First Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="John"
                  required
                  className="h-14 w-full rounded-2xl border border-black/5 bg-[#FAFAF9] px-5 outline-none transition-all duration-300 focus:border-[#84212E] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1F2430]">
                  Last Name
                </label>

                <input
                  type="text"
                  name="last_name"
                  placeholder="Doe"
                  required
                  className="h-14 w-full rounded-2xl border border-black/5 bg-[#FAFAF9] px-5 outline-none transition-all duration-300 focus:border-[#84212E] focus:bg-white"
                />
              </div>
            </div>

            {/* Email & Phone */}

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1F2430]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="h-14 w-full rounded-2xl border border-black/5 bg-[#FAFAF9] px-5 outline-none transition-all duration-300 focus:border-[#84212E] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1F2430]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 76000 17132"
                  required
                  className="h-14 w-full rounded-2xl border border-black/5 bg-[#FAFAF9] px-5 outline-none transition-all duration-300 focus:border-[#84212E] focus:bg-white"
                />
              </div>
            </div>

            {/* Country & Service */}

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1F2430]">
                  Preferred Country
                </label>

                <select name="preferred_country" required defaultValue="" className="h-14 w-full rounded-2xl border border-black/5 bg-[#FAFAF9] px-5 outline-none transition-all duration-300 focus:border-[#84212E] focus:bg-white">
                  <option value="" disabled>Select Country</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Germany</option>
                  <option>New Zealand</option>
                  <option>I haven't decided yet</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1F2430]">
                  Service
                </label>

                <select name="service" required defaultValue="" className="h-14 w-full rounded-2xl border border-black/5 bg-[#FAFAF9] px-5 outline-none transition-all duration-300 focus:border-[#84212E] focus:bg-white">
                  <option value="" disabled>Select Service</option>
                  <option>Career Counselling</option>
                  <option>University Selection</option>
                  <option>Application Assistance</option>
                  <option>Visa Assistance</option>
                  <option>Scholarship Guidance</option>
                  <option>Education Loan</option>
                </select>
              </div>
            </div>

            {/* Message */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#1F2430]">
                Message
              </label>

              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your study plans..."
                required
                className="w-full resize-none rounded-2xl border border-black/5 bg-[#FAFAF9] p-5 outline-none transition-all duration-300 focus:border-[#84212E] focus:bg-white"
              />
            </div>

            {/* Checkbox */}

            <label className="flex items-start gap-3 text-sm text-[#5C6070]">
              <input
                type="checkbox"
                name="consent"
                value="Agreed"
                required
                className="mt-1 h-4 w-4 accent-[#84212E]"
              />

              <span>
                I agree to the privacy policy and consent to being contacted
                regarding my enquiry.
              </span>
            </label>

            {/* Button */}

            <button
              type="submit"
              className="group flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#84212E] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6F1B26] hover:shadow-xl"
            >
              Send Message

              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6 6 6-6 6"
                />
              </svg>
            </button>

          </form>

        </motion.div>
      </motion.div>
    </section>
  );
}
