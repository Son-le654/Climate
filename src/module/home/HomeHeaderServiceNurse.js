import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";
import { NavLink, useNavigate } from "react-router-dom";
import EnsignAnh from "../../Images/anh.png";
import { IoMdArrowDropdown } from "react-icons/io";
import AccountMenu from "../../Popper/menu/AccountMenu";
import { CiLogin } from "react-icons/ci";
import jwtDecode from "jwt-decode";
const HomeNav = [
  {
    id: 1,
    to: "/service",
    title: "Home",
  },
  {
    id: 2,
    to: "",
    title: "Appointment",
  },
  {
    id: 3,
    to: "",
    title: "Check-in",
  },
  {
    id: 4,
    to: "",
    title: "Lookup",
  },
];

const MENU_ITEMS = [
  {
    title: "Account",
  },
  {
    title: "Profile",
  },
  {
    title: "Private session",
  },
  {
    title: "Setting",
  },
  {
    title: "Log out",
    icon: <CiLogin />,
    to: "/register",
  },
];

const HomeHeaderServiceNurse = () => {
  const navigate = useNavigate();
  const storedName = localStorage.getItem("token");
  const [role, setRole] = useState("");
  const [nameInter, setnameInter] = useState("");
  useEffect(() => {
    try {
      const decoded = jwtDecode(storedName);
      const role = decoded.roles[0].authority;
      setRole(role);
      const nameuser = decoded.nameInternal;
      setnameInter(nameuser);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [visibleItem, setVisibleItem] = useState(null);
  const [visibleItem1, setVisibleItem1] = useState(null);
  const [visibleItem2, setVisibleItem2] = useState(null);

  const handleShow = (index) => {
    // setshow(!show);
    if (visibleItem === index) {
      setVisibleItem(null);
    } else {
      setVisibleItem(index);
      setVisibleItem1(null);
      setVisibleItem2(null);
    }
  };
  const handleShow1 = (index) => {
    // setshow(!show);
    if (visibleItem1 === index) {
      setVisibleItem1(null);
    } else {
      setVisibleItem(null);
      setVisibleItem1(index);
      setVisibleItem2(null);
    }
  };
  const handleShow2 = (index) => {
    // setshow(!show);
    if (visibleItem2 === index) {
      setVisibleItem2(null);
    } else {
      setVisibleItem(null);
      setVisibleItem1(null);
      setVisibleItem2(index);
    }
  };

  const handleAppointments = () => {
    window.location.href = "/appointments";
  };
  const handleAddAppointment = () => {
    window.location.href = "/book_appointment";
  };
  const handleCheckins = () => {
    window.location.href = "/checkin-list";
  };
  const handleAddCheckin = () => {
    window.location.href = "/checkin";
  };
  const handleDoctors = () => {
    // navigate("/login-user");
    window.location.href = "/listDoctorForAll";
  };
  const handlePatients = () => {
    // navigate("/login-user");
    window.location.href = "/listPatientForAll";
  };
  const handleNews = () => {
    window.location.href = "/newspage";
  };

  return (
    <header className="max-w-[1156px] gap-[46px] mx-auto flex items-center pt-[45px]">
      <div>
        <Logo></Logo>
      </div>
      <div className="flex items-center justify-between w-full">
        <nav className="home-nav">
          <ul>
            {HomeNav.length > 0 &&
              HomeNav.map((item, index) => {
                return (
                  <li key={item.id} style={{ display: "contents" }}>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : null)}
                      to={item.to}
                      onClick={() => {
                        switch (item.title) {
                          case "Appointment":
                            handleShow(index);
                            break;
                          case "Lookup":
                            handleShow1(index);
                            break;
                          case "Check-in":
                            handleShow2(index);
                            break;

                          default:
                            break;
                        }
                      }}
                    >
                      {item.title == "Lookup" ||
                      item.title == "Appointment" ||
                      item.title == "Check-in"
                        ? item.title + " ▽"
                        : item.title}

                      {visibleItem === index && (
                        <div
                          className=" w-[13%] mt-[5rem] ml-[-3rem]"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            borderRadius: "1rem",
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                            position: "absolute",
                            top: "5rem",
                            left: "43rem",
                          }}
                        >
                          <span
                            onClick={handleAppointments}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              margin: "1rem",
                            }}
                          >
                            <p>List of Appointment</p>
                          </span>

                          <span
                            onClick={handleAddAppointment}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              margin: "1rem",
                            }}
                          >
                            <p>Book Appointment</p>
                          </span>
                        </div>
                      )}

                      {visibleItem1 === index && (
                        <div
                          className=" w-[7%] mt-[5rem] ml-[-3rem]"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            borderRadius: "1rem",
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                            position: "absolute",
                            top: "5rem",
                            left: "73.2rem",
                          }}
                        >
                          <span
                            onClick={handleDoctors}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              margin: "1rem",
                            }}
                          >
                            <p>Doctor</p>
                          </span>
                          <span
                            onClick={handlePatients}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              margin: "1rem",
                            }}
                          >
                            <p>Patient</p>
                          </span>

                          <span
                            onClick={handleNews}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              margin: "1rem",
                            }}
                          >
                            <p>News</p>
                          </span>
                        </div>
                      )}

                      {visibleItem2 === index && (
                        <div
                          className=" w-[7%] mt-[5rem] ml-[-3rem]"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            borderRadius: "1rem",
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                            width: "18rem",
                            position: "absolute",
                            top: "5rem",
                            left: "60.2rem",
                          }}
                        >
                          <span
                            onClick={handleCheckins}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              margin: "1rem",
                            }}
                          >
                            <p>List of Examination</p>
                          </span>

                          <span
                            onClick={handleAddCheckin}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              margin: "1rem",
                            }}
                          >
                            <p>Add check-in</p>
                          </span>
                        </div>
                      )}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </nav>
        <AccountMenu items={MENU_ITEMS}>
          <div
            className=" relative flex h-[35px] !p-[5px_40px] bg-[#e2edff] rounded-2xl  "
            style={{ color: "#3f84f6", borderRadius: "20px" }}
          >
            <img
              className=" absolute rounded-full w-[24px] h-[24px] top-[6px] left-[4px]"
              src={EnsignAnh}
            ></img>
            <div className="font-bold">{nameInter}</div>
            <div className="absolute top-[3px] left-[83%]">
              <IoMdArrowDropdown style={{ fontSize: "30px" }} />
            </div>
          </div>
        </AccountMenu>
      </div>
    </header>
  );
};

export default HomeHeaderServiceNurse;
