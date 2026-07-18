import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Himg from "@/../public/images/sections/Home/hero.png";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Image - Top on Mobile, Right on Desktop */}
          <div className="order-1 lg:order-2 w-full">
            <div className="flex aspect-square w-full items-center justify-center rounded-2xl sm:aspect-video lg:aspect-square">
              <Image
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
              <button className="rounded-lg bg-red-900 px-6 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-red-800">
                Book Free Consultation
              </button>

              <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm sm:text-base font-semibold text-gray-900 transition hover:border-gray-400">
                Explore Universities
                <ArrowRight className="h-4 w-4" />
              </button>
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

            <div className="mt-10 w-full">
              <p className="text-sm text-gray-400">
                Popular Study Destinations
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-gray-400">
                <span className="text-lg font-semibold">Canada</span>
                <span className="text-lg font-semibold">United Kingdom</span>
                <span className="text-lg font-semibold">Australia</span>
                <span className="text-lg font-semibold">Germany</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}