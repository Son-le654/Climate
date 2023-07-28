import Footer from "module/home/Footer";
import HomeHeaderService from "module/home/HomeHeaderService";
import ListOfAppointmentContent from "module/ListofAppointmentContent/ListOfAppointmentContent";
import React from "react";

function ListOfAppointment() {
  return (
    <div className="w-[100%] min-h-[1000px] bg-white flex justify-center">
      <div className="w-[80%] min-h-[1000px] bg-white">
        <div className="bg-white">
          <HomeHeaderService />
        </div>
        <div className="w-[100%] h-[100px] flex items-center">
          <h1 className="text-[40px] font-bold"> List of Appointments</h1>
        </div>
        <div className="bg-white">
          <ListOfAppointmentContent />
        </div>
        <div className="bg-white">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ListOfAppointment;
