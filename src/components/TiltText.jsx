import React from "react";

const TiltText = (props) => {
  return (
    <div id="tiltDiv" ref={props.abc} className="px-4 py-6 mt-[10vw] ">
      <h1 className="text-[4.2vw] leading-[4vw] font-[anzo2] ">
        I AM <span className="text-black ">DARK MODE</span>™
      </h1>
      <h1 className="text-[8vw] leading-[7vw] font-[anzo2] ">DESIGNER</h1>
      <h1 className="text-[4.2vw] leading-[4vw] font-[anzo2] ">TO HIRE</h1>
    </div>
  );
};

export default TiltText;
