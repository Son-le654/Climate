import React from "react";
import { FaMapMarkerAlt, FaSortDown } from "react-icons/fa";
import DoctorList from "./DoctorListContentComponent/DoctorList";
import DoctorSearch from "./DoctorListContentComponent/DoctorSearch";
import DoctorSpecialty from "./DoctorListContentComponent/DoctorSpecialty";
import DoctorUserful from "./DoctorListContentComponent/DoctorUserful";

function DoctorContent({ docList }) {
  return (
    <div className="flex w-[100%]">
      <div className="w-[75%] mr-[25px]">
        <div>
          <DoctorSearch />
        </div>
        <div className="pt-16 bg-[#fff]">
          <DoctorList docList={docList} />
        </div>
      </div>
      <div className="w-[25%] mt-[90px]">
        <div>
          <DoctorSpecialty />
        </div>
        <div className="pt-[30px]">
          <DoctorUserful />
        </div>
      </div>
    </div>
  );
}
export default DoctorContent;
