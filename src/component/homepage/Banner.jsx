
import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto bg-[#15171D] px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

        <div className="my-2">
          <p className="font-bold text-[11px] text-[#C2F800]">
            WORKOUT LIBRARY
          </p>

          <h2 className="mt-2 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-[60px]">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h2>

          <p className="mt-4 text-[11px] font-normal leading-5 text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            <br className="hidden md:block" />
            into todays plan, and watch the weeks work add up.
          </p>

          <button className="btn mt-5 bg-[#C2F800] text-black hover:bg-[#b5e800]">
            BROWSE WORKOUTS
          </button>
        </div>

        <div className="w-full max-w-[600px]">
          <Image
            src={bannerImg}
            alt="FitLog Banner"
            width={600}
            height={500}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;