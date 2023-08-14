import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { localPort, publicPort } from "../../components/url/link";
import React from "react";
import jwtDecode from "jwt-decode";

function CheckinConfirmationContent({ checkin }) {
  const tabButtons1 = "Return to previous";
  const tabButtons2 = "Check-in confirmation";

  const navigate = useNavigate();

  const [datas, setDatas] = useState([
    {
      id: 1,
      form: "Specialty examination at the hospital",
      customer: "Nguyễn Quang Hưng",
      date: "10/06/1975",
      email: "hung@gmail.com",
      gender: "Male",
      phone: "0931936165",
      reason:
        "Lorem ipsum dolor sit amet consectetur. Cursus mauris vitae posuere id lacus. Ipsum elementum mi at mauris dui. Consequat suspendisse sit vitae nunc sed nec adipiscing.",
      doctor: "Dr. Phan Nguyen Thanh Binh",
      examinationtime: "08:00, 12/06/2023",
      location: "Clinicmate Da Nang",
      specialty: "Nutrition",
    },
  ]);
  const [role, setRole] = useState("");
  const storedName = localStorage.getItem("token");
  useEffect(() => {
    try {
      const decoded = jwtDecode(storedName);
      const rol = decoded?.roles[0]?.authority;
      setRole(rol);
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(checkin);
  const confirm = async () => {
    console.log(checkin);
    var response;
    if (role == "NURSE") {
      response = await axios.post(publicPort + `checkin/save`, checkin);
    }
    console.log(response);

    if (response.data === "success") {
      navigate("/examination-list");
    } else {
      alert(response.data);
    }
  };

  const goBack = () => {
    navigate("/checkin");
  };

  return (
    <div>
      <div className="bg-white p-5 rounded-3xl shadow-lg ">
        <div className="pl-[64px] pt-5 pb-10">
          {datas.map((data) => (
            <div key={data.id}>
              <div>
                <h1 className="text-[#4976f7] text-3xl font-semibold">
                  Sevices
                </h1>
                <div className="pt-8 flex">
                  <span className="w-[35%]">Form of Service</span>
                  <span className="w-[65%]">{data.form}</span>
                </div>
              </div>
              <div className="pt-3 flex">
                <span className="w-[35%]">Examination Fee</span>
                <span className="">300.000vnđ</span>
              </div>
              <div className="pt-6">
                <h1 className="text-[#4976f7] text-3xl font-semibold">
                  Patient
                </h1>
                <div className="pt-8 flex">
                  <span className="w-[35%]">Customer</span>
                  <span className="w-[65%]">
                    {checkin != undefined ? checkin.name : ""}
                  </span>
                </div>
                <div className="pt-3 flex">
                  <span className="w-[35%]">Date of Birth</span>
                  <span className="w-[65%]">
                    {checkin != undefined ? checkin.birthday : ""}
                  </span>
                </div>
                <div className="pt-3 flex">
                  <span className="w-[35%]">Patient ID</span>
                  <span className="w-[65%]">
                    {checkin != undefined ? checkin.idC : ""}
                  </span>
                </div>
                <div className="pt-3 flex">
                  <span className="w-[35%]">Appointment ID</span>
                  <span className="w-[65%]">
                    {checkin != undefined ? checkin.idA : ""}
                  </span>
                </div>
                <div className="pt-3 flex">
                  <span className="w-[35%]">Gender</span>
                  <span className="w-[65%]">
                    {checkin != undefined ? checkin.gender : ""}
                  </span>
                </div>
                <div className="pt-3 flex">
                  <span className="w-[35%]">Phone Number</span>
                  <span>{checkin != undefined ? checkin.phone : ""}</span>
                </div>
                <div className="pt-3 flex">
                  <span className="w-[35%]">Symptom</span>
                  <span className="w-[65%]">
                    {checkin != undefined ? checkin.symtom : ""}
                  </span>
                </div>
                <div className="pt-3 flex">
                  <span className="w-[35%]">Description</span>
                  <span className="w-[65%]">
                    {checkin != undefined ? checkin.description : ""}
                  </span>
                </div>
              </div>
              <div className="pt-6">
                <h1 className="text-[#4976f7] text-3xl font-semibold">
                  Doctor
                </h1>
                <div className="pt-6 flex">
                  <span className="w-[35%]">Doctor</span>
                  <span className="w-[65%]">
                    {checkin != undefined ? checkin.doctorName : ""}
                  </span>
                </div>
                <div className="pt-3 flex">
                  <span className="w-[35%]">Specialty</span>
                  <span className="">
                    {checkin != undefined ? checkin.spec : ""}
                  </span>
                </div>

                <div className="pt-3 flex">
                  <span className="w-[35%]">Location</span>
                  <span className="">
                    {checkin != undefined ? checkin.bookPlace : ""}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <button
            key={tabButtons1}
            className="border-[3px] rounded-2xl h-[50px] pl-[30px] pr-[30px] w-[30%] mr-[35px]"
            style={{
              borderColor: "#5562f7",
              color: "#5562f7",
            }}
            onClick={() => goBack()}
          >
            {tabButtons1}
          </button>
          <button
            key={tabButtons2}
            className="border-[3px] rounded-2xl h-[50px] pl-[30px] pr-[30px] w-[30%] mr-[35px]"
            style={{
              borderColor: "#5562f7",
              color: "#5562f7",
            }}
            onClick={() => confirm()}
          >
            {tabButtons2}
          </button>
        </div>
      </div>
    </div>
  );
}
export default CheckinConfirmationContent;
