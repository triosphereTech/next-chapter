"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Study Abroad Counselling",
    description:
      "Personalized guidance to help you choose the right country, university, and course based on your academic profile and career goals.",
    image: "/images/services/counselling.jpg",
    points: [
      "Career & profile assessment",
      "Country selection",
      "Course recommendations",
      "University shortlisting",
    ],
  },
  {
    title: "University Admissions",
    description:
      "End-to-end admission support, ensuring every application is accurate, complete, and submitted on time.",
    image: "/images/services/admission.jpg",
    points: [
      "Application preparation",
      "Document verification",
      "Statement of Purpose",
      "Offer letter guidance",
    ],
  },
  {
    title: "Scholarship Assistance",
    description:
      "Helping students discover and apply for scholarships that reduce the financial burden of international education.",
    image: "/images/services/scholarship.jpg",
    points: [
      "Scholarship search",
      "Eligibility guidance",
      "Application support",
      "Financial planning",
    ],
  },
  {
    title: "Student Visa Assistance",
    description:
      "Comprehensive visa guidance from documentation to interview preparation for a smooth approval process.",
    image: "/images/services/visa.jpg",
    points: [
      "Visa documentation",
      "Application filing",
      "Interview preparation",
      "Travel guidance",
    ],
  },
  {
    title: "Education Loan Support",
    description:
      "Helping students understand education loan options and prepare the required documentation.",
    image: "/images/services/loan.jpg",
    points: [
      "Loan guidance",
      "Financial documentation",
      "Bank assistance",
      "Application support",
    ],
  },
  {
    title: "Pre-Departure Support",
    description:
      "Preparing students for life abroad with practical guidance before they leave for their destination.",
    image: "/images/services/predeparture.jpg",
    points: [
      "Accommodation guidance",
      "Travel checklist",
      "Forex assistance",
      "Orientation sessions",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-[#FAFAF9] pb-10 pt-44">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#84212E]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#84212E]">
            What We Offer
          </span>

          <h2 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2430]">
            Comprehensive Services
          </h2>

          <p className="mt-2 text-sm leading-8 text-[#5C6070]">
            Supporting you at every stage of your international education
            journey—from planning to departure.
          </p>
        </div>

        {/* Services */}

        <div className="space-y-16 lg:space-y-28">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
            >
              {/* Image */}

              <div className={`${index % 2 ? "lg:order-2" : ""}`}>
                <div className="overflow-hidden rounded-[34px]">
                  <Image
                    src={service.image}
                    width={700}
                    height={500}
                    alt={service.title}
                    className="h-64
sm:h-80
md:h-96
lg:h-[430px]
w-full
object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}

             <div
  className={`min-w-0 ${index % 2 ? "lg:order-1" : ""}`}
>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#84212E]">
                  Service {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2430]">
                  {service.title}
                </h3>

               <p className="mt-5 text-sm lg:text-lg leading-8 text-[#5C6070] break-words">
                  {service.description}
                </p>

                <div className="mt-8 grid gap-4">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-[#84212E]" />

                      <span className="text-[#5C6070]">{point}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-10 inline-flex items-center gap-2 font-semibold text-[#84212E] transition hover:gap-3">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
