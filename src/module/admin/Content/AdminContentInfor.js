import React, { useState } from "react";

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
const additionalList = [
  { id: 10003, nameSepcial: "Dr. John Smith", online: 15, examination: 120 },
  { id: 10004, nameSepcial: "Dr. Emily Johnson", online: 25, examination: 98 },
  { id: 10005, nameSepcial: "Dr. Michael Brown", online: 8, examination: 79 },
  { id: 10006, nameSepcial: "Dr. Jessica Lee", online: 10, examination: 156 },
  { id: 10007, nameSepcial: "Dr. William Davis", online: 12, examination: 102 },
  { id: 10008, nameSepcial: "Dr. Sarah Wilson", online: 17, examination: 87 },
  { id: 10009, nameSepcial: "Dr. Robert Garcia", online: 30, examination: 113 },
  { id: 10010, nameSepcial: "Dr. Jennifer Martinez", online: 14, examination: 89 },
  { id: 10011, nameSepcial: "Dr. Christopher Adams", online: 21, examination: 144 },
  { id: 10012, nameSepcial: "Dr. Elizabeth Turner", online: 13, examination: 95 },
  { id: 10013, nameSepcial: "Dr. Matthew White", online: 19, examination: 110 },
  { id: 10014, nameSepcial: "Dr. Amanda Lewis", online: 27, examination: 121 },
  { id: 10015, nameSepcial: "Dr. Daniel Hill", online: 22, examination: 88 },
  { id: 10016, nameSepcial: "Dr. Olivia Scott", online: 9, examination: 78 },
  { id: 10017, nameSepcial: "Dr. James Allen", online: 16, examination: 132 },
  { id: 10018, nameSepcial: "Dr. Sophia King", online: 26, examination: 97 },
  { id: 10019, nameSepcial: "Dr. David Murphy", online: 11, examination: 85 },
  { id: 10020, nameSepcial: "Dr. Mia Rodriguez", online: 18, examination: 104 },
  { id: 10021, nameSepcial: "Dr. Ethan Hill", online: 20, examination: 118 },
  { id: 10022, nameSepcial: "Dr. Chloe Davis", online: 23, examination: 107 },
];

function AdminContentInfor() {

  const tabButtons1 = "Doctor";
  const tabButtons2 = "Specialty";
  const [showList1, setShowList1] = useState(true);
  const [showList2, setShowList2] = useState(false);

  const handleShowList1 = () => {
    setShowList1(true);
    setShowList2(false);
  };

  const handleShowList2 = () => {
    setShowList1(false);
    setShowList2(true);
  };


  return (
    <div className="w-[100%] h-[100%] rounded-3xl bg-white shadow-lg">
      <div className="w-[100%] rounded-3xl h-[100px]">
        <div className="flex w-[100%]">
          <div className="w-[50%] flex justify-center">
            <button
              onClick={handleShowList1}
              className={`bg-[#5463f7] text-[#e6efff] text-[20px] rounded-2xl h-[50px] w-[70%] ${showList1 ? "bg-gradientLeft" : "bg-white"}`}
            >
              {tabButtons1}
            </button>
          </div>
          <div className="w-[50%]">
            <button
              onClick={handleShowList2}
              className={`text-[#e6efff] text-[20px] rounded-2xl h-[50px] w-[70%] ${showList2 ? "bg-gradientLeft" : "bg-white"}`}
            >
              {tabButtons2}
            </button>
          </div>
        </div>
        <div className="flex justify-center h-[50px] items-center">
          <div className="w-[100%]">
            <div className="flex w-[100%]">
              <div className="w-[60%] flex">
                <div className="w-[45%] flex justify-center">
                  <h5 className="text-[#75a2cf]">ID</h5>
                </div>
                <div className="w-[55%]">
                  <h5 className="text-[16px] font-light text-[#75a2cf]">Name</h5>
                </div>
              </div>
              <div className="w-[40%]">
                <div className="flex w-[100%]">
                  <div className="w-[50%]  flex justify-center">
                    <h5 className="text-[16px] font-light text-[#75a2cf]">
                      Book appointment
                    </h5>
                  </div>
                  <div className="w-[50%]  flex justify-center">
                    <h5 className="text-[16px] font-light text-[#75a2cf]">
                      Check-in
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
          {showList1 && listOrigin.map((data) => (
            <div className="flex w-[100%] h-[28px]" key={data.id}>
              <div className="w-[80%] flex">
                <div className="w-[30%] flex justify-center">
                  <h5>{data.id}</h5>
                </div>
                <div className="w-[70%]">
                  <h5 className="text-[16px] font-light">{data.nameSepcial}</h5>
                </div>
              </div>
              <div className="w-[40%]">
                <div className="flex w-[100%]">
                  <div className="w-[50%] flex justify-center">
                    <h5 className="text-[18px]">{data.online}</h5>
                  </div>
                  <div className="w-[50%] flex justify-end">
                    <h5 className="text-[18px]">{data.examination}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {showList2 && additionalList.map((data) => (
            <div className="flex w-[100%] h-[28px]" key={data.id}>
              <div className="w-[80%] flex">
                <div className="w-[30%] flex justify-center">
                  <h5>{data.id}</h5>
                </div>
                <div className="w-[70%]">
                  <h5 className="text-[16px] font-light">{data.nameSepcial}</h5>
                </div>
              </div>
              <div className="w-[40%]">
                <div className="flex w-[100%]">
                  <div className="w-[50%] flex justify-center">
                    <h5 className="text-[18px]">{data.online}</h5>
                  </div>
                  <div className="w-[50%] flex justify-end">
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