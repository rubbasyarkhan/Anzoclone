import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page11 = () => {
    const textRef = useRef(null);

    useEffect(() => {

        // Text animation - moves faster
        gsap.to(textRef.current, {
            y: '-100%', // Moves faster than the image
            ease: 'power3.out', // Smooth easing
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1, // Smooth scrub (adjust 1, 2, etc., for slower or faster smoothing)
            },
        });
    }, []);

    return (
        <div className="page11-container relative h-[140vh] overflow-hidden">
            {/* Background Image */}
            <div className="content w-full h-[140vh]">
                <img
                    className="w-full h-[140vh] object-cover"
                    src="https://static.wixstatic.com/media/f1c650_360814da288f418991547fa9d5e08904~mv2.png/v1/fill/w_1895,h_1457,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subtract.png"
                    alt="Background"
                />
            </div>

            {/* Fast-moving Text */}
            <h1
                ref={textRef}
                className="text-[10rem] text-black tracking-wide font-[anzo1] leading-[12rem] absolute right-[5%] top-[50%]"
            >
                HARD
            </h1>
        </div>
    );
};

export default Page11;
