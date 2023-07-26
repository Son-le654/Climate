import React, { useEffect, useState } from "react";
import HomeHeaderServiceNurse from "../module/home/HomeHeaderServiceNurse";
import AppointmentsContent from "../module/appointments/AppointmentsContent";
import Footer from "../module/home/Footer";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import HomeHeaderService from "module/home/HomeHeaderService";
import HomeHeaderServiceDoctor from "module/home/HomeHeaderServiceDoctor";
import PatientsContent from "module/appointments/PatientsContent";
import HomeHeaderServiceAdmin from "module/home/HomeHeaderServiceAdmin";

const PatientsPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [mail, setmail] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("token");
    if (storedName == null) {
      navigate("/login");
    } else {
      try {
        const decoded = jwtDecode(storedName);
        const role = decoded.roles[0].authority;
        setRole(role);
        setmail(decoded.sub);
        if (role == "USER") {
          navigate("/service");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <>
      <div className="bg-white">
        {role == "DOCTOR" ? (
          <HomeHeaderServiceDoctor></HomeHeaderServiceDoctor>
        ) : role == "NURSE" ? (
          <HomeHeaderServiceNurse></HomeHeaderServiceNurse>
        ) : role == "ADMIN" ? (
          <HomeHeaderServiceAdmin></HomeHeaderServiceAdmin>
        ) : (
          <></>
        )}
      </div>
      <div className="pt-[80px] pl-[190px] text-7xl font-bold py-[20px] bg-white">
        <h1>Patient list</h1>
      </div>
      <div className="bg-white" style={{ padding: "5% 12%" }}>
        <PatientsContent role={role} mail={mail}></PatientsContent>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};
export default PatientsPage;
