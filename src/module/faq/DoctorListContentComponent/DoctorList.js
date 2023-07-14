import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FaQq, FaHospital } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { event } from "jquery";

// const settings = {
//   // dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

export default function DoctorList({ docList }) {
  const navigate = useNavigate();
  const [listOrigin, setListOrigin] = useState(docList);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  useEffect(() => {
    setListOrigin(docList);
  }, [docList]);
  console.log(listOrigin);
  console.log(docList);

  useEffect(() => {
    setListOrigin(docList.slice(indexOfFirstItem, indexOfLastItem));
  }, [itemsPerPage, currentPage]);

  const view_detail = (item) => {
    const id = item.id;
    console.log(id);
    navigate("/doctorinformation", { state: { id } });
  };

  const book_appointment = (item) => {
    console.log(item);
    navigate("/book_appointment", { state: { item } });
  };

  function handlePageClick(event, pageNumber) {
    event.preventDefault();
    setCurrentPage(pageNumber);
  }

  function handleItemsPerPageChange(event) {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  }

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(docList.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div>
        {listOrigin.map((data) => (
          <div
            key={data.id}
            className=" w-[100%] h-[150px] mb-[20px] rounded-[15px]"
          >
            <div
              className="flex p-4 relative bg-white rounded-[15px] shadow-xl"
              key={data.id}
            >
              <div className="w-[15%] h-[120px] rounded-[15px] overflow-hidden mr-[30px] mt-2 ">
                <img className="w-[100%]" src={data.avatar} alt="" />
              </div>
              <div className="w-[85%] pr-[20%]">
                <h1 className="font-semibold">{data.name}</h1>
                <div className="flex">
                  <div className="pr-[5px] text-5xl">
                    <IoIosSchool />
                  </div>
                  <a className="text-2xl font-light ">{data.education}</a>
                </div>
                <div className="flex pt-1">
                  <div className="pr-[10px] text-4xl">
                    <FaHospital />
                  </div>
                  <a className="text-2xl font-light">
                    {data.workingPlace.name}
                  </a>
                </div>
                <div>
                  <span className="text-lg font-light">Introduction</span>
                  <span className=" text-lg text-gradientLeft cursor-pointer">
                    <p onClick={() => view_detail(data)}> Read more</p>
                  </span>
                </div>
                <div className="absolute top-8 right-8">
                  <button
                    className=" bg-blue-700 w-[200px] h-[40px] rounded-[10px] text-white"
                    style={{ backgroundColor: "#3A8EF6" }}
                    onClick={() => book_appointment(data)}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="" style={{ textAlign: "center" }}>
        <div>
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={(event) => handlePageClick(event, pageNumber)}
              style={{ margin: "5px" }}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <div>
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value="1">1 per page</option>
            <option value="7">7 per page</option>
            <option value="10">10 per page</option>
          </select>
        </div>
      </div>
    </div>
  );
}
