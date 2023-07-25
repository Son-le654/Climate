import React, { useEffect } from "react";
import HomeHeaderService from "../module/home/HomeHeaderService";
import HomeContentService from "../module/home/HomeContentService";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../module/home/Footer";
import { useState } from "react";
import Button from "../components/button/Button";
import axios from "axios";
import jwtDecode from "jwt-decode";
import HomeContentServiceStaff from "module/home/HomeContentServiceStaff";
import HomeHeaderServiceDoctor from "module/home/HomeHeaderServiceDoctor";
import HomeHeaderServiceNurse from "module/home/HomeHeaderServiceNurse";

const ServicePage = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const storedName = localStorage.getItem("token");
  useEffect(() => {
    if (storedName == null) {
      navigate("/login-user");
    } else {
      try {
        const decoded = jwtDecode(storedName);
        const rol = decoded.roles[0].authority;
        setRole(rol);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  return (
    <>
      <div className="bg-white">
        {/* <HomeHeaderService></HomeHeaderService> */}
        {role == "USER" ? (
        <HomeHeaderService></HomeHeaderService>
      ) : role == "NURSE" ? (
        <HomeHeaderServiceNurse></HomeHeaderServiceNurse>
      ) : (
        <HomeHeaderServiceDoctor></HomeHeaderServiceDoctor>
      )}
      </div>
      <div>
        {role == "USER" ? (
          <HomeContentService></HomeContentService>
        ) : (
          <HomeContentServiceStaff role = {role}></HomeContentServiceStaff>
        )}
        {/* <HomeContentServiceStaff></HomeContentServiceStaff> */}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};
export default ServicePage;
