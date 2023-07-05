import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { localPort, publicPort } from "../../components/url/link";

function AppointmentDetailContent({ appointment }) {
  const tabButtons1 = "Return to previous";
  const tabButtons2 = "Appointment confirmation";
  console.log(appointment);

  const [type, setType] = useState("Appointment confirmation");
  const navigate = useNavigate();

  const Approve = async () => {
    console.log(appointment);
    console.log("Approve");
    // const response = await axios.post(
    //   publicPort + `appointment/save`,
    //   appointment
    // );
    // console.log(response);
    // if (response.data === "cannot find patient") {
    //   window.alert("Cannot find patient");
    // }
    // if (response.data === "success") {
    //   navigate("/appointments");
    // }
  };
  const Cancel = async () => {
    console.log(appointment);
    console.log("Cancel");
    // const response = await axios.post(
    //   publicPort + `appointment/save`,
    //   appointment
    // );
    // console.log(response);
    // if (response.data === "cannot find patient") {
    //   window.alert("Cannot find patient");
    // }
    // if (response.data === "success") {
    //   navigate("/appointments");
    // }
  };

  const goBack = () => {
    navigate("/appointments");
  };

  return (
    <div>
      <div className="bg-white p-5 rounded-3xl shadow-lg ">
        <div className="pl-[64px] pt-5 pb-10">
          <div key={appointment != undefined ? appointment.id : ""}>
            <div>
              <h1 className="text-[#4976f7] text-3xl font-semibold">Sevices</h1>
              <div className="pt-8 flex">
                <span className="w-[35%]">Status of Appointment</span>
                <span className="w-[65%]">
                  {appointment != undefined &&
                  appointment.commandFlag == "0" ? (
                    <p
                      className={`w-[10%] h-[30px] rounded-2xl ml-[14%] pt-[3px] text-white ${"bg-warning"}`}
                    >
                      Pending
                    </p>
                  ) : appointment != undefined &&
                    appointment.commandFlag == "1" ? (
                    <p
                      className={`w-[12%] h-[30px] rounded-2xl ml-[14%] pt-[3px] text-white ${"bg-success"}`}
                    >
                      Approved
                    </p>
                  ) : (
                    <p
                      className={`w-[11%] h-[30px] rounded-2xl ml-[14%] pt-[3px] text-white ${"bg-error"}`}
                    >
                      Canceled
                    </p>
                  )}
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-[#4976f7] text-3xl font-semibold">Sevices</h1>
              <div className="pt-8 flex">
                <span className="w-[35%]">Form of Service</span>
                <span className="w-[65%]">
                  Specialty examination at the hospital
                </span>
              </div>
            </div>
            <div className="pt-6">
              <h1 className="text-[#4976f7] text-3xl font-semibold">Patient</h1>
              <div className="pt-8 flex">
                <span className="w-[35%]">Customer</span>
                <span className="w-[65%]">
                  {appointment != undefined ? appointment.patientName : ""}
                </span>
              </div>
              <div className="pt-3 flex">
                <span className="w-[35%]">Date of Birth</span>
                <span className="w-[65%]">
                  {appointment != undefined ? appointment.birthday : ""}
                </span>
              </div>
              <div className="pt-3 flex">
                <span className="w-[35%]">ID Card</span>
                <span className="w-[65%]">
                  {appointment != undefined ? appointment.idC : ""}
                </span>
              </div>
              <div className="pt-3 flex">
                <span className="w-[35%]">Gender</span>
                <span className="w-[65%]">
                  {appointment != undefined ? appointment.gender : ""}
                </span>
              </div>
              <div className="pt-3 flex">
                <span className="w-[35%]">Phone Number</span>
                <span>{appointment != undefined ? appointment.phone : ""}</span>
              </div>
              <div className="pt-3 flex">
                <span className="w-[35%]">Symptom</span>
                <span className="w-[65%]">
                  {appointment != undefined ? appointment.symptom : ""}
                </span>
              </div>
              <div className="pt-3 flex">
                <span className="w-[35%]">Description</span>
                <span className="w-[65%]">
                  {appointment != undefined ? appointment.note : ""}
                </span>
              </div>
            </div>
            <div className="pt-6">
              <h1 className="text-[#4976f7] text-3xl font-semibold">Doctor</h1>
              <div className="pt-6 flex">
                <span className="w-[35%]">Doctor</span>
                <span className="w-[65%]">
                  {appointment != undefined ? appointment.doctorName : ""}
                </span>
              </div>
              <div className="pt-3 flex">
                <span className="w-[35%]">Specialty</span>
                <span className="">
                  {appointment != undefined ? appointment.speciatly : ""}
                </span>
              </div>
              <div className="pt-3 flex">
                <span className="w-[35%]">Examination Date</span>
                <span className="">
                  {appointment != undefined ? appointment.examDate : ""}
                </span>
              </div>
              <div className="pt-3 flex">
                <span className="w-[35%]">Examination Time</span>
                <span className="">
                  {appointment != undefined ? appointment.examTime : ""}
                </span>
              </div>
              {/* <div className="pt-3 flex">
                <span className="w-[35%]">Location</span>
                <span className="">
                  {appointment != undefined ? appointment.bookPlace : ""}
                </span>
              </div> */}
            </div>
          </div>
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
          {appointment != undefined && appointment.commandFlag == "0" ? (
            <>
              <button
                className=" rounded-2xl h-[50px] pl-[30px] pr-[30px] w-[30%] mr-[35px] bg-error"
                style={{ color: "white" }}
                onClick={() => Cancel()}
              >
                Cancel the appointment
              </button>
              <button
                className=" rounded-2xl h-[50px] pl-[30px] pr-[30px] w-[30%] mr-[35px] bg-success"
                onClick={() => Approve()}
                style={{ color: "white" }}
              >
                Approve the appointment
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
export default AppointmentDetailContent;
