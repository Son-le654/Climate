import React from "react";
import Logo from "../../components/Logo/Logo";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

const bookappointment = [
  {
    id: 1,
    to: "/dashboard",
    title: "Dashboard",
  },
  {
    id: 2,
    to: "/myappointments",
    title: "My Appointments",
  },
  {
    id: 3,
    to: "/book_appointment",
    title: "Book Appointments",
  },
];
const BookAppHeader = ({ storedName }) => {
  // console.log('====================================');
  // console.log(myData);
  // console.log('====================================');
  const navigate = useNavigate();

  const handleLogout = () => {
    //log out here
    localStorage.removeItem("token");
    navigate("/login-user")
  }

  return (

    <div className="max-w-[1156px] gap-[46px] mx-auto flex items-center pt-[45px]">
      <div>
        <Logo></Logo>
      </div>
      <nav className="home-nav">
        <ul>
          {bookappointment.length > 0 &&
            bookappointment.map((item) => {
              return (
                <>
                  <li key={item.id}>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : null)}
                      to={item.to}
                    >
                      {item.title}
                    </NavLink>

                  </li>

                </>
              );
            })}
        </ul>
      </nav>
      <div className="flex items-center gap-8" style={{marginLeft: "36rem"}}>

      <Button
        onClick={handleLogout}
        className="!p-[10px_40px] rounded-lg text-[18px]"
      >
        Logout
      </Button>


    </div>
    </div >
  );
};

export default BookAppHeader;
