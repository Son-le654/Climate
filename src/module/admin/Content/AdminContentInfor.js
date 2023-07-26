import React, { useState } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function AdminContentInfor() {

  const tabButtons1 = "Doctor";
  const tabButtons2 = "Specialty";
  const [expanded, setExpanded] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(10); // Hiển thị sẵn 10 dữ liệu

  // Tạo một mảng gồm 20 object để có đủ dữ liệu để cuộn lăn chuột
  const listOrigin = [
    { id: 10002, nameSepcial: "Dr. Melissa Martinez", online: 11, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez", online: 20, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez", online: 35, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez", online: 18, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez", online: 30, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez ", online: 14, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez ", online: 25, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez ", online: 12, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez ", online: 38, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez", online: 29, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez", online: 17, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez", online: 32, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez", online: 22, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez", online: 19, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez", online: 40, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez", online: 13, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez", online: 26, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez", online: 10, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez", online: 36, examination: 134 },
    { id: 10002, nameSepcial: "Dr. Melissa Martinez", online: 28, examination: 134 },
  ];



  return (
    <div className="w-[100%] h-[100%] rounded-3xl bg-white shadow-lg">
      <div className="w-[100%] rounded-3xl h-[100px]">
        <div className="flex w-[100%]">
          <div className="w-[50%] flex justify-center">
            <button
              key={tabButtons1}
              className=" bg-[#5463f7] text-white text-[20px] rounded-2xl h-[50px] w-[70%] "
            >
              {tabButtons1}
            </button>
          </div>
          <div className="w-[50%]">
            <button
              key={tabButtons2}
              className="  text-[#e6efff] text-[20px] rounded-2xl h-[50px] w-[70%] "
            >
              {tabButtons2}
            </button>
          </div>
        </div>
        <div className="flex justify-center  h-[50px] items-center">
          <div className="w-[100%]">
            <div
              className="flex w-[100%] "
            >
              <div className="w-[60%] flex">
                <div className="w-[45%] flex justify-center">
                  <h5 className="text-[#75a2cf]">
                    ID
                  </h5>
                </div>
                <div className="w-[55%]">
                  <h5 className="text-[16px] font-light text-[#75a2cf]">
                    Name
                  </h5>
                </div>
              </div>
              <div className="w-[40%] ">
                <div className="flex w-[100%]">
                  <div className="w-[50%]  flex justify-center">
                    <h5 className="text-[16px] font-light text-[#75a2cf]">
                      Online Visits
                    </h5>
                  </div>
                  <div className="w-[50%]  flex justify-center">
                    <h5 className="text-[16px] font-light text-[#75a2cf]">
                      Examination
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[90%] ml-5 text-[#d4d4d4]" />
      <div className="overflow-y-scroll h-[340px] w-[100%] flex justify-center">
        <div className="w-[90%]">
          {listOrigin.map((data) => (
            <div
              className="flex w-[100%] h-[28px]"
              key={data.id}
            >
              <div className="w-[80%] flex">
                <div className="w-[30%] flex justify-center">
                  <h5>
                    {data.id}
                  </h5>
                </div>
                <div className="w-[70%]">
                  <h5 className="text-[16px] font-light">
                    {data.nameSepcial}
                  </h5>
                </div>
              </div>
              <div className="w-[40%] ">
                <div className="flex w-[100%] ">
                  <div className="w-[50%]  flex justify-center">
                    <h5 className="text-[18px]">{data.online}</h5>
                  </div>
                  <div className="w-[50%] flex justify-end  ">
                    <h5 className="text-[18px]">{data.examination}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminContentInfor;