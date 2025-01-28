import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Page12upper = () => {
    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Animate text opacity
        gsap.fromTo(
            ".text-section h1",
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.in",
                scrub:true,
                stagger: 0.111,
                scrollTrigger: {
                    trigger: ".text-section",
                    start: "top 80%", // Trigger when the section is 75% visible
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Animate border height
        gsap.fromTo(
            ".border-divider",
            { height: 0 },
            {
                height: "6rem",
                duration: 1,
                ease: "power4.inout",
                scrollTrigger: {
                    trigger: ".text-section",
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Rotate the image infinitely
        gsap.to(".img1", {
            rotate: 360,
            duration: 5,
            repeat: -1,
            ease: "linear",
        });
    }, []);

    return (
        <div className="text-section flex flex-row items-end">
            <div className="w-[80%]">
                <h1 className="text-[15.5rem] tracking-wide font-[anzo1] leading-[12rem] text-[#ffff]">
                    GOT <span className="text-[#9b9b9b]">AN</span>
                </h1>
                <h1 className="text-[15.5rem] tracking-wide font-[anzo1] leading-[12rem]">IDEA</h1>
            </div>
            <div className="w-[100%] flex py-6 items-center gap-8">
                <div className="w-[14%]">
                    <img
                        className="w-full h-full img1"
                        src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_128,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/World%20Contact.png"
                        alt=""
                    />
                </div>
                <div className="border-divider border-l-2 border-[#ffff] h-[6rem]"></div>
                <div className="px-4">
                    <h3 className="leading-5 font-[anzo3] text-[#9b9b9b]">WORLD SERVICE</h3>
                    <h3 className="leading-5 font-[anzo2]">I CAN COME TO WHEREVER YOU ARE.</h3>
                    <h3 className="leading-5 font-[anzo3] text-[#9b9b9b]">033-545555400</h3>
                </div>
            </div>
        </div>
    );
};

export default Page12upper;
