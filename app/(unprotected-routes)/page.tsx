import React from "react";
import HeroSlide from "@/components/HeroSlide";

export default function Home() {
  return (
    <main className="w-screen flex-1">
      <nav className="">
        <div className="container flex justify-center items-center py-4 md:py-6">
          <img
            src="/images/simo-nav-logo.png"
            alt="nav-logo"
            className="block h-[34px] w-[80.75px] md:h-[40px] md:w-[102px] object-cover"
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
            <button className="py-4 px-6 bg-[#030303] text-white md:bg-[#FDFDFD] md:text-black text-[16px] leading-6 font-bold uppercase rounded-[10px] md:w-fit">
              <p>Contact the artist</p>
            </button>
          </div>

          {/* RIGHT */}
          <HeroSlide />
        </div>
      </section>
    </main>
  );
}
