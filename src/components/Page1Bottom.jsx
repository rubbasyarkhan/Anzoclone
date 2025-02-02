import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Page1Bottom = () => {
  useGSAP(function () {
    gsap.to('#banner img', {
      rotate: 360,
      duration: 6,
      repeat: -1,
      ease: "linear"
    });
  });

  return (
    <div className="w-full px-6 py-8 sm:px-8 sm:py-12 absolute bottom-0 left-0 flex items-end justify-between">
      <div className="px-6 sm:px-10">
        <h2 className="text-base sm:text-lg leading-tight font-[anzo4]">
          BRAND DESIGN | WEBSITE DESIGN
        </h2>
        <h3 className="text-sm sm:text-lg leading-tight text-[#9b9b9b] font-[anzo3]">
          BESPOKE FREELANCE
        </h3>
      </div>
      <div id="banner" className="px-4 sm:px-6 flex flex-col items-center sm:flex-row sm:justify-end">
        <img
          className="h-[7vw] sm:h-[5.5vw] mb-3 sm:mb-0"
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png"
          alt=""
        />
        <img
          className="h-[7vw] sm:h-[5.5vw]"
          src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Page1Bottom;
