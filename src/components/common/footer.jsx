"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

import Logo from "@/../public/images/brand/Logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#9A2A37] bg-[#84212E]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            {/* Replace with your logo */}
            <Image src={Logo} alt="Logo" className="h-12 w-auto brightness-0 invert" />

            

            <p className="mt-5 leading-7 text-white/70">
              Helping students achieve their global education goals
              through expert counselling, university admissions,
              scholarship guidance, and visa assistance.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                FaFacebookF,
                FaInstagram,
                FaLinkedinIn,
                FaYoutube,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 hover:bg-[#D3AF5F] hover:border-[#D3AF5F] hover:text-[#84212E]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3">
              {[
                "Home",
                "About Us",
                "Services",
                "Study Destinations",
                "Success Stories",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group inline-flex items-center gap-2 text-white/70 transition hover:text-[#D3AF5F]"
                  >
                    <FaArrowRight className="text-[10px] text-[#D3AF5F] transition group-hover:translate-x-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Our Services
            </h4>

            <ul className="mt-5 space-y-3">
              {[
                "Career Counselling",
                "University Admissions",
                "Visa Assistance",
                "Scholarship Guidance",
                "Education Loans",
                "Accommodation Support",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group inline-flex items-center gap-2 text-white/70 transition hover:text-[#D3AF5F]"
                  >
                    <FaArrowRight className="text-[10px] text-[#D3AF5F] transition group-hover:translate-x-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Contact
            </h4>

            <div className="mt-5 space-y-5">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#D3AF5F]" />

                <p className="leading-7 text-white/70">
                  Your Office Address,
                  <br />
                  City, State, India
                </p>
              </div>

              <a
                href="tel:+911234567890"
                className="flex items-center gap-3 text-white/70 transition hover:text-[#D3AF5F]"
              >
                <FaPhoneAlt className="text-[#D3AF5F]" />
                +91 12345 67890
              </a>

              <a
                href="mailto:info@example.com"
                className="flex items-center gap-3 text-white/70 transition hover:text-[#D3AF5F]"
              >
                <FaEnvelope className="text-[#D3AF5F]" />
                info@example.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-white border-white/60 md:flex-row">
          <p>
            © {year} Your Company Name. All Rights Reserved.
          </p>

          <div className="flex flex-wrap text-white justify-center gap-6">
            <Link
              href="/privacy-policy"
              className="transition hover:text-[#D3AF5F]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-[#D3AF5F]"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/sitemap.xml"
              className="transition hover:text-[#D3AF5F]"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;