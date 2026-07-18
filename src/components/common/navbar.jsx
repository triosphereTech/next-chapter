"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/../public/images/brand/Logo.png";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Insights", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* ================= Desktop Navbar ================= */}

      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-gray-200 bg-white/90 backdrop-blur-xl shadow-sm"
            : "bg-white"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}

          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              priority
              className="h-11 w-auto object-contain"
            />
          </Link>

          {/* Center Menu */}

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-[15px] font-medium tracking-wide text-gray-700 transition-all duration-300 hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800"
            >
              Contact Us
              <FiArrowUpRight className="text-lg" />
            </Link>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden"
            aria-label="Open Menu"
          >
            <HiOutlineMenuAlt3 className="text-[34px]" />
          </button>
        </div>
      </header>

      {/* ================= Mobile Fullscreen Menu ================= */}

      <div
        className={`fixed inset-0 z-[999] bg-white transition-all duration-500 ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-8 py-8">
          {/* Top */}

          <div className="flex items-center justify-between">
            <Image
              src={Logo}
              alt="Logo"
              className="h-10 w-auto"
            />

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <IoClose className="text-[38px]" />
            </button>
          </div>

          {/* Menus */}

          <div className="mt-20 flex flex-1 flex-col justify-center">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between border-b border-gray-200 py-6 text-[30px] font-medium tracking-tight text-gray-900 transition-all duration-300 hover:pl-4"
                style={{
                  transitionDelay: `${index * 40}ms`,
                }}
              >
                {item.name}

                <FiArrowUpRight className="translate-x-3 text-2xl opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          {/* CTA */}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex h-14 items-center justify-center rounded-full bg-black text-base font-medium text-white transition-all duration-300 hover:bg-neutral-800"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;