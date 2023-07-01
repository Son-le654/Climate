import HomeHeaderService from "../module/home/HomeHeaderService";
import AppointmentConfirmationContent from "../module/appointmentConfirmation/AppointmentConfirmationContent";
import Footer from "../module/home/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";

const AppointmentConfirmationPage = () => {
  const navigate = useNavigate();
  const storedName = localStorage.getItem("token");

  useEffect(() => {
    if (storedName == null) {
      navigate("/login-user");
    } else {
      try {
        const decoded = jwtDecode(storedName);
        const role = decoded.roles[0].authority;
        // if (role !== 'USER') {
        //   navigate("/")
        // }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const location = useLocation();
  const appointment = location.state.registers || {};
  console.log(appointment);
  if (appointment == {}) {
    navigate("/book_appointment");
  }

  return (
    <div className="bg-white">
      <div className="bg-white">
        <HomeHeaderService></HomeHeaderService>
      </div>
      <div className="pt-[80px] pl-[190px] text-6xl font-bold py-[20px]">
        <h1>Appointment Confirmation</h1>
      </div>
      <div style={{ padding: "3% 12%" }}>
        <AppointmentConfirmationContent appointment={appointment}></AppointmentConfirmationContent>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default AppointmentConfirmationPage;
