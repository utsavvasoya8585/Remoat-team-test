import React, { use, useState } from "react";
import { MdMenu } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
const DNavbar = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const routerName = location.pathname;
  console.log(" isDrawerOpen:", isDrawerOpen);
  return (
    <div>
      <div className="flex justify-between items-center bg-bgGray ">
        <div className="ml-5 hidden lg:block">
          <h6 className="text-lightGray">
            Pages{" "}
            <span className="text-12 text-second font-[500]">
              / {routerName?.includes("tables") ? "Tables" : "Dashboard"}
            </span>
          </h6>
          <p className="text-second font-[700]">
            {routerName?.includes("tables") ? "Tables" : "Dashboard"}
          </p>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <MdMenu
            className="text-second text-[22px] lg:hidden mr-2"
            onClick={() => setIsDrawerOpen(true)}
          />
          <img
            src="/assets/b-logo.png"
            alt="Logo"
            className="w-[18px] h-[18px]"
          />

          <h6 className="uppercase text-second"> VANDELAY INDUSTRIES</h6>
        </div>
        <div className="flex items-center gap-x-[17px]">
          <div className="lg:flex items-center gap-2 relative hidden">
            <img
              src="/assets/dnav/search.png"
              alt="search"
              className="absolute ml-1 top-[11px]"
            />

            <input
              type="text"
              placeholder="Type here..."
              className="w-[200px] pl-8 h-[40px] border-[0.5px] border-[#E2E8F0] rounded-[15px] placeholder:text-lightGray placeholder:text-[12px] placeholder:font-[400] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <p
            className="flex items-center gap-1 text-bgwhite cursor-pointer "
            onClick={() => navigate("/login")}
          >
            <img
              src="/assets/dnav/person.png"
              alt="Logo"
              className="w-[12px] h-[12px] "
            />
            <h6 className=" text-[#718096] font-[700] ">Sign In</h6>
          </p>
          <img
            src="/assets/dnav/setting.png"
            alt="Logo"
            className="w-[12px] h-[12px] "
          />
          <img
            src="/assets/dnav/notification.png"
            alt="Logo"
            className="w-[12px] h-[12px] "
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-5 w-full relative lg:hidden ">
        <img
          src="/assets/dnav/search.png"
          alt="search"
          className="absolute ml-1 top-[11px]"
        />

        <input
          type="text"
          placeholder="Type here..."
          className="w-full pl-8 h-[40px] border-[0.5px] border-[#E2E8F0] rounded-[15px] placeholder:text-lightGray placeholder:text-[12px] placeholder:font-[400] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-[#000] bg-opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] md:w-[50%]  bg-myWhite z-50 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-5">
            <div className="flex items-center justify-center gap-2">
              <img
                src="/assets/b-logo.png"
                alt="Logo"
                className="w-[22px] h-[22px]"
              />
              <p className="uppercase font-[700] text-second">
                VANDELAY INDUSTRIES
              </p>
            </div>
            <button
              className="text-second text-xl"
              onClick={() => setIsDrawerOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Scrollable Sidebar Content */}
          <div className="flex-1 overflow-y-auto px-5 pb-5">
            <Sidebar
              setIsDrawerOpen={setIsDrawerOpen}
              isDrawerOpen={isDrawerOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DNavbar;
