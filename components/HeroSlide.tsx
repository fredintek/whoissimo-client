"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

type Props = {};

const heroSlides = [
  {
    src: "/images/hero-img1.png",
    alt: "hero-img1",
  },
  {
    src: "/images/hero-img2.png",
    alt: "hero-img2",
  },
  {
    src: "/images/hero-img3.png",
    alt: "hero-img3",
  },
];

const HeroSlide = (props: Props) => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper w-[100%] md:w-[50%] h-[400px] md:h-full md:bg-white md:rounded-[20px] !py-6"
    >
      {heroSlides.map((slide, index) => (
        <SwiperSlide key={index} className="md:!px-6">
          <div className="relative w-full h-full">
            <Image
              src={slide.src}
              alt={slide.alt}
              className="rounded-[8px] md:rounded-[20px]"
              fill
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlide;
