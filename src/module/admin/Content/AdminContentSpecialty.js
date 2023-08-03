import React, { useState } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function AdminContentSpecialty() {
  const [expanded, setExpanded] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(10); // Hiển thị sẵn 10 dữ liệu

  // Tạo một mảng gồm 20 object để có đủ dữ liệu để cuộn lăn chuột
  const listOrigin = [
    { id: 1, nameSepcial: "Pediatrics", count: 11 },
    { id: 2, nameSepcial: "Diagnostic Imaging", count: 20 },
    { id: 3, nameSepcial: "Intensive Care - Emergency", count: 35 },
    { id: 4, nameSepcial: "Obstetrics and Gynecology", count: 18 },
    { id: 5, nameSepcial: "Neonatology", count: 30 },
    { id: 6, nameSepcial: "Intensive Care - Emergency 6", count: 14 },
    { id: 7, nameSepcial: "Intensive Care - Emergency 7", count: 25 },
    { id: 8, nameSepcial: "Intensive Care - Emergency 8", count: 12 },
    { id: 9, nameSepcial: "Intensive Care - Emergency 9", count: 38 },
    { id: 10, nameSepcial: "Intensive Care - Emergency 10", count: 29 },
    { id: 11, nameSepcial: "Intensive Care - Emergency 11", count: 17 },
    { id: 12, nameSepcial: "Intensive Care - Emergency 12", count: 32 },
    { id: 13, nameSepcial: "Intensive Care - Emergency 13", count: 22 },
    { id: 14, nameSepcial: "Intensive Care - Emergency 14", count: 19 },
    { id: 15, nameSepcial: "Intensive Care - Emergency 15", count: 40 },
    { id: 16, nameSepcial: "Intensive Care - Emergency 16", count: 13 },
    { id: 17, nameSepcial: "Intensive Care - Emergency 17", count: 26 },
    { id: 18, nameSepcial: "Intensive Care - Emergency 18", count: 10 },
    { id: 19, nameSepcial: "Intensive Care - Emergency 19", count: 36 },
    { id: 20, nameSepcial: "Intensive Care - Emergency 20", count: 28 },
  ];

  return (
    <div className="w-[100%] h-[100%] rounded-3xl bg-white shadow-lg">
      <div className="w-[100%] rounded-3xl h-[35px] flex justify-center">
        <h1 className="p-3 ml-1 font-bold text-3xl  w-[95%]">Specialty</h1>
      </div>
      <hr className="w-[90%] ml-5 text-[#d4d4d4]" />
      <div className="overflow-y-scroll h-[400px] w-[100%]  flex justify-center">
        <div className="w-[90%]">
          {listOrigin.map((data) => (
            <div className="flex w-[100%] h-[28px]" key={data.id}>
              <div className="w-[75%]  ">
                <h5 className="text-[16px] font-light">{data.nameSepcial}</h5>
              </div>
              <div className="w-[25%] ">
                <div className="flex items-center justify-center">
                  <span className="text-[18px] font-light pr-3">
                    {data.count}
                  </span>
                  <span className="text-[18px]">
                    <BsFillPeopleFill />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminContentSpecialty;
