import React from 'react'
import Page8text from "../components/Page8text";
// import Page6Bottom from "../components/Page6Bottom";
const Page8 = () => {
  return (
    <div className="h-[140vh] px-3 py-3 bg-white">
    <div
      id="page1-in"
      className="relative shadow-lg shadow-gray-400 h-full w-full rounded-[35px] overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full grayscale ">
        <img
          className=" w-full h-full object-cover   grayscale"
          src="https://c4.wallpaperflare.com/wallpaper/694/111/775/digital-art-low-poly-monochrome-abstract-wallpaper-preview.jpg"
        //   src="https://w0.peakpx.com/wallpaper/732/510/HD-wallpaper-triangles-squares-black-bumps-grungy.jpg"
          
        /> 
        
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 px-16 top-12  h-full flex flex-col justify-start">
        <Page8text />
      </div>
    </div>
  </div>
  )
}

export default Page8