import HomeHeaderService from "../module/home/HomeHeaderService";
import DoctorInformationContent from "../module/doctorinformation/DoctorInformationContent";
import Footer from "../module/home/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { localPort, publicPort } from "../components/url/link";

function DoctorInformation() {
  
useEffect(() =>{

    console.log("Enter Doctorconfirm");
}, [])

  return (
    <div className="bg-white">
      <div className="bg-white">
        <HomeHeaderService></HomeHeaderService>
      </div>
      <div className="bg-white">
        <DoctorInformationContent/>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default DoctorInformation;
