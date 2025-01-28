import React from 'react';
import Page7text from '../components/Page7text';

const Page7 = ({ sections , videosrc}) => {
    return (
        <div className="h-screen px-3 py-3 bg-white">
            <div
                id="page1-in"
                className="relative shadow-lg shadow-gray-400 h-full w-full rounded-[35px] overflow-hidden"
            >
                {/* Video Background */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={videosrc}
                    autoPlay
                    loop
                    muted
                ></video>

                {/* Overlay Content */}
                <div className="relative z-10 px-10 py-10 h-full">
                    <Page7text sections={sections} />
                </div>
            </div>
        </div>
    );
};

export default Page7;
 