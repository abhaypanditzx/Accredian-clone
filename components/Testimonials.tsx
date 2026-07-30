"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "@/app/testimonials.css"; // <-- create this

import Heading from "./Heading";
import { Container } from "./Container";
import { testimonials } from "@/app/data/testimonials";
import { ChevronRight } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 py-16"
    >
      <Container>
        <Heading
          main1="Testimonials from"
          main2="Our Partners"
          sub0="What"
          sub1="Our Clients"
          sub2="Are Saying"
        />

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
          className="testimonialSwiper mt-14"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" min-h-[270px] h-full rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
                <Image
                  src={item.logo}
                  alt="company"
                  className="h-16 w-auto object-contain"
                />

                <p className="mt-8 text-sm font-semibold leading-8 text-slate-700">
                  "{item.text}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    
  <Container className="mt-16">
    <div className="relative overflow-hidden rounded-3xl bg-blue-500 px-8 py-10 md:px-14 md:py-14">
      {/* circles */}
      <div className="absolute -bottom-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full border border-white/10"></div>
      <div className="absolute -bottom-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full border border-white/10"></div>
      <div className="absolute -bottom-24 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full border border-white/10"></div>

      <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex items-start gap-6">
          <div className="rounded-2xl bg-white p-4">
           <div className="w-full h-full bg-white rounded-xl text-blue-500">
            <svg stroke="currentColor" fill="#007aff" strokeWidth="0" viewBox="0 0 24 24" className="w-full h-full text-universal" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg"><path d="M21 8C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8H21ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path></svg></div>
          </div>

          <div className="">
            <h2 className="text-3xl font-bold text-white ">
              Want to Learn More About Our Training Solutions?
            </h2>

            <p className="mt-3 text-xl text-blue-100">
              Get Expert Guidance for Your Team's Success!
            </p>
          </div>
        </div>

        <button className="bg-white text-blue-500 min-w-38 rounded-md  flex items-center text-lg font-semibold hover:bg-slate-100 px-4 py-2">
          <span>
          Contact Us
          </span>
          <ChevronRight/>
        </button>
      </div>
    </div>
  </Container>

    </section>
  );
}