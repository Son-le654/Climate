import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import HomeHeaderServiceNurse from "../module/home/HomeHeaderServiceNurse";

const CheckinPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("token");
    if (storedName == null) {
      navigate("/login-user");
    } else {
      try {
        const decoded = jwtDecode(storedName);
        const role = decoded.roles[0].authority;
        setRole(role);
        if (role !== "NURSE") {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div className="bg-white">
      <HomeHeaderServiceNurse></HomeHeaderServiceNurse>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default CheckinPage;
