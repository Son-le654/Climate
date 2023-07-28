import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import AppointmentConfirm from "./Content/AppointmentConfirm";
import AppointmentRequested from "./Content/AppointmentRequested";
import React from "react";

function ListOfAppointmentContent() {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(false);

  const handleConfirmedClick = () => {
    setShowA(true);
    setShowB(false);
  };

  const handleRequestedClick = () => {
    setShowA(false);
    setShowB(true);
  };

  return (
    <div className="min-h-[700px] w-[100%] shadow-xl ">
      <div className="w-[100%] h-[100px] flex justify-center">
        <div className="w-[90%]  flex ">
          <div
            className="w-[12%] h-[20px] cursor-pointer"
            onClick={handleConfirmedClick}
            style={{ color: showA ? "#3a8ef6" : "black" }}
          >
            <h1 className="font-bold">Confirmed</h1>
          </div>
          <div
            className="w-[90%] h-[20px] cursor-pointer"
            onClick={handleRequestedClick}
            style={{ color: showB ? "#3a8ef6" : "black" }}
          >
            <h1 className="font-bold">Requested</h1>
          </div>
        </div>
      </div>
      <div>
        {showA && (
          <div>
            <AppointmentConfirm />
          </div>
        )}
        {showB && (
          <div>
            <AppointmentRequested />
          </div>
        )}
      </div>
      <div className="" style={{ textAlign: "center" }}>
        <button className="button text-[30px] w-10 h-10 bg-gradientLeft mr-[30px]">
          {/*  */}
          <MdKeyboardArrowLeft className="ml-[2px]" />
        </button>
        <button className="button text-[30px] w-10 h-10 bg-gradientLeft">
          {/*  */}
          <MdKeyboardArrowRight className="ml-[3px]" />
        </button>
      </div>
    </div>
  );
}
export default ListOfAppointmentContent;
