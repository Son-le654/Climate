import React from "react";
import { useState } from "react";

function EditProfileContentForStaff() {
  const tabButtons1 = "Cancel ";
  const tabButtons2 = "Save profile";
  const [active, setActive] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [staffs] = useState([
    { id: 1, month: "January" },
    { id: 2, month: "February" },
    { id: 3, month: "March" },
    { id: 4, month: "April" },
    { id: 5, month: "May" },
    { id: 6, month: "June" },
    { id: 7, month: "July" },
    { id: 8, month: "August" },
    { id: 9, month: "September" },
    { id: 10, month: "October" },
    { id: 11, month: "November" },
    { id: 12, month: "December" },
  ]);

  const [males] = useState([
    { id: 1, maless: "Male" },
    { id: 2, maless: "FeMale" },
    { id: 3, maless: "Orther" },
  ]);

  const handleSelectChange = (event) => {
    const selectID = parseInt(event.target.value);
    const selected = staffs.find((staff) => staff.id === selectID);
    setSelectedStaff(selected);
    if (selectID !== 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  return (
    <div className="w-[100%] min-h-[1000px] bg-white">
      <div className="w-[100%] h-[120px] mb-[10px]">
        <div className="w-[100%] h-[50px]">
          <h1 className=" text-[25px] font-bold">Full Name</h1>
        </div>
        <div className=" flex justify-start w-[100%]">
          <div className="h-[70px] w-[80%] border-[1px] rounded-2xl border-[#c5c4c4]">
            <input
              placeholder="Le The Son"
              className="w-[90%] h-[100%] ml-[10px] text-[20px] "
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[120px] mb-[10px]">
        <div className="w-[100%] h-[50px]">
          <h1 className=" text-[25px] font-bold">Email for communication</h1>
        </div>
        <div className=" flex justify-start w-[100%]">
          <div className="h-[70px] w-[80%] border-[1px] rounded-2xl border-[#c5c4c4] flex">
            <input
              placeholder="sonlt.clinicmate@gmail.com"
              className="w-[80%] h-[100%] ml-[10px] text-[20px] "
            />
            <div className="w-[20%] flex justify-center items-center">
              <input type="checkbox" className="w-[20px] h-[20px] " />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[100%] h-[50px]">
          <h1 className=" text-[25px] font-bold">Date of Birth</h1>
        </div>
        <div className="flex w-[100%] mb-[15px]">
          <div className="w-[15%] ">
            <select
              className="h-[70px]  pl-[20px] bg-white text-[20px] border-[1px] rounded-[10px] border-[#c5c4c4]"
              onChange={handleSelectChange}
            >
              {staffs.map((staff) => (
                <option className="" key={staff.id} value={staff.id}>
                  {staff.month}
                </option>
              ))}
            </select>
          </div>
          <div className="h-[70px] w-[10%] border-[1px] rounded-2xl border-[#c5c4c4]">
            <input
              placeholder="08"
              className="w-[80%] h-[100%] ml-[10px] text-[20px] "
            />
          </div>
          <div className="h-[70px] w-[10%] border-[1px] rounded-2xl border-[#c5c4c4] ml-[20px]">
            <input
              placeholder="2001"
              className="w-[80%] h-[100%] ml-[10px] text-[20px] "
            />
          </div>
          <div className="w-[65%] ml-[20px] ">
            <select
              className="h-[70px] w-[68%] pl-[20px] bg-white text-[20px] border-[1px] rounded-[10px] border-[#c5c4c4]"
              onChange={handleSelectChange}
            >
              {males.map((male) => (
                <option className="" key={male.id} value={male.id}>
                  {male.maless}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-[100%] h-[120px] mb-[10px]">
          <div className="w-[100%] h-[50px]">
            <h1 className=" text-[25px] font-bold">Contact Number</h1>
          </div>
          <div className=" flex justify-start w-[100%]">
            <div className="h-[70px] w-[80%] border-[1px] rounded-2xl border-[#c5c4c4] flex">
              <input
                placeholder="0817411123"
                className="w-[80%] h-[100%] ml-[10px] text-[20px] "
              />
              <div className="w-[20%] flex justify-center items-center">
                <input type="checkbox" className="w-[20px] h-[20px] " />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[120px] mb-[10px]">
          <div className="w-[100%] h-[50px]">
            <h1 className=" text-[25px] font-bold">Location</h1>
          </div>
          <div className=" flex justify-start w-[100%]">
            <div className="h-[70px] w-[80%] border-[1px] rounded-2xl border-[#c5c4c4] flex">
              <input
                placeholder="Da Nang City, Viet Nam"
                className="w-[80%] h-[100%] ml-[10px] text-[20px] "
              />
              <div className="w-[20%] flex justify-center items-center">
                <input type="checkbox" className="w-[20px] h-[20px] " />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[120px] mb-[10px]">
          <div className="w-[100%] h-[50px]">
            <h1 className=" text-[25px] font-bold">
              Identity card/Citizenship card
            </h1>
          </div>
          <div className=" flex justify-start w-[100%]">
            <div className="h-[70px] w-[80%] border-[1px] rounded-2xl border-[#c5c4c4] flex">
              <input
                placeholder="197385934"
                className="w-[80%] h-[100%] ml-[10px] text-[20px] "
              />
              <div className="w-[20%] flex justify-center items-center">
                <input type="checkbox" className="w-[20px] h-[20px] text- " />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              paddingTop: "20px",
            }}
          >
            <button
              key={tabButtons1}
              className="border-[3px] rounded-2xl h-[50px] pl-[30px] pr-[30px] w-[20%] mr-[35px]"
              style={{
                borderColor: "#5562f7",
                color: "#5562f7",
              }}
            >
              {tabButtons1}
            </button>
            <button
              key={tabButtons2}
              className="border-[3px] bg-[#5562f7] rounded-2xl h-[50px] pl-[30px] pr-[30px] w-[20%] mr-[35px]"
              style={{
                borderColor: "#5562f7",
                color: "#ffffff",
              }}
            >
              {tabButtons2}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditProfileContentForStaff;
