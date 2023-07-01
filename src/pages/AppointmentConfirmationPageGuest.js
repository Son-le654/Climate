import HomeHeaderServiceGuest from "../module/home/HomeHeaderServiceGuest";
import AppointmentConfirmationContentGuest from "../module/appointmentConfirmation/AppointmentConfirmationContentGuest";
import Footer from "../module/home/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const AppointmentConfirmationPageGuest = () => {
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState();

  const location = useLocation();
  useEffect(() => {
    const appointment = location?.state?.registers;
    console.log(appointment);
    if (appointment == undefined) {
      navigate("/book_appointment_guest");
    } else {
      setAppointment(appointment);
    }
  }, []);

  return (
    <div className="bg-white">
      <div className="bg-white">
        <HomeHeaderServiceGuest></HomeHeaderServiceGuest>
      </div>
      <div className="pt-[80px] pl-[190px] text-6xl font-bold py-[20px]">
        <h1>Appointment Confirmation</h1>
      </div>
      <div style={{ padding: "3% 12%" }}>
        <AppointmentConfirmationContentGuest
          appointment={appointment}
        ></AppointmentConfirmationContentGuest>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default AppointmentConfirmationPageGuest;
