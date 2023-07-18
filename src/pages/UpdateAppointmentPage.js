import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import BookAppHeader from "../module/bookAppointment/BookAppHeader";
import jwtDecode from "jwt-decode";
import HomeHeaderService from "../module/home/HomeHeaderService";
import HomeHeaderServiceDoctor from "../module/home/HomeHeaderServiceDoctor";
import HomeHeaderServiceNurse from "../module/home/HomeHeaderServiceNurse";

const UpdateAppointmentPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const location = useLocation();


  useEffect(() => {
    const storedName = localStorage.getItem("token");
    if (storedName == null) {
      navigate("/login-user");
    } else {
      try {
        const decoded = jwtDecode(storedName);
        const role = decoded.roles[0].authority;
        setRole(role);
        // if (role !== 'USER') {
        //   navigate("/")
        // }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div className="bg-white">
      {/* <BookAppHeader storedName={storedName}></BookAppHeader> */}
      <HomeHeaderServiceNurse></HomeHeaderServiceNurse>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default UpdateAppointmentPage;
