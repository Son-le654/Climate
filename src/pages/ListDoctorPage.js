import React, { useEffect, useState } from "react";
import HomeHeader from "../module/home/HomeHeader";
import Footer from "../module/home/Footer";
import { useLocation, useNavigate } from "react-router";
import HomeHeaderService from "../module/home/HomeHeaderService";
import DoctorContent from "../module/faq/DoctorContent";

const ListDoctor = () => {
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
        <HomeHeaderService></HomeHeaderService>
      </div>
      <div className="pt-[80px] pl-[190px] text-5xl font-bold py-[20px]">
        <h1>List of Doctors</h1>
      </div>
      <div className="w-[100%]" style={{ padding: "0.5% 12.5%" }}>
        <DoctorContent docList={docList}></DoctorContent>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default ListDoctor;
