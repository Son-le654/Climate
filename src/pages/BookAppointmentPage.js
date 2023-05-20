import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import BookAppHeader from "../module/bookAppointment/BookAppHeader";
import jwtDecode from "jwt-decode";

const BookAppointmentPage = () => {
  const navigate = useNavigate();
  const storedName = localStorage.getItem("token");

  useEffect(() => {
    if (storedName == null) {
      navigate("/login-user")
    } else {
      try {
        const decoded = jwtDecode(storedName);
        const role = decoded.roles[0].authority
        // if (role !== 'USER') {
        //   navigate("/")
        // }
      } catch (error) {
        console.log(error);
      }
    }
  }, [])



  return (
    <div className="bg-white">
      <BookAppHeader storedName={storedName}></BookAppHeader>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default BookAppointmentPage;
