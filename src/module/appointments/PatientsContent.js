import axios from "axios";
import React, { useState, useEffect } from "react";
import { localPort, publicPort } from "../../components/url/link";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRef } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

function PatientsContent({ role, mail }) {
  const [sortedObjects, setSortedObjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [statusFilter, setStatusFilter] = useState("All");
  const [listData, setListData] = useState([]);
  const [listOrigin, setListOrigin] = useState([]);
  const navigate = useNavigate();
  const listtitle = [
    {
      id: 1,
      title: "No",
    },
    {
      id: 2,
      title: "Patient Name",
    },
    {
      id: 3,
      title: "Email",
    },
    {
      id: 4,
      title: "Gender",
    },
    {
      id: 5,
      title: "Phone",
    },
    {
      id: 6,
      title: "View Details",
    },
  ];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [inputValue, setInputValue] = useState("");
  const currentItems = listOrigin.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const listApp = async () => {
      try {
        let response;
        let response1;
        let id;

        response = await axios.get(publicPort + "patient/list");
        setListOrigin(response.data);
        setListData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    listApp();
  }, [mail, role]);

  useEffect(() => {
    setListData(listOrigin.slice(indexOfFirstItem, indexOfLastItem));
  }, [itemsPerPage, currentPage]);

  //   useEffect(() => {
  //     const sorted = listOrigin.sort(
  //       (a, b) => new Date(b.registerTime) - new Date(a.registerTime)
  //     );
  //     setSortedObjects(sorted);
  //   }, [listOrigin]);

  function handlePageClick(event, pageNumber) {
    event.preventDefault();
    setCurrentPage(pageNumber);
  }

  function handleItemsPerPageChange(event) {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  }

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(listOrigin.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleFilter = (status) => {
    setStatusFilter(status);

    if (status === "All") {
      setListData(listOrigin.slice(indexOfFirstItem, indexOfLastItem));
    } else {
      const filteredList = listOrigin.filter(
        (item) => item.commandFlag == status
      );
      setListData(filteredList.slice(indexOfFirstItem, indexOfLastItem));
    }
  };

  const handleSearchInputChange = (event) => {
    let searchInput = event.target.value;
    setInputValue(searchInput);
    if (searchInput === "") {
      setListData(listOrigin);
    } else {
      const filteredList = listOrigin.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setListData(filteredList);
    }
  };

  const handleDetail = (appointment) => {
    console.log(appointment);
    // navigate("/appointmentdetailsfornurse", { state: { appointment } });
  };
  const handleCheckin = (appointment) => {
    console.log(appointment);
    // navigate("/checkin", { state: { appointment } });
  };
  return (
    <div className="bg-white p-5 rounded-2xl shadow-2xl w-[100%] min-h-[500px]">
      <div className="w-[100%] h-[50px]">
        <div className="mt-[40px] h-[50px] w-[30%] border-[1px] rounded-2xl flex border-[#c5c4c4] ml-[10px]">
          <button className="w-[15%]">
            <BiSearch className="text-[25px] ml-[13px] text-[#c5c4c4]" />
          </button>
          <input
            placeholder="Search"
            className="w-[83%] h-[100%] "
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
      <div className=" min-h-[550px]">
        <table>
          <thead className="h-[100px]">
            <tr className="text-[30px]">
              {listtitle.map((data) => (
                <th
                  key={data.id}
                  className=" text-[#8d8b8b] w-[1%] text-center"
                >
                  {data.title}
                </th>
              ))}
            </tr>
          </thead>
        </table>
        <div>
          <table className="w-[100%]">
            <tbody className="w-[100%] h-[200px]">
              {listData.map((listD) => (
                <tr
                  className={`text-center  ${
                    listD.id % 2 === 0 ? "bg-white  " : "  bg-[#e2edff] "
                  }`}
                  key={listD.id}
                >
                  <td className="w-[10%]">{listD.id}</td>
                  <td className="w-[13%]">{listD.name}</td>
                  <td className="w-[13%]">{listD.email}</td>
                  <td className="w-[13%]">{listD.gender}</td>
                  <td className="w-[13%]">{listD.phone}</td>

                  <td className="pb-[10px] pt-[10px]  w-[13%]">
                    <button
                      className="w-[80%] h-[40px] bg-gradientLeft rounded-3xl text-white "
                      onClick={() => handleDetail(listD)}
                    >
                      View Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="" style={{ textAlign: "center" }}>
        {/* <button className="button text-[30px] w-10 h-10 bg-gradientLeft mr-[30px]">
          <MdKeyboardArrowLeft className="ml-[2px]" />
        </button>

        <button className="button text-[30px] w-10 h-10 bg-gradientLeft">
          <MdKeyboardArrowRight className="ml-[3px]" />
        </button> */}

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
            <option value="3">3 per page</option>
            <option value="7">7 per page</option>
            <option value="10">10 per page</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default PatientsContent;
