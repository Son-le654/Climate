import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import HomeContent from "./module/home/HomeContent";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import BAContent from "./module/bookAppointment/BAContent";
import LoginPageUser from "./pages/LoginPageUser";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import DoctorInformation from "./pages/DoctorInformation";
import VerifyRegister from "./pages/VerifyRegister";
import Service from "./pages/ServicePage";
import Appointments from "./pages/AppointmentsPage";
import AppointmentConfirmation from "./pages/AppointmentConfirmationPage";
import About from "./pages/About";
import FAQ from "./pages/FaqPage";
import SampleDateSort from "./SampleDateSort";
import axios from "axios";
import BAContentGuest from "./module/bookAppointment/BAContentGuest";
import BookAppointmentPageGuest from "./pages/BookAppointmentPageGuest";
import AppointmentConfirmationPageGuest from "./pages/AppointmentConfirmationPageGuest";
import DoctorInformationStaff from "../src/pages/staff/DoctorInformationStaff";
import RegisterEnterEmail from "../src/pages/forgotpassword/RegisterEnterEmail";
import RegisterLoginPassword from "../src/pages/forgotpassword/RegisterLoginPassword";
import VerifyRegisterForgot from "../src/pages/forgotpassword/VerifyRegisterForgot";
import ChooseNewPassword from "../src/pages/forgotpassword/ChooseNewPassword";


function App() {
  const storedName = localStorage.getItem("token");
  console.log("in app.js");

  useEffect(() => {
    if (storedName !== null) {
      try {
        const decoded = jwtDecode(storedName);
        const expiredAt = decoded.exp;
        if (expiredAt < Date.now() / 1000) {
          localStorage.removeItem("token");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  return (
    <Routes>
      <Route element={<HomePage />}>
        <Route path="/" element={<HomeContent />}></Route>
      </Route>
      <Route element={<BookAppointmentPage />}>
        <Route
          path="/book_appointment"
          element={<BAContent></BAContent>}
        ></Route>
      </Route>

      <Route element={<BookAppointmentPageGuest />}>
        <Route
          path="/book_appointment_guest"
          element={<BAContentGuest></BAContentGuest>}
        ></Route>
      </Route>

      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/login-user" element={<LoginPageUser />}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/appointments" element={<Appointments />}></Route>
      <Route
        path="/appointmentConfirmation"
        element={<AppointmentConfirmation />}
      ></Route>
      <Route
        path="/appointmentConfirmationGuest"
        element={<AppointmentConfirmationPageGuest />}
      ></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/faq" element={<FAQ />}></Route>
      <Route path="/doctorinformation" element={<DoctorInformation />}></Route>
      <Route path="/verifyregister" element={<VerifyRegister />}></Route>
      <Route path="/test" element={<SampleDateSort />}></Route>
      {/* staff */}
      <Route path="/informationdoctorstaff" element={<DoctorInformationStaff />}></Route>
      {/* Forgot password */}
      <Route path="/registerenteremail" element={<RegisterEnterEmail />}></Route>
      <Route path="/registerloginpassword" element={<RegisterLoginPassword />}></Route>
      <Route path="/verifyregisterforgot" element={<VerifyRegisterForgot />}></Route>
      <Route path="/choosenewpassword" element={<ChooseNewPassword />}></Route>


    </Routes>
  );
}

export default App;
