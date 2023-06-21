import React, { useEffect } from "react";
import HomeHeaderService from "../module/home/HomeHeaderService";
import HomeContentService from "../module/home/HomeContentService";
import { Outlet } from "react-router-dom";
import Footer from "../module/home/Footer";
import { useState } from "react";
import Button from "../components/button/Button";


const ServicePage = () => {
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