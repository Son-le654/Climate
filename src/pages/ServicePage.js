import React, { useEffect } from "react";
import HomeHeaderService from "../module/home/HomeHeaderService";
import HomeContentService from "../module/home/HomeContentService";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../module/home/Footer";
import { useState } from "react";
import Button from "../components/button/Button";
import axios from "axios";
import jwtDecode from "jwt-decode";


const ServicePage = () => {
    // const navigate = useNavigate();
    // const storedName = localStorage.getItem("token");
    // useEffect(() => {
    //     if (storedName == null) {
    //         navigate("/login-user")
    //     } else {
    //         try {
    //             const decoded = jwtDecode(storedName);
    //             const role = decoded.roles[0].authority
    //             // if (role !== 'USER') {
    //             //   navigate("/")
    //             // }
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }, [])
    return (
        <>
            <div className="bg-white">
                <HomeHeaderService></HomeHeaderService>
            </div>
            <div>
                <HomeContentService></HomeContentService>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    )
}
export default ServicePage