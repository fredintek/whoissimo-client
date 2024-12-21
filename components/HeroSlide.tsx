"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

type Props = {};

const HeroSlide = (props: Props) => {
  return (
    <>
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
        className="mySwiper w-[100%] md:w-[50%] max-h-[502px] h-full md:bg-white md:rounded-[20px] !py-6 border"
      >
        <SwiperSlide className="md:!px-3">
          <img
            className="w-full h-full object-contain rounded-[8px] md:rounded-none"
            src="/images/hero-img1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="md:!px-3">
          <img
            className="w-full h-full object-contain rounded-[8px] md:rounded-none"
            src="/images/hero-img1.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlide;
