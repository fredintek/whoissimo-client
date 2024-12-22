"use client";
import React, { useState } from "react";
import HeroSlide from "@/components/HeroSlide";
import { YoutubeFilled } from "@ant-design/icons";
import Link from "next/link";

export default function Home() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <main className="w-screen flex-1 bg-tunnel-bg bg-center bg-no-repeat relative">
      {/* ABOUT SIMO VIDEO */}
      {openVideo && (
        <div
          onClick={() => setOpenVideo(false)}
          className="absolute top-0 left-0 w-full h-full z-30 backdrop-blur-sm bg-black/20 px-4 grid place-items-center"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="max-w-[600px] w-full h-[400px] md:h-[646px] relative z-40"
          >
            <video
              className="absolute top-0 left-0 w-full h-full object-fill rounded-[20px]"
              autoPlay
              loop
            >
              <source src="/videos/about-simo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <nav className="">
        <div className="container flex justify-center items-center py-4 md:py-6">
          <img
            src="/images/simo-nav-logo.png"
            alt="nav-logo"
            className="block h-[34px] w-[80.75px] md:h-[40px] md:w-[102px] object-contain"
          />
        </div>
      </nav>
      <section className="min-h-[calc(100vh-66px)] md:min-h-[calc(100vh-88px)] pb-6">
        <div className="container flex flex-col-reverse md:flex-row gap-4 h-full md:h-[646px] md:rounded-[50px] md:bg-hero-bg md:bg-no-repeat md:bg-center md:px-5 md:py-[40px] md:items-center">
          {/* LEFT */}
          <div className="md:flex-1 flex flex-col md:justify-center">
            <div>
              <h1 className="text-[24px] text-[##222222] md:text-white md:text-[32px] font-bold leading-10">
                Dear VALUED guest,
              </h1>
              <p className="text-[#996A13] text-[14px] leading-6 md:text-[#FFFAF1] md:text-[16px] mb-3 md:mb-6">
                • HOUSE OF SIMO IS TEMPORARILY CLOSED
              </p>

              <p className="text-[#222222] text-[14px] md:text-[18px] md:text-white leading-6 mb-4 md:mb-8">
                The House of SIMO is currently undergoing a temporary closure.
                We are dedicated to enhancing our galleries, creating an abode
                that inspires, ignites curiosity, and reveals new perspectives.
                Soon, we will reopen our doors, inviting you into a realm of
                inner light and harmony, where we will present to you the finest
                expressions of elegance and elevated luxury.
              </p>
              <p className="text-[#222222] text-[14px] md:text-[18px] md:text-white leading-6 flex flex-col gap-1 mb-6 md:mb-8">
                <span>With the Whisper of Eternity,</span>
                <span className="font-swashBreakTrial text-[#464646] md:text-[#FDFDFD]">
                  House of SIMO
                </span>
              </p>
            </div>
            <div className="flex flex-row gap-4 max-[408px]:flex-col">
              <Link
                href="mailto:Okorosimon11@yahoo.com?subject=Contact%20SIMO&body=Hello%20SIMO,"
                className="py-4 px-6 bg-[#030303] text-white md:bg-[#FDFDFD] md:text-black text-[16px] leading-6 font-bold rounded-[10px] flex-1 flex justify-center items-center"
              >
                <p className="">Contact SIMO</p>
              </Link>
              <button
                onClick={() => setOpenVideo(true)}
                className="py-4 px-6 text-[#030303] border-[#030303] bg-transparent border-2 md:border-[#FDFDFD] md:text-white text-[16px] leading-6 font-bold rounded-[10px] flex-1 flex items-center gap-2 justify-center"
              >
                <YoutubeFilled className="text-2xl" />
                <p className="">About SIMO</p>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <HeroSlide />
        </div>
      </section>
    </main>
  );
}
