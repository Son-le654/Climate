import AdminContentCurveChart from "./Content/AdminContentCurveChart";
import AdminContentRow from "./Content/AdminContentRow";
import AdminContentSpecialty from "./Content/AdminContentSpecialty";
import AdminContentInfor from "./Content/AdminContentInfor";
import React from "react";

function AdminContent() {
    return (
        <div className="w-[100%]  h-[100%] flex">
            <div className="w-[50%]  h-[1000px]">
                <div className="w-[100%] h-[500px]  flex justify-start items-center">
                    <div className="w-[100%] h-[450px] bg-white shadow-xl">
                        <AdminContentCurveChart />
                    </div>
                </div>
                <div className="w-[100%] h-[500px] ">
                    <div className="w-[100%] h-[450px] bg-white shadow-xl">
                        <AdminContentRow />
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-[1000px]">
                <div className="w-[100%] h-[500px]  flex justify-center items-center">
                    <div className="w-[90%] h-[450px]  shadow-xl">
                        <AdminContentSpecialty />
                    </div>
                </div>
                <div className="w-[100%] h-[450px]  flex justify-center items-center">
                    <div className="w-[90%] h-[450px] shadow-xl">
                        <AdminContentInfor />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminContent