import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page3 = ({ texts, hideImages }) => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Target all elements with the class `.rotateText`
    gsap.utils.toArray(".rotateText").forEach((el) => {
      gsap.fromTo(
        el,
        { 
          opacity: 0, 
          rotateX: -80 // Start rotated
        },
        {
          opacity: 1, 
          rotateX: 0, // Fade and rotate to normal position
          duration: 1.5,
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // Start when the top of the element hits 80% of the viewport
            end: "top 30%",   // Animation ends at this position
            scrub: true,      // Smooth animation
            markers: false,   // Set to true if you want debugging markers
          },
        }
      );
    });
  });

  return (
    <div id="section2" className="bg-white p-4 text-black text-center">
      <h3 className="text-[#9b9b9b] mt-10 font-[anzo3]">
        © anzo.studio 2024 | designed and developed
      </h3>
      {texts.map((text, index) => (
        <div key={index} className="rotateText">
          <h1 className="text-[41vw] leading-[35rem] font-[anzo1] uppercase">
            {text}
          </h1>
        </div>
      ))}

      {/* Conditional rendering for images */}
      {!hideImages && (
        <div className="responsive-images">
          <div id="pg3section" className="flex items-center justify-center scale-[0.6]">
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="4 0 2028.339 83"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2037 91"
              height="91"
              width="2037"
              data-type="ugc"
              role="img"
              aria-label="Tesla, Figma, Wix Studio, Google+, BeHance monochrome Logo Design by Anzo Studio"
            >
              {/* SVG Content */}
            </svg>
          </div>
        </div>
      )}
      
      
    </div>
  );
};

export default Page3;
