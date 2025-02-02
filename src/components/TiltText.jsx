import React from "react";

const TiltText = (props) => {
  return (
    <div id="tiltDiv" ref={props.abc} className="px-4 py-6 mt-[10vw] sm:mt-[5vw] md:mt-[3vw] lg:mt-[2vw]">
      <h1 className="text-[6vw] sm:text-[5vw] md:text-[4.2vw] lg:text-[3.5vw] leading-[5vw] sm:leading-[4.5vw] md:leading-[4vw] lg:leading-[3.5vw] font-[anzo2]">
        I AM <span className="text-black">DARK MODE</span>™
      </h1>
      <h1 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[5.5vw] leading-[9vw] sm:leading-[7vw] md:leading-[6vw] lg:leading-[5vw] font-[anzo2]">
        DESIGNER
      </h1>
      <h1 className="text-[6vw] sm:text-[5vw] md:text-[4.2vw] lg:text-[3.5vw] leading-[5vw] sm:leading-[4.5vw] md:leading-[4vw] lg:leading-[3.5vw] font-[anzo2]">
        TO HIRE
      </h1>
    </div>
  );
};

export default TiltText;
