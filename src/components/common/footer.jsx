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
    <footer className="border-t border-[#E8EAF0] bg-[#FAFAF9]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            {/* Replace with your logo */}
            <Image src={Logo} alt="Logo" className="h-12 w-auto" />

            

            <p className="mt-5 leading-7 text-[#5C6070]">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E5EC] bg-white text-[#1F2430] transition hover:border-[#8B72B8] hover:bg-[#8B72B8] hover:text-white"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#1F2430]">
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
                    className="group inline-flex items-center gap-2 text-[#5C6070] transition hover:text-[#8B72B8]"
                  >
                    <FaArrowRight className="text-[10px] transition group-hover:translate-x-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-[#1F2430]">
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
                    className="group inline-flex items-center gap-2 text-[#5C6070] transition hover:text-[#8B72B8]"
                  >
                    <FaArrowRight className="text-[10px] transition group-hover:translate-x-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-[#1F2430]">
              Contact
            </h4>

            <div className="mt-5 space-y-5">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#8B72B8]" />

                <p className="leading-7 text-[#5C6070]">
                  Your Office Address,
                  <br />
                  City, State, India
                </p>
              </div>

              <a
                href="tel:+911234567890"
                className="flex items-center gap-3 text-[#5C6070] transition hover:text-[#8B72B8]"
              >
                <FaPhoneAlt className="text-[#8B72B8]" />
                +91 12345 67890
              </a>

              <a
                href="mailto:info@example.com"
                className="flex items-center gap-3 text-[#5C6070] transition hover:text-[#8B72B8]"
              >
                <FaEnvelope className="text-[#8B72B8]" />
                info@example.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-[#E8EAF0] pt-8 text-sm text-[#6C7280] md:flex-row">
          <p>
            © {year} Your Company Name. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/privacy-policy"
              className="transition hover:text-[#8B72B8]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-[#8B72B8]"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/sitemap.xml"
              className="transition hover:text-[#8B72B8]"
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