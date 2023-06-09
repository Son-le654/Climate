import React, { useEffect } from "react";
import HomeHeader from "../module/home/HomeHeader";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../module/home/Footer";
import { useState } from "react";
import Button from "../components/button/Button";
import jwtDecode from "jwt-decode";
import HomeHeaderService from "../module/home/HomeHeaderService";
import HomeHeaderServiceGuest from "../module/home/HomeHeaderServiceGuest";
import HomeHeaderServiceNurse from "../module/home/HomeHeaderServiceNurse";
import HomeHeaderServiceDoctor from "../module/home/HomeHeaderServiceDoctor";

const HomePage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("token");
    console.log("store: ", storedName);
    if (storedName != null) {
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
      {/* <HomeHeader storedName = {storedName}></HomeHeader> */}
      {/* <Button onClick={() => filterSpec()}></Button> */}
      {/* <HomeHeaderService></HomeHeaderService> */}
      {role == "" ? (
        <HomeHeaderServiceGuest></HomeHeaderServiceGuest>
      ) : role == "USER" ? (
        <HomeHeaderService></HomeHeaderService>
      ) : role == "NURSE" ? (
        <HomeHeaderServiceNurse></HomeHeaderServiceNurse>
      ) : (
        <HomeHeaderServiceDoctor></HomeHeaderServiceDoctor>
      )}

      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
