import React, { useEffect } from "react";
import HomeHeader from "../module/home/HomeHeader";
import AboutContent from "../module/about/AboutContent";
import Footer from "../module/home/Footer";

const About = () => {
  return (
    <div className="bg-white">
      <div className="bg-white">
        <HomeHeader></HomeHeader>
      </div>
      <div className="pt-[80px] pl-[190px] text-7xl font-bold py-[20px]">
        <h1>Clinicmate Private Clinic</h1>
      </div>
      <div style={{ padding: "5% 12%" }}>
        <AboutContent></AboutContent>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default About;
