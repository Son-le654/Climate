import React, { useEffect } from "react";
import HomeHeader from "../module/home/HomeHeader";
import FaqContent from "../module/faq/FaqContent";
import Footer from "../module/home/Footer";

const About = () => {
    return (
        <div className="bg-white w-[100%]">
            <div className="bg-white">
                <HomeHeader></HomeHeader>
            </div>
            <div className="pt-[80px] pl-[190px] text-5xl font-bold py-[20px]">
                <h1>
                    List of Doctors
                </h1>
            </div>
            <div className="w-[100%]" style={{ padding: "0.5% 12.5%" }} >
                <FaqContent></FaqContent>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default About    