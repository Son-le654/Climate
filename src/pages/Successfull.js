import HomeHeaderService from "../module/home/HomeHeaderService";
import Footer from "../module/home/Footer";
import SuccessfullContent from "../module/SuccessFull/SuccessfullContent";
import jwtDecode from "jwt-decode";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeHeaderServiceDoctor from "module/home/HomeHeaderServiceDoctor";
import HomeHeaderServiceNurse from "module/home/HomeHeaderServiceNurse";

function EditProfile() {
  return (
    <div className="w-[100%] min-h-[1000px] bg-white ">
      <div className="w-[100%] flex justify-center">
        <div className="w-[80%] min-h-[1000px] bg-white">
          <div className="bg-white h-[200px]">
            <HomeHeaderService></HomeHeaderService>
          </div>
          <div className="bg-white">
            <SuccessfullContent />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <Footer />
      </div>

    </div>
  );
}
export default EditProfile;