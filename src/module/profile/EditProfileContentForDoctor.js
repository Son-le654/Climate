import React from "react";
import { useState } from "react";

function EditProfileContentForDoctor() {
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
    <div className="w-[100%] min-h-[1200px] ">
      <div className="w-[100%] min-h-[900px] bg-white flex ">
        <div className="w-[60%] ">
          <div className="w-[95%] h-[120px] mb-[10px] ">
            <div className="w-[90%] h-[50px]">
              <h1 className=" text-[25px] font-bold">Full Name</h1>
            </div>
            <div className=" flex justify-start w-[100%]">
              <div className="h-[70px] w-[100%] border-[1px] rounded-2xl border-[#c5c4c4]">
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
              <div className="h-[70px] w-[95%] border-[1px] rounded-2xl border-[#c5c4c4] flex">
                <input
                  placeholder="sonlt.clinicmate@gmail.com"
                  className="w-[90%] h-[100%] ml-[10px] text-[20px] "
                />
              </div>
            </div>
          </div>
          <div>
            <div className="w-[100%] h-[50px] ">
              <h1 className=" text-[25px] font-bold">Date of Birth</h1>
            </div>
            <div className="flex w-[100%] mb-[15px] justify-between ">
              <div className="w-[20%]  flex">
                <select
                  className="h-[70px] w-[100%] pl-[20px] bg-white text-[20px] border-[1px] rounded-[10px] border-[#c5c4c4]"
                  onChange={handleSelectChange}
                >
                  {staffs.map((staff) => (
                    <option className="" key={staff.id} value={staff.id}>
                      {staff.month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="h-[70px]  w-[15%] border-[1px] rounded-2xl border-[#c5c4c4]">
                <input
                  placeholder="08"
                  className="w-[80%] h-[100%] ml-[10px] text-[20px] "
                />
              </div>
              <div className="h-[70px] w-[15%]  border-[1px] rounded-2xl border-[#c5c4c4] ml-[20px]">
                <input
                  placeholder="2001"
                  className="w-[80%] h-[100%] ml-[10px] text-[20px] "
                />
              </div>
              <div className="w-[30%]">
                <select
                  className="h-[70px] w-[82%] pl-[20px] bg-white text-[20px] border-[1px] rounded-[10px] border-[#c5c4c4]"
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
                <div className="h-[70px] w-[95%] border-[1px] rounded-2xl border-[#c5c4c4] flex">
                  <input
                    placeholder="0817411123"
                    className="w-[80%] h-[100%] ml-[10px] text-[20px] "
                  />

                </div>
              </div>
            </div>
            <div className="w-[100%] h-[120px] mb-[10px]">
              <div className="w-[100%] h-[50px]">
                <h1 className=" text-[25px] font-bold">Location</h1>
              </div>
              <div className=" flex justify-start w-[100%]">
                <div className="h-[70px] w-[95%] border-[1px] rounded-2xl border-[#c5c4c4] flex">
                  <input
                    placeholder="Da Nang City, Viet Nam"
                    className="w-[80%] h-[100%] ml-[10px] text-[20px] "
                  />

                </div>
              </div>
            </div>
            <div className="w-[100%] h-[120px] mb-[10px]">
              <div className="w-[100%] h-[50px]">
                <h1 className=" text-[25px] font-bold">
                  Specialty
                </h1>
              </div>
              <div className=" flex justify-start w-[100%]">
                <div className="h-[70px] w-[95%] border-[1px] rounded-2xl border-[#c5c4c4] flex">
                  <input
                    placeholder="Intensive Care - Emergency"
                    className="w-[80%] h-[100%] ml-[10px] text-[20px] "
                  />

                </div>
              </div>
            </div>
            <div className="w-[100%] h-[120px] mb-[10px]">
              <div className="w-[100%] h-[50px]">
                <h1 className=" text-[25px] font-bold">
                  Roles and permissions
                </h1>
              </div>
              <div className=" flex justify-start w-[100%]">
                <div className="h-[70px] w-[95%] border-[1px] rounded-2xl border-[#c5c4c4] flex">
                  <input
                    placeholder="Doctor"
                    className="w-[80%] h-[100%] ml-[10px] text-[20px] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] h-[780px]">
          <div className=" w-[100%] h-[150px]  mb-[10px] ">
            <div className="font-medium w-[100%] h-[150px]">
              <h1 className="h-[48px] text-[20px] font-bold">Introduction</h1>
              <div className="w-[100%] h-[100px] border-[1px] border-[#dddddd] rounded-3xl flex">
                <div className="w-[1%]"></div>
                <textarea
                  name="Cprocess"
                  className="w-[98%] h-[80px] pt-[20px] pl-[20px] "
                />
              </div>
            </div>
          </div>
          <div className=" w-[100%] h-[150px] mb-[10px] ">
            <div className="font-medium w-[100%] h-[150px]">
              <h1 className="h-[48px] text-[20px] font-bold">Education Background</h1>
              <div className="w-[100%] h-[100px] border-[1px] border-[#dddddd] rounded-3xl flex">
                <div className="w-[1%]"></div>
                <textarea
                  name="Cprocess"
                  className="w-[98%] h-[80px] pt-[20px] pl-[20px] "
                />
              </div>
            </div>
          </div>
          <div className=" w-[100%] h-[200px] mb-[10px]  ">
            <div className="font-medium w-[100%] h-[150px]">
              <h1 className="h-[48px] text-[20px] font-bold">Experience</h1>
              <div className="w-[100%] h-[145px] border-[1px] border-[#dddddd] rounded-3xl flex">
                <div className="w-[1%]"></div>
                <textarea
                  name="Cprocess"
                  className="w-[98%] h-[140px] pt-[20px] pl-[20px] "
                />
              </div>
            </div>
          </div>
          <div className="w-[95%] h-[120px] mb-[10px]">
            <div className="w-[90%] h-[30px] mb-[15px]">
              <h1 className=" text-[20px] font-bold">Awards and Recognitions</h1>
            </div>
            <div className=" flex justify-start w-[100%]">
              <div className="h-[70px] w-[100%] border-[1px] rounded-2xl border-[#c5c4c4]">
                <input
                  className="w-[90%] h-[100%] ml-[10px] text-[20px] "
                />
              </div>
            </div>
          </div>
          <div className="w-[95%] h-[120px] mb-[10px]">
            <div className="w-[90%] h-[30px] mb-[15px]">
              <h1 className=" text-[20px] font-bold">Book, Research Work</h1>
            </div>
            <div className=" flex justify-start w-[100%]">
              <div className="h-[70px] w-[100%] border-[1px] rounded-2xl border-[#c5c4c4]">
                <input
                  className="w-[90%] h-[100%] ml-[10px] text-[20px] "
                />
              </div>
            </div>
          </div>
          <div className="w-[95%] h-[120px] mb-[10px]">
            <div className="w-[90%] h-[30px] mb-[15px]">
              <h1 className=" text-[20px] font-bold">Languages</h1>
            </div>
            <div className=" flex justify-start w-[100%]">
              <div className="h-[70px] w-[100%] border-[1px] rounded-2xl border-[#c5c4c4]">
                <input
                  className="w-[90%] h-[100%] ml-[10px] text-[20px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[100%] h-[120px] mb-[10px]">
          <div className="w-[100%] h-[50px]">
            <h1 className=" text-[25px] font-bold">Choose an image</h1>
          </div>
          <div className=" flex justify-start w-[100%]">
            <div className="h-[70px] w-[98%] border-[1px] rounded-2xl border-[#c5c4c4] flex">
              <input
                placeholder="Choose an image"
                className="w-[80%] h-[100%] ml-[10px] text-[20px] "
              />

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
  );
}
export default EditProfileContentForDoctor;
