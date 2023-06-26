import axios from "axios";
import { useState } from "react"



function AppointmentConfirmationContent() {

    const tabButtons = ['Return to previous', 'Appointment confirmation'];
    const [type, setType] = useState('Appointment confirmation');

    const [datas, setDatas] = useState([{
        id: 1,
        form: "Specialty examination at the hospital",
        customer: "Nguyễn Quang Hưng",
        date: "10/06/1975",
        email: "hung@gmail.com",
        gender: 'Male',
        phone: "0931936165",
        reason: 'Lorem ipsum dolor sit amet consectetur. Cursus mauris vitae posuere id lacus. Ipsum elementum mi at mauris dui. Consequat suspendisse sit vitae nunc sed nec adipiscing.',
        doctor: 'Dr. Phan Nguyen Thanh Binh',
        examinationtime: '08:00, 12/06/2023',
        location: 'Clinicmate Da Nang',
        specialty: 'Nutrition',

    }])
    
    const confirm = async () => {
    // const response = await axios.post(
    //     `http://localhost:8080/appointment/save`,
    //     registers
    //   );
    //   console.log(response);
    //   if (response.data === "cannot find patient") {
    //     window.alert("Cannot find patient");
    //   }
    //   if (response.data === "success") {
    //   }
    }

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
                                    <span className="w-[35%]">
                                        Form of Service
                                    </span>
                                    <span className="w-[65%]">
                                        {data.form}
                                    </span>
                                </div>
                            </div>
                            <div className="pt-6">
                                <h1 className="text-[#4976f7] text-3xl font-semibold">
                                    Customer
                                </h1>
                                <div className="pt-8 flex">
                                    <span className="w-[35%]">
                                        Customer
                                    </span>
                                    <span className="w-[65%]">
                                        {data.customer}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">
                                        Date of Birth
                                    </span>
                                    <span className="w-[65%]">
                                        {data.date}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">
                                        Email
                                    </span>
                                    <span className="w-[65%]">
                                        {data.email}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">
                                        Gender
                                    </span>
                                    <span className="w-[65%]">
                                        {data.gender}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">
                                        Phone Number
                                    </span>
                                    <span>
                                        {data.phone}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">
                                        Reason for Examination
                                    </span>
                                    <span className="w-[65%]">
                                        {data.reason}
                                    </span>
                                </div>
                            </div>
                            <div className="pt-6">
                                <h1 className="text-[#4976f7] text-3xl font-semibold">
                                    Doctor
                                </h1>
                                <div className="pt-6 flex">
                                    <span className="w-[35%]">
                                        Doctor
                                    </span>
                                    <span className="w-[65%]">
                                        {data.doctor}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">
                                        Examination Time
                                    </span>
                                    <span className="">
                                        {data.examinationtime}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">
                                        Location
                                    </span>
                                    <span className="">
                                        {data.location}
                                    </span>
                                </div>
                                <div className="pt-3 flex">
                                    <span className="w-[35%]">
                                        Specialty
                                    </span>
                                    <span className="">
                                        {data.specialty}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div style={{ display: "flex", justifyContent: 'center', paddingTop: '20px' }}>
                    {tabButtons.map(tabButton => (
                        <button
                            key={tabButton}
                            className="border-[3px] rounded-2xl h-[50px] pl-[30px] pr-[30px] w-[30%] mr-[35px]"
                            style={type === tabButton ? {
                                color: '#ffff',
                                backgroundColor: '#3681f8'
                            } : {
                                borderColor: '#5562f7',
                                color: '#5562f7'
                            }}
                            onClick={() => setType(tabButton)}
                        >
                            {tabButton}
                        </button>

                    ))}
                </div>
            </div>
        </div>
    )
}
export default AppointmentConfirmationContent