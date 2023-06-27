import Background from "../../Images/Rectangle1135.png"
import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaHouseUser } from 'react-icons/fa';
import Avatar from "../../Images/ava1134.png"
import DoctorInfoDetailedInformation from "./doctorinfoContent/DetailedInformation"
import DoctorInfoAssessment from "./doctorinfoContent/Assessment"




const tabButtons = ["DETAILED INFORMATION", "ASSESSMENT"]

function DoctorInformationContent({ children }) {

    const [type, setType] = useState(tabButtons[0])
    const [showComponentC, setShowComponentC] = useState(true);
    const [showComponentD, setShowComponentD] = useState(false);

    const handleClick = (data) => {
        setType(data)
        setShowComponentC(data === tabButtons[0]);
        setShowComponentD(data === tabButtons[1]);
    }

    return (
        <div className="bg-white">
            <div className="w-[77%] h-[220px] ml-[170px] mt-[80px] relative">
                <img src={Background} alt="Background" className="rounded-3xl" />
                <img src={Avatar} alt="Avatar" className="rounded-3xl h-[170px] w-[15%] absolute top-[12%] left-[2%]" />
                <div className="flex absolute top-[15%] left-[20%]">
                    <span className="text-[35px] mt-[6px]"><FaHouseUser /></span>
                    <span className="text-[60px]"><MdKeyboardArrowRight /></span>
                    <span className="font-bold mt-[6px]">Doctor</span>
                    <span className="text-[60px]"><MdKeyboardArrowRight /></span>
                    <span className="font-bold mt-[6px]">Cardiac Catheterization</span>
                </div>
                <div className="absolute top-[40%] left-[20%] ">
                    <h1 className="text-gradientLeft text-4xl font-bold">Dr.Nguyen Thuy Dung</h1>
                </div>
                <div className="flex absolute top-[70%] left-[50%] w-[80%]">
                    <div className="flex mt-[15px] w-[48%]">
                        {tabButtons.map((data, index) => (
                            <div key={index}>
                                <h1
                                    className="text-3xl ml-[20px] cursor-pointer"
                                    style={type === data ? {
                                        color: "#5562f7",
                                        textUnderlineOffset: '#3681f8'
                                    } : {}
                                    }
                                    onClick={() => handleClick(data)}
                                >
                                    {data}
                                </h1>
                            </div>
                        ))}
                    </div>
                    <div className="w-[30%]">
                        <button className="bg-gradientLeft h-[50px] w-[120px] rounded-3xl text-secondary">
                            Book
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {showComponentC && <DoctorInfoDetailedInformation />}
                {showComponentD && <DoctorInfoAssessment />}
            </div>
        </div>
    )
}
export default DoctorInformationContent