import axios from "axios";
import React, { useState, useEffect } from "react";
import { localPort } from "../../components/url/link";
import { BiSearch } from 'react-icons/bi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useRef } from "react";
import Slider from "react-slick";



function AppointmentsContent() {
  // const [sortedObjects, setSortedObjects] = useState([]);
  // const [listOrigin, setListOrigin] = useState([]);
  // // var listOrigin = [];
  // useEffect(() => {
  //   const listApp = async () => {
  //     try {
  //       const response = await axios.get(localPort + "appointment/listIncome");
  //       setListOrigin(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   listApp();
  //   // console.log(listOrigin);
  // }, []);

  // useEffect(() => {
  //   const sorted = listOrigin.sort(
  //     (a, b) => new Date(b.registerTime) - new Date(a.registerTime)
  //   );
  //   setSortedObjects(sorted);
  // }, [listOrigin]);
  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     status: true,
  //     pati: "phong nguyen",
  //     start: "1000000",
  //     date: "33333333333",
  //     pickappointments: "aaaaaa",
  //   },
  //   {
  //     id: 2,
  //     status: true,
  //     pati: "phong nguyen",
  //     start: "1000000",
  //     date: "33333333333",
  //     pickappointments: "aaaaaa",
  //   },
  //   {
  //     id: 3,
  //     status: true,
  //     pati: "phong nguyen",
  //     start: "1000000",
  //     date: "33333333333",
  //     pickappointments: "aaaaaa",
  //   },
  //   {
  //     id: 4,
  //     status: true,
  //     pati: "phong nguyen",
  //     start: "1000000",
  //     date: "33333333333",
  //     pickappointments: "aaaaaa",
  //   },
  //   {
  //     id: 5,
  //     status: true,
  //     pati: "phong nguyen",
  //     start: "1000000",
  //     date: "3333 ",
  //     pickappointments: "aaaaaa",
  //   },
  // ]);

  const listtitle = [
    {
      id: 1,
      title: 'No'
    },
    {
      id: 2,
      title: 'Patient Name'
    },
    {
      id: 3,
      title: 'Doctor Name'
    },
    {
      id: 4,
      title: 'Specialty'
    },
    {
      id: 5,
      title: 'Date'
    },
    {
      id: 6,
      title: 'Time'
    },
    {
      id: 7,
      title: 'Status'
    },
    {
      id: 8,
      title: 'View Details'
    },
  ]
  const initialListData = [
    {
      id: 1,
      name: "Nguyen Dinh Phong",
      nameDoctor: "Dr.Phong Nguyen",
      specialty: "Cardiology",
      date: "27-06-2023",
      time: '16:30:00',
      status: "Pending",
    },
    {
      id: 2,
      name: "Nguyen Dinh Phong",
      nameDoctor: "Dr.Phong Nguyen",
      specialty: "Cardiology",
      date: "27-06-2023",
      time: '16:30:00',
      status: "Pending",
    },
    {
      id: 3,
      name: "John Doe",
      nameDoctor: "Dr. John Doe",
      specialty: "Dermatology",
      date: "28-06-2023",
      time: '10:00:00',
      status: "Pending",
    },
    {
      id: 4,
      name: "Jane Smith",
      nameDoctor: "Dr. Jane Smith",
      specialty: "Orthopedics",
      date: "29-06-2023",
      time: '14:30:00',
      status: "Pending",
    },
    {
      id: 5,
      name: "Nguyen Dinh Phong",
      nameDoctor: "Dr.Phong Nguyen Dinh duong",
      specialty: "Cardiology",
      date: "27-06-2023",
      time: '16:30:00',
      status: "Approved",
    },
    {
      id: 6,
      name: "Nguyen Dinh Phong",
      nameDoctor: "Dr.Phong Nguyen",
      specialty: "Cardiology",
      date: "27-06-2023",
      time: '16:30:00',
      status: "Approved",
    },
    {
      id: 7,
      name: "Nguyen Dinh Phong",
      nameDoctor: "Dr.Phong Nguyen",
      specialty: "Cardiology",
      date: "27-06-2023",
      time: '16:30:00',
      status: "Approved",
    },
    {
      id: 8,
      name: "Nguyen Dinh Phong",
      nameDoctor: "Dr.Phong Nguyen",
      specialty: "Cardiology",
      date: "27-06-2023",
      time: '16:30:00',
      status: "Approved",
    },
    {
      id: 9,
      name: "Nguyen Dinh Phong",
      nameDoctor: "Dr.Phong Nguyen",
      specialty: "Cardiology",
      date: "27-06-2023",
      time: '16:30:00',
      status: "Cancel",
    },
    {
      id: 10,
      name: "Nguyen Dinh Phong",
      nameDoctor: "Dr.Phong Nguyen",
      specialty: "Cardiology",
      date: "27-06-2023",
      time: '16:30:00',
      status: "Cancel",
    },
    {
      id: 11,
      name: "Nguyen Dinh Phong",
      nameDoctor: "Dr.Phong Nguyen",
      specialty: "Cardiology",
      date: "27-06-2023",
      time: '16:30:00',
      status: "Cancel",
    },
    {
      id: 12,
      name: "Nguyen Dinh Phong",
      nameDoctor: "Dr.Phong Nguyen",
      specialty: "Cardiology",
      date: "27-06-2023",
      time: '16:30:00',
      status: "Cancel",
    },
    {
      id: 13,
      name: "Nguyen Dinh Phong",
      nameDoctor: "Dr.Phong Nguyen",
      specialty: "Cardiology",
      date: "27-06-2023",
      time: '16:30:00',
      status: "Cancel",
    },
    {
      id: 14,
      name: "Nguyen Dinh Phong",
      nameDoctor: "Dr.Phong Nguyen",
      specialty: "Cardiology",
      date: "27-06-2023",
      time: '16:30:00',
      status: "Cancel",
    },
    {
      id: 15,
      name: "Nguyen Dinh Phong",
      nameDoctor: "Dr.Phong Nguyen",
      specialty: "Cardiology",
      date: "27-06-2023",
      time: '16:30:00',
      status: "Cancel",
    },
  ]

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const slider = useRef();
  function next() {
    slider.current.slickNext();
  }
  function previous() {
    slider.current.slickPrev();
  }

  const [statusFilter, setStatusFilter] = useState("All");
  const [listData, setListData] = useState(initialListData);

  const handleFilter = (status) => {
    setStatusFilter(status);

    if (status === "All") {
      setListData(initialListData);
    } else {
      const filteredList = initialListData.filter(item => item.status === status);
      setListData(filteredList);
    }
  };
  const search = (p) => {

  }

  return (
    <div className="bg-white p-5 rounded-2xl shadow-2xl w-[100%] min-h-[500px]">
      <div>
        <span
          className={statusFilter === "All" ? "ml-[50px] font-bold text-3xl mr-[100px] text-gradientLeft " : "ml-[50px] font-bold text-3xl mr-[100px] text-[#c5c4c4]"}
          onClick={() => handleFilter("All")}
        >
          ALL
        </span>
        <span
          className={statusFilter === "Pending" ? "font-bold text-3xl mr-[100px] text-gradientLeft " : "font-bold text-3xl mr-[100px] text-[#c5c4c4]"}
          onClick={() => handleFilter("Pending")}
        >
          PENDING
        </span>
        <span
          className={statusFilter === "Cancel" ? "font-bold text-3xl mr-[100px] text-gradientLeft " : "font-bold text-3xl mr-[100px] text-[#c5c4c4]"}
          onClick={() => handleFilter("Cancel")}
        >
          CANCEL
        </span>
        <span
          className={statusFilter === "Approved" ? "font-bold text-3xl mr-[100px] text-gradientLeft " : "font-bold text-3xl mr-[100px] text-[#c5c4c4]"}
          onClick={() => handleFilter("Approved")}
        >
          APPROVED
        </span>
      </div>
      <div className="w-[100%] h-[50px]">
        <div className="mt-[40px] h-[50px] w-[30%] border-[1px] rounded-2xl flex border-[#c5c4c4] ml-[10px]">
          <button className="w-[15%]"><BiSearch className="text-[25px] ml-[13px] text-[#c5c4c4]" /></button>
          <input placeholder="Search" className="w-[83%] h-[100%] " onChange={(e) => search(e.target.value)} />
        </div>
      </div>
      <div className=" min-h-[550px]">
        <table>
          <thead className="h-[100px]">
            <tr className="text-[30px]" >
              {listtitle.map((data) => (
                <th key={data.id} className=" text-[#8d8b8b] w-[1%] text-center">{data.title}</th>
              ))}
            </tr>
          </thead>
        </table>
        <Slider ref={slider} {...settings}>
          <div key={1}>
            <table className="w-[100%]">
              <tbody className="w-[100%] h-[200px]">
                {listData.slice(0, 7).map((listD) => (
                  <tr className={`text-center  ${listD.id % 2 === 0 ? 'bg-white  ' : '  bg-[#e2edff] '}`}
                    key={listD.id}>
                    <td className="w-[10%]">{listD.id}</td>
                    <td className="w-[13%]">{listD.name}</td>
                    <td className="w-[15%]  ">{listD.nameDoctor}</td>
                    <td className="w-[12%]"><p>{listD.specialty}</p></td>
                    <td className="w-[13%]"><p className="ml-[20%]">{listD.date}</p></td>
                    <td className="w-[12%]">{listD.time}</td>
                    <td className="w-[12%]">
                      <p
                        className={`w-[70%] h-[30px] rounded-2xl ml-[14%] pt-[3px] text-white ${listD.status === 'Pending' ? 'bg-warning' : listD.status === 'Cancel' ? 'bg-error' : 'bg-success'}`}
                      >{listD.status}</p>
                    </td>
                    <td className="pb-[10px] pt-[10px]  w-[13%]">
                      <button className="w-[80%] h-[40px] bg-gradientLeft rounded-3xl text-white " >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div key={2}>
            <table>
              <tbody className="w-[100%] h-[200px]">
                {listData.slice(7).map((listD) => (
                  <tr className={`text-center  ${listD.id % 2 === 0 ? 'bg-white  ' : '  bg-[#e2edff] '}`}
                    key={listD.id}>
                    <td className="w-[10%]">{listD.id}</td>
                    <td className="w-[13%]">{listD.name}</td>
                    <td className="w-[15%]  ">{listD.nameDoctor}</td>
                    <td className="w-[12%]"><p>{listD.specialty}</p></td>
                    <td className="w-[13%]"><p className="ml-[20%]">{listD.date}</p></td>
                    <td className="w-[12%]">{listD.time}</td>
                    <td className="w-[12%]">
                      <p
                        className={`w-[70%] h-[30px] rounded-2xl ml-[14%] pt-[3px] text-white ${listD.status === 'Pending' ? 'bg-warning' : listD.status === 'Cancel' ? 'bg-error' : 'bg-success'}`}
                      >{listD.status}</p>
                    </td>
                    <td className="pb-[10px] pt-[10px]  w-[13%]">
                      <button className="w-[80%] h-[40px] bg-gradientLeft rounded-3xl text-white " >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Slider>
      </div>
      <div className="" style={{ textAlign: "center" }}>
        <button className="button text-[30px] w-10 h-10 bg-gradientLeft mr-[30px]" onClick={previous} >
          {/*  */}
          <MdKeyboardArrowLeft className="ml-[2px]" />
        </button>
        <button className="button text-[30px] w-10 h-10 bg-gradientLeft" >
          {/*  */}
          <MdKeyboardArrowRight className="ml-[3px]" onClick={next} />
        </button>
      </div>
    </div >
  );
}
export default AppointmentsContent;

{/* <div>

          <input type="button" onClick={() => setActive(!active)} value={"+"} />
          {active === true ? <>aaaaaaaaaaaaaaaa</> : <></>}
      </div> */}