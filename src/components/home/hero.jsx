import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Himg from "@/../public/images/sections/Home/heroo.png";
import Link from "next/link";

const marqueeItems = [
  "Student Visa",
  "IELTS Coaching",
  "PTE Coaching",
  "Visitor Visa",
  "Career Counselling",
];

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Image - Top on Mobile, Right on Desktop */}
          <div className="order-1 lg:order-2 w-full">
            <div className="flex aspect-square w-full items-center justify-center rounded-2xl sm:aspect-video lg:aspect-square">
              <Image
              alt="image"
              src={Himg}
              className="h-auto w-auto rounded-b-4xl object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-bold tracking-wide text-red-900">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              TRUSTED OVERSEAS EDUCATION CONSULTANTS
            </span>

            <h1 className="mt-5 text-4xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] text-gray-900">
              Your Gateway  
              <br />
              to <span className="italic text-red-800">Global Education</span>
            </h1>

            <p className="mt-5 max-w-md text-base sm:text-lg text-gray-500">
              From choosing the right university to securing your student visa,
              our expert counselors guide you through every step of your
              international education journey with confidence.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="rounded-lg bg-red-900 px-6 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-red-800">
                Book Free Consultation
              </Link>

              <Link href="/service" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm sm:text-base font-semibold text-gray-900 transition hover:border-gray-400">
                Explore Universities
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <div className="flex -space-x-3">
                <div className="h-9 w-9 rounded-full border-2 border-white bg-gray-300" />
                <div className="h-9 w-9 rounded-full border-2 border-white bg-gray-400" />
                <div className="h-9 w-9 rounded-full border-2 border-white bg-gray-300" />
              </div>

              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="text-sm font-bold text-gray-900">4.9</span>
                <span className="text-sm text-gray-400">(1,000+ Students)</span>
              </div>
            </div>

            {/* <div className="mt-10 w-full">
              <p className="text-sm text-gray-400">
                Popular Study Destinations
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-gray-400">
                <span className="text-lg font-semibold">Canada</span>
                <span className="text-lg font-semibold">United Kingdom</span>
                <span className="text-lg font-semibold">Australia</span>
                <span className="text-lg font-semibold">Germany</span>
              </div>
            </div> */}
          </div>

        </div>
      </div>

      {/* Scrolling Marquee Stripe - blends with hero image bottom */}
      <div className="relative w-full overflow-hidden bg-red-900 py-3 sm:py-4 -mt-6 sm:-mt-10 lg:-mt-14">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dupe) => (
            <div key={dupe} className="flex shrink-0 items-center">
              {marqueeItems.map((item, idx) => (
                <span
                  key={`${dupe}-${idx}`}
                  className="flex items-center whitespace-nowrap px-4 sm:px-6"
                >
                  <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                    {item}
                  </span>
                  <span
                    aria-hidden="true"
                    className="ml-4 sm:ml-6 text-xl sm:text-2xl text-white"
                  >
                    ✳
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}