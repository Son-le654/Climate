import SchedulesContenForAll from "module/schedules/SchedulesContenForAll";
import SchedulesContent from "module/schedules/SchedulesContent";
import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Assessment({doct}) {
  
  return (
    <div className="w-[77%] ml-[170px] mt-[80px] bg-white  flex justify-center">
      <SchedulesContenForAll email={doct?.email} role={doct?.role}></SchedulesContenForAll>
    </div>
  );
}
export default Assessment;
