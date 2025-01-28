import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Page8text = () => {
    useEffect(() => {
        // Animate img1: spin
        gsap.to('.img1', {
            rotate: 360,
            duration: 5,
            repeat: -1,
            ease: "linear"
        });

        // Animate img2: rotate back and forth
        gsap.to('.img2', {
            rotationY: 360, // Rotate 20 degrees
            duration: 2,
            repeat: -1, // Infinite loop
            ease: 'linear',
        });

        // Animate img3: bounce a little
        gsap.to('.img3', {
            y: -10, // Move up 10px
            duration: 2,
            repeat: -1, // Infinite loop
            ease: 'Poewer4.inOut',
        });
        gsap.to('.arrow',{
            rotate: 360,
            duration: 3,
            repeat: -1,
            ease: "linear"
        })

    }, []);

    return (
        <>
            <div className='w-full flex flex-row justify-between'>
                <div>
                    <h1 className='text-[15.5rem] tracking-wide font-[anzo1] leading-[12rem] text-[#9b9b9b]'>HOW</h1>
                    <h1 className='text-[15.5rem] tracking-wide font-[anzo1] leading-[12rem]'>CAN</h1>
                </div>
                <div className='flex flex-col items-end'>
                    <h1 className='text-[15.5rem] tracking-wide font-[anzo1] leading-[12rem]'>I HELP</h1>
                    <h1 className='text-[15.5rem] tracking-wide font-[anzo1] leading-[12rem]'>YOU</h1>
                </div>
            </div>

            <div className='w-full flex mt-10'>
                <div className='paradiv w-full flex justify-between items-top font-[anzo2] leading-[1.3rem] text-lg'>
                    <div className='para w-[30%]'>
                        <p className='text-[#9b9b9b]'>
                            I am a self-taught web and brand designer with a passion for creating unique and timeless
                            <span className='text-[#ffff]'> masterpieces for ambitious professionals, entrepreneurs, artists, and boutique businesses.</span>
                        </p>
                        <div className='flex items-center justify-between'>
                            <h3 className='mt-5'>Bespoke Freelance for agencies</h3>
                            <div className='w-[2rem] h-[2rem] mt-5 bg-[#ffff] rounded-full flex items-center justify-center'>
                                <i className="ri-arrow-left-line arrow text-2xl text-black"></i>
                            </div>
                        </div>
                    </div>
                    <div className='para w-[30%]'>
                        <p className='text-[#9b9b9b]'>
                            With a background in strategic marketing and acknowledged expertise in web development,
                            <span className='text-[#ffff]'>
                                I aim to minimize my client's resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency.
                            </span>
                        </p>
                    </div>
                    <div className='para w-[30%]'>
                        <p>
                            My mission is to drive exceptional growth for my clients by increasing their brand appearance,
                            <span className='text-[#9b9b9b]'> defining their identity, and engaging customers through captivating black-and-white aesthetics with a modern, luxurious, and minimalistic touch.</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full flex mt-10'>
                <div className='paradiv w-full flex justify-between font-[anzo2] leading-[1.3rem] text-lg'>
                    <div className='para w-[30%] flex items-center gap-5'>
                        <div className='w-16 h-16'>
                            <img className='img1 w-full h-full' src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_86,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SUN.png" alt="" />
                        </div>
                        <div className='flex gap-2 mt-5'>
                            <h1 className='text-[4rem] font-[anzo1]'>DESIGN</h1>
                            <div className='mt-2'>
                                <h1 className='top-5'>01</h1>
                            </div>
                        </div>
                    </div>
                    <div className='para w-[30%] flex items-center gap-5'>
                        <div className='w-16 h-16'>
                            <img className='img2 w-full h-full' src="https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EARTH.png" alt="" />
                        </div>
                        <div className='flex gap-2 mt-5'>
                            <h1 className='text-[4rem] font-[anzo1]'>DEVELOPMENT</h1>
                            <div className='mt-2'>
                                <h1 className='top-5'>02</h1>
                            </div>
                        </div>
                    </div>
                    <div className='para w-[30%] flex items-center gap-5'>
                        <div className='w-16 h-16'>
                            <img className='img3 w-full h-full' src="https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_83,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/START%20UP.png" alt="" />
                        </div>
                        <div className='flex gap-2 mt-5'>
                            <h1 className='text-[4rem] font-[anzo1]'>BRANDING</h1>
                            <div className='mt-2'>
                                <h1 className='top-5'>03</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lasttext w-full mt-10 flex items-center justify-between '>
                <div className='font-[anzo3] ' >
                    <h1 className='text-[#9b9b9b] ' >GOT A PROJECT? <br />THEN PLEASE
                        <span className='text-[#fff] font-[anzo2] '>  CONTACT ME </span>
                    </h1>
                </div>
                <div className='w-[2rem] h-[2rem]  bg-[#ffff] rounded-full flex items-center justify-center'>
                    <i className="ri-arrow-left-line arrow text-2xl  text-black"></i>
                </div>

            </div>
        </>
    );
};

export default Page8text;
