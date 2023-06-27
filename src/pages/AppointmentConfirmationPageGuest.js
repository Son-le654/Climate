import HomeHeaderServiceGuest from "../module/home/HomeHeaderServiceGuest";
import AppointmentConfirmationContentGuest from "../module/appointmentConfirmation/AppointmentConfirmationContentGuest";
import Footer from "../module/home/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";

const AppointmentConfirmationPageGuest = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const appointment = location.state.registers || {};
  console.log(appointment);
  if (appointment == {}) {
    navigate("/book_appointment_guest");
  }

  return (
    <div className="bg-white">
      <div className="bg-white">
        <HomeHeaderServiceGuest></HomeHeaderServiceGuest>
      </div>
      <div className="pt-[80px] pl-[190px] text-6xl font-bold py-[20px]">
        <h1>Appointment Confirmation</h1>
      </div>
      <div style={{ padding: "3% 12%" }}>
        <AppointmentConfirmationContentGuest appointment = {appointment}></AppointmentConfirmationContentGuest>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default AppointmentConfirmationPageGuest;
