import React from "react";
import 'remixicon/fonts/remixicon.css';

const Header = () => {
  return (
    <div className="fixed w-full z-10 px-6 sm:px-8 py-4 sm:py-6 flex items-center justify-end">
      <button className="bg-black text-white font-bold px-6 sm:px-10 py-2 font-[anzo] border-[0.3vw] sm:border-[.4vw] rounded-full hover:bg-gray-500 text-sm sm:text-base">
        Hire me
      </button>
      
      <i className="ri-more-2-fill text-2xl sm:text-3xl ml-2 cursor-pointer"></i>
    </div>
  );
};

export default Header;
