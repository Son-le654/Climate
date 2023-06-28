import React from "react";
import Logo from "../../components/Logo/Logo";
import { NavLink, useNavigate } from "react-router-dom";
import EnsignAnh from "../../Images/anh.png";
import { IoMdArrowDropdown } from 'react-icons/io';
import AccountMenu from "../../Popper/menu/AccountMenu";
import { CiLogin } from 'react-icons/ci';
const HomeNav = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/faq",
    title: "Records",
  },
  {
    id: 3,
    to: "/book_appointment",
    title: "Book Appointment",
  },
];


const MENU_ITEMS = [
  {
    title: 'Account'
  },
  {
    title: 'Profile'
  },
  {
    title: 'Private session'
  },
  {
    title: 'Setting'
  },
  {
    title: 'Log out',
    icon: <CiLogin />,
    to: "/register"
  },
]

const HomeHeaderService = () => {
  const navigate = useNavigate();
  return (
    <header className="max-w-[1156px] gap-[46px] mx-auto flex items-center pt-[45px]">
      <div>
        <Logo></Logo>
      </div>
      <div className="flex items-center justify-between w-full">
        <nav className="home-nav">
          <ul>
            {HomeNav.length > 0 &&
              HomeNav.map((item) => {
                return (
                  <li key={item.id}>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : null)}
                      to={item.to}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </nav>
        {/* <AccountMenu
          items={MENU_ITEMS}
        >
          <div className=" relative flex h-[35px] !p-[5px_40px] bg-[#e2edff] rounded-2xl  " style={{ color: '#3f84f6', borderRadius: '20px' }} >
            <img className=" absolute rounded-full w-[24px] h-[24px] top-[6px] left-[4px]" src={EnsignAnh}></img>
            <div className="font-bold">nguyendinhphong</div>
            <div className="absolute top-[3px] left-[83%]"><IoMdArrowDropdown style={{ fontSize: '30px' }} /></div>
          </div>
        </AccountMenu> */}
      </div>
    </header>
  );
};

export default HomeHeaderService;
