import React, { useEffect, useState } from "react";
import HomeHeader from "../module/home/HomeHeader";
import FaqContent from "../module/faq/FaqContent";
import Footer from "../module/home/Footer";
import { useLocation, useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [docList, setDocList] = useState([]);
  console.log("list doctor" + location.state);

  useEffect(() => {
    console.log("list doctor" + location.state);
    if (location.state != null) {
      setDocList(location.state.docList);
    } else {
      navigate("/service");
    }
  }, []);

  return (
    <div className="bg-white w-[100%]">
      <div className="bg-white">
        <HomeHeader></HomeHeader>
      </div>
      <div className="pt-[80px] pl-[190px] text-5xl font-bold py-[20px]">
        <h1>List of Doctors</h1>
      </div>
      <div className="w-[100%]" style={{ padding: "0.5% 12.5%" }}>
        <FaqContent docList={docList}></FaqContent>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default About;
