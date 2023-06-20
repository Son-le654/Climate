import Background from "../../Images/Rectangle1135.png"
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaHouseUser } from 'react-icons/fa';
import Avatar from "../../Images/ava1134.png"


function DoctorInformationContent() {
    return (
        <div className="bg-white h-[800px]">
            <div className="w-[77%] h-[220px] ml-[170px] mt-[80px] relative">
                <img src={Background} alt="Background" className="rounded-3xl" />
                <img src={Avatar} alt="Avatar" className="rounded-3xl h-[170px] w-[15%] absolute top-[12%] left-[2%]" />
                <div className="flex absolute top-[15%] left-[20%]">
                    <span className="text-[35px] mt-[6px]"><FaHouseUser /></span>
                    <span className="text-[60px]"><MdKeyboardArrowRight /></span>
                    <span className="font-bold mt-[6px]">Doctor</span>
                    <span className="text-[60px]"><MdKeyboardArrowRight /></span>
                    <span className="font-bold mt-[6px]">Cardiac Catheterization</span>
                </div>
                <div className="absolute top-[40%] left-[20%] ">
                    <h1 className="text-gradientLeft text-4xl font-bold">Dr.Nguyen Thuy Dung</h1>
                </div>
                <div className="flex">
                    <div className="flex mt-[15px]">
                        <div>
                            <h1 className="text-3xl">
                                DETAILED INFORMATION
                            </h1>
                        </div>
                        <div>
                            <h1 className="text-3xl mr-[20px] ml-[20px]">
                                ASSESSMENT
                            </h1>
                        </div>
                    </div>
                    <div>
                        <button className="bg-gradientLeft h-[50px] w-[120px] rounded-3xl text-secondary">
                            Book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DoctorInformationContent