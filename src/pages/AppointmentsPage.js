import React, { useEffect } from "react";
import HomeHeaderService from "../module/home/HomeHeaderService";
import AppointmentsContent from "../module/appointments/AppointmentsContent";
import Footer from "../module/home/Footer";

const AppointmentsPage = () => {
    return (
        <>
            <div className="bg-white">
                <HomeHeaderService></HomeHeaderService>
            </div>
            <div className="pt-[80px] pl-[190px] text-7xl font-bold py-[20px]">
                <h1>
                    Appointments
                </h1>
            </div>
            <div style={{ padding: "5% 12%" }}>
                <AppointmentsContent></AppointmentsContent>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    )
}
export default AppointmentsPage