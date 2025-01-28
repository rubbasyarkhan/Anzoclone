import React from "react";
import Page6text from "../components/Page6text";
import Page6Bottom from "../components/Page6Bottom";

const Page6 = () => {
  return (
    <div className="h-screen px-3 py-3 bg-white">
      <div
        id="page1-in"
        className="relative shadow-lg shadow-gray-400 h-full w-full rounded-[35px] overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover grayscale"
            src="https://videos.pexels.com/video-files/11978357/11978357-hd_1280_720_24fps.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 px-16 top-20  h-full flex flex-col justify-start">
          <Page6text />
          <Page6Bottom/>
        </div>
      </div>
    </div>
  );
};

export default Page6;
