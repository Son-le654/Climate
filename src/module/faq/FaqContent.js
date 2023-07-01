import { FaMapMarkerAlt, FaSortDown } from "react-icons/fa";
import FaqSearch from "./FaqContentComponent/FaqSearch";
import FaqList from "./FaqContentComponent/FaqList";
import FaqUserful from "./FaqContentComponent/FaqUserful";
import FaqSpecialty from "./FaqContentComponent/FaqSpecialty";
function FaqContent({ docList }) {
  return (
    <div className="flex w-[100%]">
      <div className="w-[75%] mr-[25px]">
        <div>
          <FaqSearch />
        </div>
        <div className="pt-16 bg-[#fff]">
          <FaqList docList={docList} />
        </div>
      </div>
      <div className="w-[25%] mt-[90px]">
        <div>
          <FaqSpecialty />
        </div>
        <div className="pt-[30px]">
          <FaqUserful />
        </div>
      </div>
    </div>
  );
}
export default FaqContent;
