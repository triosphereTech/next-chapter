"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which countries can I study in through NCO Overseas?",
    answer:
      "We assist students with admissions in Canada, the United Kingdom, Australia, Germany, Ireland, New Zealand, and several other popular study destinations.",
  },
  {
    question: "Do you provide university selection guidance?",
    answer:
      "Yes. We recommend universities based on your academic profile, career goals, preferred destination, and budget.",
  },
  {
    question: "Can you help with student visa applications?",
    answer:
      "Absolutely. We provide complete visa assistance including documentation, application review, interview guidance, and submission support.",
  },
  {
    question: "Do you assist with scholarships?",
    answer:
      "Yes. We help students explore scholarship opportunities offered by universities and guide them throughout the application process.",
  },
  {
    question: "How long does the admission process usually take?",
    answer:
      "The admission timeline depends on the country and university, but generally ranges from two to six months.",
  },
  {
    question: "How do I start my study abroad journey?",
    answer:
      "Simply book a free consultation with our expert counsellors. We'll evaluate your profile and guide you through every step.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#FAFAF9] py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex rounded-full bg-[#84212E]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#84212E]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#1F2430] sm:text-5xl">
            Have Questions?
            <br />
           <span className="text-red-800">We've Got Answers.</span> 
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5C6070]">
            Find answers to the most common questions about university admissions,
            scholarships, visa assistance, and studying abroad.
          </p>

        </div>

        {/* FAQ */}

        <div className="mt-8 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[24px] border border-[#ECECEC] bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <h3 className="pr-6 text-lg font-semibold text-[#1F2430]">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#84212E] transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-8 pb-7 leading-7 text-[#5C6070]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}