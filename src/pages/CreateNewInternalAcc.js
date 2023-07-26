import HomeHeaderService from "../module/home/HomeHeaderService";
import Footer from "../module/home/Footer";
import EditProfileContent from "../module/profile/EditProfileContent";
import jwtDecode from "jwt-decode";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeHeaderServiceDoctor from "module/home/HomeHeaderServiceDoctor";
import HomeHeaderServiceNurse from "module/home/HomeHeaderServiceNurse";
import HomeHeaderServiceAdmin from "module/home/HomeHeaderServiceAdmin";
import CreateNewInternalContent from "module/profile/CreateNewInternalContent";

function CreateNewInternalAcc() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [mail, setMail] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("token");
    if (storedName == null) {
      navigate("/login-user");
    } else {
      try {
        const decoded = jwtDecode(storedName);
        const role = decoded.roles[0].authority;
        const mal = decoded.sub;
        setMail(mal);
        setRole(role);
        if (role !== "ADMIN") {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div className="w-[100%] min-h-[1000px] bg-white flex justify-center">
      <div className="w-[80%] min-h-[1000px] bg-white">
        <div className="bg-white">
          <HomeHeaderServiceAdmin></HomeHeaderServiceAdmin>
        </div>
        <div className="w-[100%] h-[200px] flex items-center">
          <h1 className="text-[40px] font-bold"> Edit Profile</h1>
        </div>
        <div className="bg-white">
          <CreateNewInternalContent />
        </div>
        <div className="bg-white">
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default CreateNewInternalAcc;
