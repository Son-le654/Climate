import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillFileTextFill } from "react-icons/bs";


function AppointmentDetailsContent() {
    const tabButtons1 = "Return to previous";
    const tabButtons2 = "Completion of Examination";

    const [type, setType] = useState("Appointment confirmation");

    const [showMedicalSummary, setShowMedicalSummary] = useState(false);
    const [showConfirm, setshowConfirm] = useState(false);
    const handleAddMedicalRecord = () => {
        setShowMedicalSummary(true);
    };
    const handleReturnToPrevious = () => {
        setShowMedicalSummary(false);
    };
    const handleshowConfirm = () => {
        setshowConfirm(false);
    };
    const handleUnshowConfirm = () => {
        setshowConfirm(true);
    };
    const [datas, setDatas] = useState([
        {
            id: 1,
            status: "Approved",
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
    const handleCompletionOfExamination = () => {
        setshowConfirm(false)
        setShowMedicalSummary(false);
        setDatas((prevDatas) => {
            const updatedDatas = prevDatas.map((data) => {
                if (data.id === 1) {
                    return { ...data, status: "Completed" };
                }
                return data;
            });
            return updatedDatas;
        });
    };

    return (
        <div>
            <div className="flex w-[100%] items-center pb-[30px]">
                <div className=" w-[50%]  text-6xl font-bold">
                    <h1>Appointment Details</h1>
                </div>
                {!showMedicalSummary ? (
                    <div className="h-[50px] w-[50%] flex justify-end items-center">
                        <div className="border-[1px] border-[#dddddd]  w-[40%] h-[40px] flex items-center justify-center rounded-3xl cursor-pointer"
                            onClick={handleAddMedicalRecord}
                        >
                            <span className="w-[10%] text-[30px] text-gradientLeft ]"><AiOutlinePlusCircle /></span>
                            <span className="font-medium text-gradientLeft ">Add Medical Record</span>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="bg-white p-5 rounded-3xl shadow-lg ">
                <div className="pl-[64px] pt-5 pb-10">
                    {datas.map((data) => (
                        <div key={data.id}>
                            <div className="min-h-[80px]">
                                <h1 className="text-[#4976f7] text-3xl font-semibold">
                                    Status
                                </h1>
                                <div className="pt-8 flex">
                                    <span className="w-[35%]">Form of Service</span>
                                    <span className="w-[65%]">
                                        <p
                                            className={`w-[15%] min-h-[20px] ${data.status === "Completed" ? "bg-[#4976f7]" : "bg-success"
                                                } text-white flex justify-center rounded-2xl`}
                                        >{data.status}</p>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-[#4976f7] text-3xl font-semibold">
                                    Sevices
                                </h1>
                                <div className="pt-8 flex">
                                    <span className="w-[35%]">Form of Service</span>
                                    <span className="w-[65%]">{data.form}</span>
                                </div>
                            </div>
                            <div className="pt-6">
                                <h1 className="text-[#4976f7] text-3xl font-semibold">
                                    Patient
                                </h1>
                                <div className="pt-8 flex">
                                    <span className="w-[35%]">Customer</span>
                                    <span className="w-[65%]">
                                        {data.customer}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">Date of Birth</span>
                                    <span className="w-[65%]">
                                        {data.date}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">ID Card</span>
                                    <span className="w-[65%]">
                                        {data.idC}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">Gender</span>
                                    <span className="w-[65%]">
                                        {data.gender}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">Phone Number</span>
                                    <span>
                                        {data.phone}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">Symptom</span>
                                    <span className="w-[65%]">
                                        {data.symtom}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">Description</span>
                                    <span className="w-[65%]">
                                        {data.description}
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
                                        {data.doctorName}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">Specialty</span>
                                    <span className="">
                                        {data.spec}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">Examination Date</span>
                                    <span className="">
                                        {data.examinationtime}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">Examination Time</span>
                                    <span className="">
                                        {data.bookTime}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">Location</span>
                                    <span className="">
                                        {data.bookPlace}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showMedicalSummary ? (
                <div className="w-[100%] min-h-[600px] bg-white mt-[50px] shadow-xl rounded-3xl">
                    <div className=" w-[100%] h-[80px] flex justify-end">
                        <h1 className="font-semibold text-gradientLeft w-[93.5%] mt-[20px] text-[20px]">
                            Medical Summary
                        </h1>
                    </div>
                    <div className=" w-[100%] min-h-[500px]">
                        <div className="font-medium w-[80%] h-[150px] ml-[79px]">
                            <h1 className="mb-[10px]">
                                Clinical Course and Progress
                            </h1>
                            <div className="w-[100%] h-[126px] border-[1px] border-[#dddddd] rounded-3xl flex">
                                <div className="w-[1%]">

                                </div>
                                <textarea className="w-[90%] h-[120px] pt-[20px] pl-[20px] text-[#42b874]" />
                            </div>
                        </div>
                        <div className="font-medium w-[80%] h-[150px] ml-[79px] m-[20px]">
                            <h1 className="mb-[10px]">
                                Summary of Diagnostic Test Results
                            </h1>
                            <div className="w-[100%] h-[126px] border-[1px] border-[#dddddd] rounded-3xl flex">
                                <div className="w-[1%]">

                                </div>
                                <textarea className="w-[90%] h-[120px] pt-[20px] pl-[20px] text-[#42b874]" />
                            </div>
                        </div>
                        <div className="font-medium w-[80%] h-[200px] ml-[79px]">
                            <h1 className="mb-[10px]">
                                Treatment Approach
                            </h1>
                            <div className="w-[100%] h-[126px] border-[1px] border-[#dddddd] rounded-3xl flex">
                                <div className="w-[1%]">
                                </div>
                                <textarea className="w-[90%] h-[120px] pt-[20px] pl-[20px] text-[#42b874]" />
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
            {showConfirm ? (
                <div className="w-[100%] h-[100vh] fixed bg-gray2 inset-0 bg-opacity-50 ">
                    <div className="w-[40%] h-[300px] bg-white shadow-xl rounded-3xl fixed top-1/2 left-1/2 z-1000  transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center  ">
                        <div>
                            <div className="w-[100%] h-[50px]  text-[70px] text-gradientLeft flex justify-center items-center">
                                <BsFillFileTextFill />
                            </div>
                            <div className="w-[100%] h-[100px] flex justify-center items-center">
                                <div>
                                    <h1 className="font-bold text-[18px] w-[100%] flex justify-center">Completion of Patient Examination</h1>
                                    <p>Do you want to complete Patient Examination?</p>
                                </div>
                            </div>
                            <div className="w-[100%] h-[50px] flex justify-center">
                                <div className="w-[100%]  flex justify-between items-center">
                                    <span className="w-[40%] h-[50px] flex justify-center items-center  rounded-2xl bg-[#dddddd] cursor-pointer"
                                        onClick={handleshowConfirm}
                                    >
                                        <button>No, close!</button>
                                    </span>
                                    <span className="w-[40%] cursor-pointer h-[50px] flex justify-center items-center text-white rounded-2xl bg-gradientLeft"
                                        onClick={handleCompletionOfExamination}
                                    >
                                        <button>Yes, completed!</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
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
                        onClick={handleReturnToPrevious}
                        style={{
                            borderColor: "#5562f7",
                            color: "#5562f7",
                        }}
                    >
                        {tabButtons1}
                    </button>
                    {showMedicalSummary ? (
                        <button
                            key={tabButtons2}
                            className="border-[3px] rounded-2xl h-[50px] pl-[30px] pr-[30px] w-[30%] mr-[35px]"
                            style={{
                                borderColor: "#5562f7",
                                color: "white",
                                backgroundColor: "#4e6df7"
                            }}
                            onClick={handleUnshowConfirm}
                        >
                            {tabButtons2}
                        </button>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default AppointmentDetailsContent