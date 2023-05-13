import React, { useEffect } from "react";
import HomeHeader from "../module/home/HomeHeader";
import { Outlet } from "react-router-dom";
import Footer from "../module/home/Footer";
import { useState } from "react";
import Button from "../components/button/Button";

const HomePage = () => {


  return (
    <div className="bg-white">
      <HomeHeader></HomeHeader>
      {/* <Button onClick={() => filterSpec()}></Button> */}
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
