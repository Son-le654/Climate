
import { GoSearch } from "react-icons/go";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";


const listData = [
    {
        id: 1,
        month: "February",
        day: "13th",
        name: "Nguyen Quang Hung",
        phone: "0817411132",
        type: "Nutrition",
        time: "10:30, 12/06/2023"
    },
    {
        id: 2,
        month: "February",
        day: "13th",
        name: "Nguyen Quang Hung",
        phone: "0817411132",
        type: "Nutrition",
        time: "10:30, 12/06/2023"
    },

    {
        id: 3,
        month: "February",
        day: "13th",
        name: "Nguyen Quang Hung",
        phone: "0817411132",
        type: "Nutrition",
        time: "10:30, 12/06/2023"
    },
    {
        id: 4,
        month: "February",
        day: "13th",
        name: "Nguyen Quang Hung",
        phone: "0817411132",
        type: "Nutrition",
        time: "10:30, 12/06/2023"
    },
    {
        id: 5,
        month: "February",
        day: "13th",
        name: "Nguyen Quang Hung",
        phone: "0817411132",
        type: "Nutrition",
        time: "10:30, 12/06/2023"
    },
]



function MedicalHistoryContent() {
    return (
        <div className="bg-white">
            <div className="flex w-[100%] items-center pb-[30px]">
                <div className=" w-[50%]  text-6xl font-bold">
                    <h1>Medical History</h1>
                </div>
                <div className="h-[50px] w-[50%] flex justify-end items-center">
                    <div className="border-[1px] border-[#dddddd]  w-[40%] h-[40px] flex items-center justify-center rounded-3xl cursor-pointer"
                    >
                        <input className="w-[80%] h-[100%]" placeholder="Search Patient" />
                        <span className="font-medium text-[#dddddd] w-[10%] text-[30px]"><GoSearch /></span>
                    </div>
                </div>
            </div>
            <div className="w-[100%] min-h-[500px] bg-white ">
                {listData.map((data) => (
                    <div className="flex justify-between w-[100%] shadow-xl rounded-2xl min-h-[110px] mb-[50px]"
                        key={data.id}
                    >

                        <div className="flex w-[80%] " >
                            <div className="w-[15%]  flex justify-center items-center text-gradientLeft border-r-[2px] border-[#ddd]"  >
                                <div>
                                    <h1 className="w-[100%]">
                                        {data.month}

                                    </h1>
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
            <div className="" style={{ textAlign: "center" }}>
                <button className="button text-[30px] w-10 h-10 bg-gradientLeft mr-[30px]" >
                    {/*  */}
                    <MdKeyboardArrowLeft className="ml-[2px]" />
                </button>
                <button className="button text-[30px] w-10 h-10 bg-gradientLeft" >
                    {/*  */}
                    <MdKeyboardArrowRight className="ml-[3px]" />
                </button>
            </div>
        </div>
    )
}
export default MedicalHistoryContent