import React, { useRef, useState } from "react";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xval, setXval] = useState(0);
  const [yval, setYval] = useState(0);

  const mousemoving = (e) => {
    setXval(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        30
    );
    setYval(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 10
    );
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yval}deg) rotateY(${xval}deg)`,
        stagger: true,
        ease: "Power4.in",
      });
    },
    [xval, yval]
  );

  return (
    <div
      onMouseMove={(e) => {
        mousemoving(e);
      }}
      className="h-screen px-4 py-4 bg-white"
    >
      <div
        id="page1-in"
        className="shadow-lg shadow-gray-400 h-full w-full bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2234,h_1128,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] bg-center bg-cover px-6 py-6 rounded-[35px] sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12 xl:px-14 xl:py-14"
      >
        <img
          className="h-16 ml-6 mb-4 sm:h-20 md:h-24 xl:h-28"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
          alt=""
        />
        <TiltText abc={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
