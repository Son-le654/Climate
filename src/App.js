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
import ListDoctor from "./pages/ListDoctorPage";
import SampleDateSort from "./SampleDateSort";
import BAContentGuest from "./module/bookAppointment/BAContentGuest";
import BookAppointmentPageGuest from "./pages/BookAppointmentPageGuest";
import AppointmentConfirmationPageGuest from "./pages/AppointmentConfirmationPageGuest";
import DoctorInformationStaff from "../src/pages/staff/DoctorInformationStaff";
import RegisterEnterEmail from "../src/pages/forgotpassword/RegisterEnterEmail";
import RegisterLoginPassword from "../src/pages/forgotpassword/RegisterLoginPassword";
import VerifyRegisterForgot from "../src/pages/forgotpassword/VerifyRegisterForgot";
import ChooseNewPassword from "../src/pages/forgotpassword/ChooseNewPassword";
import AppointmentDetails from "../src/pages/doctor/AppointmentDetails";
import MedicalHistory from "../src/pages/doctor/MedicalHistory";

import AppointmentDetailsPageForNurse from "./pages/AppointmentDetailsPageForNurse";
import SchedulesPage from "./pages/SchedulesPage";
import React from "react";
import CheckinPage from "pages/CheckinPage";
import CIContent from "module/bookAppointment/CIContent";
import CheckinConfirmationPage from "pages/CheckinConfirmationPage";
import MyCalendar from "MyCalendar";
import CheckinListPage from "pages/CheckinListPage";
import CheckinDetails from "pages/doctor/CheckinDetails";
import UpdateAppointmentPage from "pages/UpdateAppointmentPage";
import AppointmentConfirmUpdatePage from "pages/AppointmentConfirmUpdatePage";
import EditProfile from "pages/EditProfile";
import ProfilePage from "pages/ProfilePage";
import NewsPage from "guest/NewsPage";

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
      <Route element={<UpdateAppointmentPage />}>
        <Route
          path="/update_appointment"
          element={<BAContent></BAContent>}
        ></Route>
      </Route>

      <Route element={<BookAppointmentPageGuest />}>
        <Route
          path="/book_appointment_guest"
          element={<BAContentGuest></BAContentGuest>}
        ></Route>
      </Route>
      <Route element={<CheckinPage />}>
        <Route path="/checkin" element={<CIContent></CIContent>}></Route>
      </Route>
      <Route path="/checkin-list" element={<CheckinListPage />}></Route>

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
        path="/appointmentConfirmUpdate"
        element={<AppointmentConfirmUpdatePage />}
      ></Route>
      <Route
        path="/checkinConfirmation"
        element={<CheckinConfirmationPage />}
      ></Route>
      <Route
        path="/appointmentdetailsfornurse"
        element={<AppointmentDetailsPageForNurse />}
      ></Route>
      <Route
        path="/appointmentConfirmationGuest"
        element={<AppointmentConfirmationPageGuest />}
      ></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/listDoctor" element={<ListDoctor />}></Route>
      <Route path="/doctorinformation" element={<DoctorInformation />}></Route>
      <Route path="/verifyregister" element={<VerifyRegister />}></Route>
      <Route path="/test" element={<SampleDateSort />}></Route>
      {/* staff */}
      <Route
        path="/informationdoctorstaff"
        element={<DoctorInformationStaff />}
      ></Route>
      {/* Forgot password */}
      <Route
        path="/registerenteremail"
        element={<RegisterEnterEmail />}
      ></Route>
      <Route
        path="/registerloginpassword"
        element={<RegisterLoginPassword />}
      ></Route>
      <Route
        path="/verifyregisterforgot"
        element={<VerifyRegisterForgot />}
      ></Route>
      <Route path="/choosenewpassword" element={<ChooseNewPassword />}></Route>
      {/* doctor */}

      <Route path="/schedules" element={<SchedulesPage />}></Route>
      <Route path="/calendar" element={<MyCalendar />}></Route>
      <Route
        path="/appointmentdetails"
        element={<AppointmentDetails />}
      ></Route>
      <Route path="/checindetails" element={<CheckinDetails />}></Route>
      <Route path="/medicalhistory" element={<MedicalHistory />}></Route>

      <Route path="/profilepage" element={<ProfilePage />}></Route>
      <Route path="/editprofile" element={<EditProfile />}></Route>
      <Route path="/newspage" element={<NewsPage />}></Route>
    </Routes>
  );
}

export default App;
