import React from "react";

const Footer = ({ container }) => {
  return (
    <div className={`${container ? "container" : ""}`}>
      <div className="flex justify-between flex-col lg:flex-row lg:gap-0 gap-5  mb-4 items-center w-full h-[35px]">
        <h6 className="text-lightGray order-2 lg:order-1">
          © 2022, Made with Lorem for a better web
        </h6>
        <div className="flex items-center gap-[52px] order-1 lg:order-2">
          <h6 className="text-lightGray cursor-pointer hover:text-second transition-colors duration-300 ease-in-out">
            About Us
          </h6>

          <h6 className="text-lightGray cursor-pointer hover:text-second transition-colors duration-300 ease-in-out">
            Privacy
          </h6>
          <h6 className="text-lightGray cursor-pointer hover:text-second transition-colors duration-300 ease-in-out">
            Blog
          </h6>
          <h6 className="text-lightGray cursor-pointer hover:text-second transition-colors duration-300 ease-in-out">
            License
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
