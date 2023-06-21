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
import Service from "./pages/ServicePage"
import Appointments from "./pages/AppointmentsPage"
import AppointmentConfirmation from "./pages/AppointmentConfirmationPage"
import About from "./pages/About"
import FAQ from "./pages/FaqPage"
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
  }, [])
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
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/login-user" element={<LoginPageUser />}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/appointments" element={<Appointments />}></Route>
      <Route path="/appointmentConfirmation" element={<AppointmentConfirmation />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/faq" element={<FAQ />}></Route>
    </Routes>
  );
}

export default App;
