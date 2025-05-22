import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaChartBar,
  FaCreditCard,
  FaFile,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import { IoIosRocket } from "react-icons/io";

const menuItems = [
  {
    icon: <FaHome className="text-[18px]" />,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: <FaChartBar className="text-[18px]" />,
    label: "Tables",
    path: "/tables",
  },
  {
    icon: <FaCreditCard className="text-[18px]" />,
    label: "Billing",
    path: "/billing",
  },
  {
    icon: <FiTool className="text-[18px]" />,
    label: "RTL",
    path: "/rtl",
  },
];

const AccountItem = [
  {
    icon: <FaUser className="text-[18px]" />,
    label: "Profile",
    path: "/profile",
  },
  {
    icon: <FaFile className="text-[18px]" />,
    label: "Sign In",
    path: "/login",
  },
  {
    icon: <IoIosRocket className="text-[18px]" />,
    label: "Sign Up",
    path: "/register",
  },
];

const Sidebar = ({ setIsDrawerOpen }) => {
  const location = window.location;
  return (
    <div className="mt-4">
      <div className="lg:flex items-center justify-center gap-2 hidden">
        <img
          src="/assets/b-logo.png"
          alt="Logo"
          className="w-[22px] h-[22px]"
        />
        <p className="uppercase font-[700] text-second">VANDELAY INDUSTRIES</p>
      </div>
      <div className="h-[1px] hidden lg:block mt-[24px] w-[105%] bg-gradient-to-r from-[#fff] via-[#E0E1E2] to-[#fff]" />

      <div className="space-y-[0] mt-[10px]">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-2xl transition group ${
                isActive ? "bg-myWhite shadow-subtle" : "hover:bg-myWhite "
              }`
            }
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${
                location.pathname === item.path
                  ? "bg-primary text-myWhite"
                  : "bg-myWhite text-primary group-hover:bg-primary group-hover:text-myWhite shadow"
              }`}
            >
              {item.icon}
            </div>
            <span
              className={`text-12 font-[700] transition ${
                location.pathname === item.path
                  ? "text-second"
                  : "text-lightGray group-hover:text-second"
              }`}
            >
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>

      <h6 className="text-second font-[700] mx-3 mt-[24px]">ACCOUNT PAGES</h6>

      <div className="space-y-[0] mt-[20px]">
        {AccountItem?.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-2xl transition group ${
                isActive ? "bg-myWhite shadow-subtle" : "hover:bg-myWhite"
              }`
            }
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${
                location.pathname === item.path
                  ? "bg-primary text-myWhite"
                  : "bg-myWhite text-primary group-hover:bg-primary group-hover:text-myWhite shadow"
              }`}
            >
              {item.icon}
            </div>
            <span
              className={`text-12 font-[700] transition ${
                location.pathname === item.path
                  ? "text-second"
                  : "text-lightGray group-hover:text-second"
              }`}
            >
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>

      <div
        className="mt-[24px] bg-center bg-no-repeat w-full bg-cover rounded-[15px] p-[15px] "
        style={{ backgroundImage: "url('/assets/sidebar/sidebar-bg-img.png')" }}
      >
        <div className="flex justify-between flex-col gap-y-[14px] h-full">
          <div className="bg-myWhite w-[35px] h-[35px] rounded-[12px] flex items-center justify-center">
            <img src="/assets/sidebar/question.png" alt="rocket" className="w-[24px]" />
          </div>
          <div>
            <h5 className="text-myWhite text-left font-[700] ">Need help?</h5>
            <h6 className="text-myWhite font-[400]">Please check our docs</h6>
          </div>
          <button className="bg-myWhite hover:bg-myWhite/80 text-second font-[700] text-[10px] rounded-[10px] px-3 h-[35px]">
            Documentation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
