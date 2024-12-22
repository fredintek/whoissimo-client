import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <main className="w-screen flex-1 bg-tunnel-bg bg-center bg-no-repeat">
      <nav className="">
        <div className="container flex justify-center items-center py-4 md:py-6">
          <img
            src="/images/simo-nav-logo.png"
            alt="nav-logo"
            className="block h-[34px] w-[80.75px] md:h-[40px] md:w-[102px] object-cover"
          />
        </div>
      </nav>
      <section className="min-h-[calc(100vh-66px)] md:min-h-[calc(100vh-88px)] pb-6 grid place-items-center">
        <div className="container flex flex-col items-center gap-8">
          {/* 404 */}
          <div className="max-w-[301px] w-full flex justify-between relative">
            <p className="font-bold text-[180px] leading-[130px] text-[#B1B1B1]">
              4
            </p>
            <div className="w-[148.13px] h-[173px] absolute top-[10%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
              <Image
                src="/images/hero-img2.png"
                alt="Hero Image 2"
                className="object-cover rounded-[20px]"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="font-bold text-[180px] leading-[130px] text-[#B1B1B1]">
              4
            </p>
          </div>

          {/* text */}
          <p className="font-medium text-[14px] leading-6 text-center text-[#464646]">
            The page you are looking for isn’t available at the moment
          </p>

          {/* back button */}
          <Link href="/" className="py-3 px-6 bg-[#030303] rounded-[30px]">
            <p className="text-white font-bold leading-6 text-[13px]">
              Go Back Home
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
