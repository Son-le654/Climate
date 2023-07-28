import React from "react";

const listData = [
  {
    id: 1,
    month: "February",
    day: "13th",
    name: "Nguyen Dinh Phong",
    phone: "0817411132",
    type: "Nutrition",
    time: "10:30, 12/06/2023",
  },
  {
    id: 2,
    month: "February",
    day: "13th",
    name: "Nguyen Quang Hung",
    phone: "0817411132",
    type: "Nutrition",
    time: "10:30, 12/06/2023",
  },

  {
    id: 3,
    month: "February",
    day: "13th",
    name: "Nguyen Quang Hung",
    phone: "0817411132",
    type: "Nutrition",
    time: "10:30, 12/06/2023",
  },
  {
    id: 4,
    month: "February",
    day: "13th",
    name: "Nguyen Quang Hung",
    phone: "0817411132",
    type: "Nutrition",
    time: "10:30, 12/06/2023",
  },
  {
    id: 5,
    month: "February",
    day: "13th",
    name: "Nguyen Quang Hung",
    phone: "0817411132",
    type: "Nutrition",
    time: "10:30, 12/06/2023",
  },
];

function AppointmentRequested() {
  return (
    <div>
      <div className="bg-white flex justify-center w-[100%]">
        <div className="w-[90%]">
          <div className="w-[100%] min-h-[500px] bg-white ">
            {listData.map((data) => (
              <div
                className="flex justify-between w-[100%] border-[1px] border-[#dddddd] rounded-2xl min-h-[110px] mb-[20px]"
                key={data.id}
              >
                <div className="flex w-[80%] ">
                  <div className="w-[15%]  flex justify-center items-center text-gradientLeft border-r-[2px] border-[#ddd]">
                    <div>
                      <h1 className="w-[100%]">{data.month}</h1>
                      <h1 className="w-[100%] flex justify-center font-bold">
                        {data.day}
                      </h1>
                    </div>
                  </div>
                  <div className="w-[70%] ml-[5%] ">
                    <h1 className="font-bold text-[#6c87ae]">{data.name}</h1>
                    <div className="pt-[10px]">
                      <p className="text-[14px] text-[#9b9999]">{data.phone}</p>
                      <p className="text-[14px] text-[#9b9999]">{data.phone}</p>
                      <p className="text-warning">{data.time}</p>
                    </div>
                  </div>
                </div>
                <div className=" w-[20%] flex justify-center items-center">
                  <div className="bg-gradientLeft w-[60%] h-[40px] flex justify-center items-center rounded-2xl text-white">
                    <button>View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AppointmentRequested;
