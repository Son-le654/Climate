import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  FaGenderless,
  FaHospital,
  FaPhone,
  FaTransgender,
} from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";

export default function PatientList({ docList, searchname }) {
  const navigate = useNavigate();
  const [listOrigin, setListOrigin] = useState(docList);
  const [specList, setSpecList] = useState(docList);
  const [searchList, setSearchList] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  useEffect(() => {
    setListOrigin(docList);
    setSpecList(docList);
  }, [docList]);
  // console.log(listOrigin);
  // console.log(docList);

  useEffect(() => {
    if (searchname != undefined) {
      const places = async () => {
        // console.log(checkinSpec);
        // const response = await axios.get(publicPort + "spec/list");
        const findItemByName = (name) => {
          // return response.data.find((item) => item.name === name);
          if (name.sn == "") {
            return listOrigin;
          } else {
            return listOrigin.filter((item) =>
              item.name.toLowerCase().includes(searchname.sn.toLowerCase())
            );
          }
        };
        // console.log(place);
        // console.log(searchname);
        const selectedItem = findItemByName(searchname);
        // console.log(selectedItem);
        setSpecList(selectedItem);
      };
      places();
    }
  }, [searchname]);

  useEffect(() => {
    setSpecList(docList?.slice(indexOfFirstItem, indexOfLastItem));
  }, [itemsPerPage, currentPage]);

  const handleSearchInputChange = (event) => {
    let searchInput = event.target.value;
    if (searchInput === "") {
      setSpecList(listOrigin);
    } else {
      const filteredList = listOrigin.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSpecList(filteredList);
    }
  };

  const view_detail = (item) => {
    const id = item.email;
    console.log(id);
    navigate("/informationpatientstaff", { state: { id } });
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
  for (let i = 1; i <= Math.ceil(docList?.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div>
        {specList?.map((data) => (
          <div
            key={data.id}
            className=" w-[100%] h-[150px] mb-[20px] rounded-[15px]"
          >
            <div
              className="flex p-4 relative bg-white rounded-[15px] shadow-xl"
              key={data.id}
            >
              <div className="w-[15%] h-[120px] rounded-[15px] overflow-hidden mr-[30px] mt-2 ">
                <img className="w-[100%]" src={data.avatar} alt="avatar" />
              </div>
              <div className="w-[85%] pr-[20%]">
                <h1 className="font-semibold">{data.name}</h1>
                <div className="flex">
                  <div className="pr-[5px] text-5xl">
                    <FaTransgender />
                  </div>
                  <a className="text-2xl font-light ">{data.gender}</a>
                </div>
                <div className="flex pt-1">
                  <div className="pr-[10px] text-4xl">
                    <FaPhone />
                  </div>
                  <a className="text-2xl font-light">{data.phone}</a>
                </div>
                <div>
                  <span className="text-lg font-light">{data.address}</span>
                  <span className=" text-lg text-gradientLeft cursor-pointer">
                    <p onClick={() => view_detail(data)}> Read more</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="" style={{ textAlign: "center" }}>
        <div>
          {pageNumbers?.map((pageNumber) => (
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
