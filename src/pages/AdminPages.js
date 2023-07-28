import HomeHeaderService from "../module/home/HomeHeaderService";
import Footer from "../module/home/Footer";
import AdminContent from "../module/admin/AdminContent";
import HomeHeaderServiceAdmin from "module/home/HomeHeaderServiceAdmin";
import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function AdminPages() {
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
    <div className="w-[100%] min-h-[1000px] bg-white">
      <div className="w-[100%] min-h-[1000px] bg-white flex justify-center">
        <div className="w-[80%] min-h-[1000px]">
          <div className="bg-white">
            <HomeHeaderServiceAdmin />
          </div>
          <div className="w-[100%] h-[200px] flex items-center">
            <h1 className="text-[40px] font-bold">Dashboard</h1>
          </div>
          <div className="bg-white w-[100%] h-[1000px]">
            <AdminContent />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}
export default AdminPages;
