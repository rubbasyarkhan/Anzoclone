import React from "react";
import "./index.css";
import Page1 from "./pages/Page1";
import Page3 from "./pages/Page3";
import Header from "./components/Header";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page8 from "./pages/Page8";
import Page7 from "./pages/Page7";
import Page9 from "./pages/Page9";
import Page10 from "./pages/Page10";
import Page11 from "./pages/Page11";
import Page12 from "./pages/Page12";

const App = () => {
  const section3Texts = ["IMPACTFUL", "DESIGN", "IS THE", "DESIGN", "THAT", "WORKS!"];
  const section7Texts = ["CREATIVE", "SOLUTIONS", "FOR", "YOUR", "BUSINESS", "NEEDS"];

  const firstSection7Texts = [
    { title: "PERSONAL", subtitle: "Intuition, Imagination, Discipline" },
    { title: "PROFESSIONAL", subtitle: "Time Management, Multitasking, Creativity" },
    { title: "ADDITIONAL", subtitle: "3D, Animation, AI Tools" },
  ];

  const secondSection7Texts = [
    { title: "LEADERSHIP", subtitle: "Honesty, Communication, Punctuality" },
    { title: "TEAMWORK", subtitle: "Photoshop, Wix Studio, Figma" },
    { title: "INNOVATION", subtitle: "Business Development, Branding, SEO" },
  ];
  return (
    <div>
      <Header />
      <Page1 />
      <Page3 texts={section3Texts} />
      <Page4 />
      <Page6 />
      <Page3 texts={section7Texts} hideImages={true} />
      <Page5 />
      <Page11/>
      <Page8 />
      <Page7 sections={firstSection7Texts} videosrc="https://video.wixstatic.com/video/11062b_fc7c8b8125a94b69ad7cad3b24a8093a/480p/mp4/file.mp4" />
      <Page9 />
      <Page7 sections={secondSection7Texts} videosrc="https://video.wixstatic.com/video/11062b_cb0c4d13153f4008920bb26beda8de0f/720p/mp4/file.mp4" />
      <Page10 />
      <Page12/>
    </div>
  );
};

export default App;
