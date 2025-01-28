import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Page7text = ({ sections }) => {
    useEffect(() => {
        // Register the GSAP ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Animate both h1 and h3 elements
        gsap.fromTo(
            ".text-section h1, .text-section h3", // Valid combined selector
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.in",
                stagger: 0.2, // Stagger animation for sequential appearance
                scrollTrigger: {
                    trigger: ".text-section",
                    start: "top 50%", // Trigger when section is 80% visible
                    scrub: false, // Remove scrub for smoother stagger
                },
            }
        );
    }, []); // Dependency array ensures the effect runs only once

    return (
        <div className="h-full text-section gap-14 mt-2 flex flex-col">
            {sections.map((section, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                    <h1 className="font-[anzo1] text-[9.5rem] leading-[7rem] tracking-wide">
                        {section.title}
                    </h1>
                    <h3 className="font-[anzo2] text-[1rem] leading-[2rem] text-[#9B9B9B] tracking-wide">
                        {section.subtitle}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default Page7text;
