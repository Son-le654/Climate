import React, { useState } from "react";
import { FaUserFriends } from 'react-icons/fa';
import { FiChevronDown } from "react-icons/fi";
import { FaHospital } from "react-icons/fa";
import { TbHomePlus } from "react-icons/tb";
import Tippy from "@tippyjs/react/headless";
import WrapperDoctorLookup from "../../../Popper/WrapperDoctorLookup";
import { useNavigate } from "react-router-dom";

const HomeDoctorLookupService = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const visibleItems = [
    {
      id: 1,
      item: "Internal Medicine"
    },
    {
      id: 2,
      item: "Pediatrics"
    },
    {
      id: 3,
      item: "Obstetrics and Gynecology"
    },
    // Rest of the visibleItems data
  ];

  const popperOptions = {
    modifiers: [
      {
        name: 'flip',
        enabled: false,
      },
    ],
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClickValue = (id) => {
    const selectItem = visibleItems.find((data) => data.id === id);
    setSelectedItem(selectItem);
    setInputValue(selectItem.item);
  };

  const navigate = useNavigate();

  const handleFind = () => {
    if (inputValue.trim() === "") {
      navigate("/faq");
    }
  };

  return (
    <div className="home-slider">
      <div>
        <h1 className=" mb-[12px] font-bold" style={{ fontSize: '38px' }}>
          Doctor lookup
        </h1>
        <div className="flex">
          <div className=" relative w-[37%]">
            <FaUserFriends className="absolute" style={{ fontSize: '15px', top: '14px', left: '15px', color: '#3A8EF6' }} />
            <input className="h-[45px] w-[100%] rounded-[15px] pl-[40px]" type="text" placeholder="Enter your name" />
          </div>
          <div className=" relative w-[37%] ml-[6%] mr-[7%]">
            <Tippy
              trigger="click"
              popperOptions={popperOptions}
              hideOnClick={true}
              interactive={true}
              placement="bottom"
              render={(attrs) => (
                <WrapperDoctorLookup>
                  <div className="w-[380px]" tabIndex={-1} {...attrs}>
                    {visibleItems.map((data) => (
                      <div
                        className="w-[100%] flex text-[#7f8790]"
                        key={data.id}
                        onClick={() => handleClickValue(data.id)}
                      >
                        <span className="w-[8%]">
                          <FaHospital className="text-3xl" />
                        </span>
                        <span className="w-[92%] mb-[5px]">
                          <h1 className="text-4xl">{data.item}</h1>
                        </span>
                      </div>
                    ))}
                  </div>
                </WrapperDoctorLookup>
              )}
            >
              <div className="relative w-[100%] ml-[6%] mr-[7%]">
                <TbHomePlus className="absolute" style={{ fontSize: '15px', top: '14px', left: '15px', color: '#3A8EF6' }} />
                <input
                  id="input"
                  value={inputValue}
                  onChange={handleInputChange}
                  onClick={() => {
                    setSelectedItem(null);
                    setInputValue("");
                  }}
                  className="h-[45px] w-[100%] rounded-[15px] pl-[40px]"
                  type="text"
                  placeholder="Select Medical Specialty"
                />
                <FiChevronDown
                  className="absolute"
                  style={{ fontSize: '22px', top: '12px', left: '88%', color: '#3A8EF6' }}
                />
              </div>
            </Tippy>
          </div>
          <button
            onClick={handleFind}
            className="w-[13%] bg-blue-700 h-[45px] rounded-[15px] text-white"
            style={{ backgroundColor: '#3A8EF6' }}
          >
            Find
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeDoctorLookupService;