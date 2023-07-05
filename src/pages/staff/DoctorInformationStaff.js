import HomeHeaderService from "../../module/home/HomeHeaderService";
import DoctorInformationContentstaff from "../../module/staff/doctorinformation/DoctorInformationContent";
import Footer from "../../module/home/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { localPort, publicPort } from "../../components/url/link";
import { useLocation, useNavigate } from "react-router";

function DoctorInformationStaff() {
  const navigate = useNavigate();
  const location = useLocation();
  const [doctId, setDoctId] = useState();
  // useEffect(() => {
  //   console.log("id doctor" + location.state);
  //   const docId = location?.state?.id;
  //   console.log(docId);
  //   if (docId == undefined) {
  //     navigate("/service");
  //   } else {
  //     setDoctId(docId);
  //   }
  // }, []);
  return (
    <div className="bg-white">
      <div className="bg-white">
        <HomeHeaderService></HomeHeaderService>
      </div>
      <div className="bg-white">
        <DoctorInformationContentstaff docId={doctId} />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default DoctorInformationStaff;
