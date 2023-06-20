import React from "react";
import { FaUserFriends } from 'react-icons/fa'
import { FiChevronDown } from "react-icons/fi";
import { TbHomePlus } from "react-icons/tb";
const HomeDoctorLookupSevirce = () => {

  return (
    <div className="home-slider">
      <div>
        <h1 className=" mb-[12px] font-bold" style={{ fontSize: '38px' }}>
          Doctor lookup
        </h1>
        <div className="flex">
          <div className=" relative w-[37%]">
            <FaUserFriends className="absolute" style={{ fontSize: '15px', top: '14px', left: '15px', color: '#3A8EF6' }} />
            <input className="h-[45px] w-[100%] rounded-[15px] pl-[40px]" type="text" placeholder="Enter your name" />
          </div>
          <div className=" relative w-[37%] ml-[6%] mr-[7%]">
            <TbHomePlus className="absolute" style={{ fontSize: '15px', top: '14px', left: '15px', color: '#3A8EF6' }} />
            <input className="h-[45px] w-[100%] rounded-[15px] pl-[40px]" type="text" placeholder="Select Medical Speciatlty" />
            <FiChevronDown className="absolute" style={{ fontSize: '22px', top: '12px', left: '88%', color: '#3A8EF6' }} />
          </div>
          <button className="w-[13%] bg-blue-700 h-[45px] rounded-[15px] text-white" style={{ backgroundColor: '#3A8EF6' }}>Find</button>
        </div>
      </div>
    </div>
  );
};

export default HomeDoctorLookupSevirce;
