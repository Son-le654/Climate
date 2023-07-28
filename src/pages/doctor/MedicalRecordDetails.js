import Footer from "../../module/home/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import HomeHeaderServiceDoctor from "../../module/home/HomeHeaderServiceDoctor";
import React from "react";
import HomeHeaderServiceNurse from "module/home/HomeHeaderServiceNurse";
import MedicalRecordDetailsContent from "module/doctor/CheckinDetailsContent/MedicalRecordDetailsContent";
function MedicalRecordDetails() {
  const navigate = useNavigate();
  const storedName = localStorage.getItem("token");
  const [checkin, setcheckin] = useState();
  const [role, setrole] = useState("");

  useEffect(() => {
    if (storedName == null) {
      navigate("/login-user");
    } else {
      try {
        const decoded = jwtDecode(storedName);
        const rol = decoded.roles[0].authority;
        setrole(rol);
        // if (role !== 'NURSE') {
        //   navigate("/")
        // }\
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const location = useLocation();
  useEffect(() => {
    const check = location?.state?.checkin;
    console.log(check);
    if (check == undefined) {
      navigate("/medicalhistory");
    } else {
      setcheckin(check);
    }
  }, []);

  return (
    <div>
      <div className="bg-white">
        {role == "DOCTOR" ? (
          <HomeHeaderServiceDoctor></HomeHeaderServiceDoctor>
        ) : (
          <HomeHeaderServiceNurse></HomeHeaderServiceNurse>
        )}
      </div>

      <div style={{ padding: "3% 12%" }} className="bg-white">
        <MedicalRecordDetailsContent checkin={checkin} role={role} />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default MedicalRecordDetails;
