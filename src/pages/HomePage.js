import React, { useEffect } from "react";
import HomeHeader from "../module/home/HomeHeader";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../module/home/Footer";
import { useState } from "react";
import Button from "../components/button/Button";
import jwtDecode from "jwt-decode";

const HomePage = () => {
  const navigate = useNavigate();
  const storedName = localStorage.getItem("token");



  return (
    <div className="bg-white">
      <HomeHeader storedName = {storedName}></HomeHeader>
      {/* <Button onClick={() => filterSpec()}></Button> */}
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
