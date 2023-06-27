import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import BookAppHeaderGuest from "../module/bookAppointment/BookAppHeaderGuest";
import jwtDecode from "jwt-decode";

const BookAppointmentPageGuest = () => {
  return (
    <div className="bg-white">
      <BookAppHeaderGuest></BookAppHeaderGuest>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default BookAppointmentPageGuest;
