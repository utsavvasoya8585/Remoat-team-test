import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav2 = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-[70%]  mx-auto pt-[14px] ">
      <div className="flex justify-between items-center px-[24px] h-[70px] rounded-[15px] z-40 bg-gradient-to-r from-[#ffffffd1] to-[#ffffffcc] backdrop-blur-md drop-shadow-sm shadow-[#0000000D] relative">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/assets/b-logo.png"
            alt="Logo"
            className="w-[22px] h-[22px]"
          />

          <p className="uppercase text-second"> VANDELAY INDUSTRIES</p>
        </div>
        <nav className="flex space-x-[29px]">
          <Link
            to={"/"}
            className="flex items-center gap-1 text-bgwhite hover:text-blue-500"
          >
            <img
              src="/assets/nav/b-dashboard.png"
              alt="Logo"
              className="w-[11px] h-[11px] "
            />
            <span className=" font-semibold text-second">DASHBOARD</span>
          </Link>
          <Link
            to={"/profile"}
            className="flex items-center gap-1 text-bgwhite hover:text-blue-500"
          >
            <img
              src="/assets/nav/b-profile.png"
              alt="Logo"
              className="w-[11px] h-[11px] "
            />
            <span className=" font-semibold text-second uppercase">
              profile
            </span>
          </Link>
          <Link
            to={"/register"}
            className="flex items-center gap-1 text-bgwhite hover:text-blue-500"
          >
            <img
              src="/assets/nav/b-sing-up.png"
              alt="Logo"
              className="w-[11px] h-[11px] "
            />
            <span className=" font-semibold text-second">SIGN UP</span>
          </Link>
          <Link
            to={"/login"}
            className="flex items-center gap-1 text-bgwhite hover:text-blue-500"
          >
            <img
              src="/assets/nav/b-login.png"
              alt="Logo"
              className="w-[11px] h-[11px] "
            />
            <span className=" font-semibold text-second">SIGN IN</span>
          </Link>
        </nav>
        <div className="z-10">
          <button className="bg-gradient-to-r from-[#313860] to-[#151928] text-[10px] text-myWhite font-[700] w-[150px] h-[35px] rounded-full">
            Free Download
          </button>
        </div>
        {/* <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#E6FFFA] via-[#E6FFFA80] to-transparent pointer-events-none rounded-[20px]" /> */}
      </div>
    </div>
  );
};

export default Nav2;
