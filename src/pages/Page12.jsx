import React from 'react'
import Page12bottom from '../components/Page12bottom'
import Page12upper from '../components/Page12upper'

const Page12 = () => {
    return (
        <div className="h-screen px-3 py-3 bg-white ">
        <div
          id="page1-in"
          className="relative shadow-lg shadow-gray-400 h-full w-full rounded-[35px] overflow-hidden"
        >
          {/* Video Background */}
          <div className="absolute top-0 left-0 w-full h-full">
            <img className='h-full w-full object-cover' src="https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1857,h_920,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg" alt="" />
          </div>
  
          {/* Overlay Content */}
          <div className="relative z-10 px-16 top-20  h-full flex flex-col justify-start">
            <Page12upper/>
            <Page12bottom />

          </div>
        </div>
      </div>
      )
}

export default Page12