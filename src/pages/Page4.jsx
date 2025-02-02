import React from 'react';

const Page4 = () => {
  return (
    <div className='h-screen flex relative items-center justify-center bg-white'>
        {/* Image on top of the video, ensuring it stays within bounds */}
        <img 
          className="absolute h-[75vh] z-20 object-contain md:h-[60vh] sm:h-[50vh]" 
          src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1249,h_719,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" 
          alt="Overlay Image" 
        />
        
        {/* Video as background, contained within the image */}
        <video 
          className='h-[65vh] w-[100vw] z-10 object-cover relative md:h-[55vh] sm:h-[45vh] max-w-[75vh]' 
          loop 
          muted 
          autoPlay 
          src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4">
        </video>

        {/* Horizontal lines for decoration */}
        <hr className='h-0.5 w-3/5 top-[40%] bg-black absolute z-0 md:w-4/5 sm:w-[90%]'/>
        <hr className='h-0.5 w-4/5 top-[60%] bg-black absolute z-0 md:w-3/4 sm:w-[80%]'/>
        <hr className='h-0.5 w-full top-[76%] bg-black absolute z-0 md:w-[90%] sm:w-[85%]'/>
    </div>
  );
};

export default Page4;
