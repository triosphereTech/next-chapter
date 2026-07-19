import Link from "next/link";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiHome,
  FiFileText,
  FiDollarSign,
  FiShield,
  FiGlobe,
  FiEdit3,
  FiMapPin,
} from "react-icons/fi";

const services = [
  {
    title: "Career Counseling",
    description:
      "Personalized guidance to help you choose the ideal country, course, and career path.",
    icon: FiBookOpen,
    bg: "bg-sky-50",
    iconBg: "bg-sky-200",
    iconColor: "text-sky-700",
  },
  {
    title: "University Selection",
    description:
      "Helping you shortlist universities that perfectly match your academic profile and goals.",
    icon: FiHome,
    bg: "bg-violet-50",
    iconBg: "bg-violet-200",
    iconColor: "text-violet-700",
  },
  {
    title: "Admission Assistance",
    description:
      "Complete support for applications, SOPs, LORs, documentation, and admission processing.",
    icon: FiFileText,
    bg: "bg-orange-50",
    iconBg: "bg-orange-200",
    iconColor: "text-orange-700",
  },
  {
    title: "Scholarship Assistance",
    description:
      "Explore scholarships, grants, and financial aid opportunities to reduce education costs.",
    icon: FiDollarSign,
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-200",
    iconColor: "text-emerald-700",
  },
  {
    title: "Student Visa Guidance",
    description:
      "Professional assistance with documentation, interview preparation, and visa approval.",
    icon: FiShield,
    bg: "bg-rose-50",
    iconBg: "bg-rose-200",
    iconColor: "text-rose-700",
  },
  {
    title: "Pre-Departure Support",
    description:
      "Accommodation, travel planning, forex, insurance, and everything before departure.",
    icon: FiGlobe,
    bg: "bg-cyan-50",
    iconBg: "bg-cyan-200",
    iconColor: "text-cyan-700",
  },
  {
    title: "IELTS / PTE / TOEFL",
    description:
      "Guidance for selecting the right English proficiency exam and preparation resources.",
    icon: FiEdit3,
    bg: "bg-amber-50",
    iconBg: "bg-amber-200",
    iconColor: "text-amber-700",
  },
  {
    title: "Post Arrival Support",
    description:
      "Continued support after reaching your destination to help you settle comfortably.",
    icon: FiMapPin,
    bg: "bg-indigo-50",
    iconBg: "bg-indigo-200",
    iconColor: "text-indigo-700",
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Our Services
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-5xl">
            Everything You Need for a Successful Study Abroad Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            From choosing the right university to securing your visa, we provide
            complete support at every stage of your international education
            journey.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`${service.bg} group rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl`}
              >
                <div
                  className={`${service.iconBg} flex h-20 w-20 items-center justify-center rounded-[24px]`}
                >
                  <Icon
                    className={`${service.iconColor} text-[34px]`}
                  />
                </div>

                <h3 className="mt-8 text-[25px] font-semibold leading-tight tracking-tight text-neutral-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-[16px] leading-7 text-neutral-700">
                  {service.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 font-semibold text-neutral-900 transition-all duration-300 group-hover:gap-3">
                  Learn More
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}

        <div className="mt-16 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 px-7 py-4 text-[16px] font-medium text-white transition-all duration-300 hover:bg-black"
          >
            View All Services

            <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}