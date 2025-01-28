import React from 'react';
import Page5Bottom from '../components/Page5Bottom';

const Page5 = () => {
    return (
        <div className="h-screen px-3 py-3 bg-white">
            <div
                id="page1-in"
                className="relative shadow-lg shadow-gray-400 h-full w-full rounded-[35px] overflow-hidden"
            >
                {/* Video Background */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4"
                    autoPlay
                    loop
                    muted
                ></video>

                {/* Overlay Content */}
                <div className="relative z-10 px-10 py-10 h-full">
                    <Page5Bottom />
                </div>

                {/* Overlay for darker effect (optional) */}
            </div>
        </div>
    );
};

export default Page5;