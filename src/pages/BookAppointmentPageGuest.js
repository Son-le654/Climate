import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import BookAppHeaderGuest from "../module/bookAppointment/BookAppHeaderGuest";
import jwtDecode from "jwt-decode";
import BookAppHeader from "module/bookAppointment/BookAppHeader";
import HomeHeaderServiceNurse from "module/home/HomeHeaderServiceNurse";

const BookAppointmentPageGuest = () => {
  const [role, setRole] = useState("");
  const storedName = localStorage.getItem("token");
  useEffect(() => {
    try {
      const decoded = jwtDecode(storedName);
      const rol = decoded?.roles[0]?.authority;
      setRole(rol);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="bg-white">
      {/* {role == "" ? (
        <BookAppHeaderGuest></BookAppHeaderGuest>
      ) : role == "NURSE" ? (
        <HomeHeaderServiceNurse></HomeHeaderServiceNurse>
      ) : role == "USER" ? (
        <BookAppHeader></BookAppHeader>
      ) : (
        <></>
      )} */}
      <BookAppHeader></BookAppHeader>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default BookAppointmentPageGuest;
