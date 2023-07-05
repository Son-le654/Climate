import axios from "axios";
import { useEffect, useState } from "react";
import { localPort, publicPort } from "../../../components/url/link";
import { useNavigate } from "react-router";

function ChooseNewPasswordContent() {
  return (
    <div className="flex justify-center">
      <div className="min-h-[500px] w-[50%] mb-[100px] bg-white mt-[50px] rounded-[20px]">
        <div className="pt-[5%] pl-[8%] pr-[7%]">
          <div className="w-[100%] h-[80px]">
            <h1 className="text-[30px] font-bold w-[75%]">
              Enter security code
            </h1>
          </div>
          <div className=" w-[100%]">
            <span className="text-grayborder2">
              Create a new password that is at least 6 characters long. A strong password has a combination of letters, digits and punctuation marks.
            </span>
          </div>
          <div className="w-[100%] h-[70px] flex items-center">
            <div className="w-[60%] h-[45px] rounded-2xl flex justify-center items-center border-[#dddddd] border-[1px]">
              <input className="w-[90%] h-[40px]" placeholder="New Password *" />
            </div>
          </div>
          <div className="w-[100%] h-[70px] flex items-center">
            <div className="w-[60%] h-[45px] rounded-2xl flex justify-center items-center border-[#dddddd] border-[1px]">
              <input className="w-[90%] h-[40px]" placeholder="Confirm New Password *" />
            </div>
          </div>
          <div>
            <span className="text-success font-bold text-2xl">
              Strong
            </span>
          </div>
          <hr className="w-[100%] text-grayborder2 font-normal mt-[5%] mb-[5%]" />
          <div className=" w-[100%] h-[45px] flex justify-end">
            <span className="w-[30%] bg-[#b9b4b4] h-[50px] mr-[30px] rounded-2xl flex items-center justify-center">
              <button
              >
                Skip
              </button>
            </span>
            <span className="w-[30%] bg-[#516af8] h-[50px] rounded-2xl">
              <button
                className="w-[100%] h-[40px] text-white mt-[5px] font-bold"
              >
                Continue
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChooseNewPasswordContent;
