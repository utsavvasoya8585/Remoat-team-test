import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Nav1 = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="lg:w-[70%] w-full px-3  lg:mx-auto pt-[34px] ">
      <div className="flex items-center justify-between gap-3  w-full h-[35px]">
        <MdMenu
          className="text-myWhite text-[22px] lg:hidden"
          onClick={() => setIsDrawerOpen(true)}
        />
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="lg:w-[22px] lg:h-[22px] w-[18px] h-[18px] "
          />

          <p className="uppercase text-myWhite"> VANDELAY INDUSTRIES</p>
        </div>
        <nav className=" space-x-[29px] hidden lg:flex">
          <Link to={"/"} className="flex items-center gap-1  ">
            <img
              src="/assets/nav/dashboard.png"
              alt="Logo"
              className="w-[11px] h-[11px] "
            />
            <span className=" font-semibold text-myWhite">DASHBOARD</span>
          </Link>
          <Link
            to={"/profile"}
            className="flex items-center gap-1 text-bgwhite hover:text-blue-500"
          >
            <img
              src="/assets/nav/profile.png"
              alt="Logo"
              className="w-[11px] h-[11px] "
            />
            <span className=" font-semibold text-myWhite uppercase">
              profile
            </span>
          </Link>
          <Link
            to={"/register"}
            className="flex items-center gap-1 text-bgwhite hover:text-blue-500"
          >
            <img
              src="/assets/nav/sing-up.png"
              alt="Logo"
              className="w-[11px] h-[11px] "
            />
            <span className=" font-semibold text-myWhite">SIGN UP</span>
          </Link>
          <Link
            to={"/login"}
            className="flex items-center gap-1 text-bgwhite hover:text-blue-500"
          >
            <img
              src="/assets/nav/sing-in.png"
              alt="Logo"
              className="w-[11px] h-[11px] "
            />
            <span className=" font-semibold text-myWhite">SIGN IN</span>
          </Link>
        </nav>
        <button className="bg-myWhite lg:w-[150px]  px-3 lg:px-0 h-[35px] text-[10px] font-[700] font-helvetica text-second rounded-full  hover:text-primary transition duration-300 ease-in-out">
          Free Download
        </button>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-[#000] bg-opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] md:w-[50%] bg-myWhite z-50 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex mt-[20px] flex-col gap-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src="/assets/b-logo.png"
                alt="Logo"
                className="w-[22px] h-[22px]"
              />

              <p className="uppercase font-[700] text-second">
                {" "}
                VANDELAY INDUSTRIES
              </p>
            </div>
            <button
              className="text-second self-end text-xl"
              onClick={() => setIsDrawerOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Nav items for mobile */}
          <nav className="flex flex-col mt-[20px] space-y-5">
            <Link
              to="/"
              className="flex items-center gap-2 text-second"
              onClick={() => setIsDrawerOpen(false)}
            >
              <img
                src="/assets/nav/b-dashboard.png"
                className="w-[18px] h-[18px]"
              />
              <span className="text-14 font-semibold">DASHBOARD</span>
            </Link>
            <Link
              to="/profile"
              className="flex items-center gap-2 text-second"
              onClick={() => setIsDrawerOpen(false)}
            >
              <img
                src="/assets/nav/b-profile.png"
                className="w-[18px] h-[18px]"
              />
              <span className="text-14 font-semibold uppercase">PROFILE</span>
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-2 text-second"
              onClick={() => setIsDrawerOpen(false)}
            >
              <img
                src="/assets/nav/b-sing-up.png"
              className="w-[18px] h-[18px]"
              />
              <span className="text-14 font-semibold">SIGN UP</span>
            </Link>
            <Link
              to="/login"
              className="flex items-center gap-2 text-second"
              onClick={() => setIsDrawerOpen(false)}
            >
              <img
                src="/assets/nav/b-login.png"
className="w-[18px] h-[18px]"
              />
              <span className="text-14 font-semibold">SIGN IN</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav1;
