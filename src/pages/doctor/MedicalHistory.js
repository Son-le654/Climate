import HomeHeaderService from "../../module/home/HomeHeaderService";
import MedicalHistoryContent from "../../module/doctor/MedicalHistoryContent/MedicalHistoryContent";
import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import HomeHeaderServiceDoctor from "module/home/HomeHeaderServiceDoctor";
import HomeHeaderServiceNurse from "module/home/HomeHeaderServiceNurse";

function MedicalHistory() {
  const navigate = useNavigate();
  const [role, setRole] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    const storedName = localStorage.getItem("token");
    if (storedName == null) {
      navigate("/login");
    } else {
      try {
        const decoded = jwtDecode(storedName);
        const role = decoded.roles[0].authority;
        setRole(role);
        setEmail(decoded.sub);
        console.log(decoded.sub);
        // console.log(decoded.sub);
        if (role !== "DOCTOR" && role !== "NURSE") {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
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
        <MedicalHistoryContent email={email} role={role} />
      </div>
      <div></div>
    </div>
  );
}
export default MedicalHistory;
