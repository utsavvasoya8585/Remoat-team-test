import React, { useState } from "react";
import { Nav1, Nav2 } from "../../other";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="block lg:hidden absolute z-[999] w-full px-3">
        <Nav1 />
      </div>
      <div className="relative h-auto pb-10">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 w-[100%]">
          <div className="hidden lg:block">
            <Nav2 />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:w-[85%] w-full lg:float-end lg:justify-end justify-center mb-[100px] z-[1px]">
          <div
            className="lg:w-[50%] lg:h-[100vh] h-[40vh] lg:m-[0px] m-[14px] rounded-[12px] bg-cover bg-center bg-no-repeat lg:rounded-none lg:rounded-bl-[25px] relative order-1 lg:order-2"
            style={{ backgroundImage: "url('/assets/auth/login-main.png')" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/assets/auth/chakra.png"
                alt="login"
                className="lg:w-[350px] w-[120px] lg:h-[91px] object-contain"
              />
            </div>
          </div>
          <div className="lg:w-[50%] w-full flex items-center z-10 order-2 lg:order-1">
            <div className="flex flex-col w-full lg:w-[350px] mx-8 lg:mx-0 mt-5 ">
              <h1 className="text-primary text-center lg:text-left ml-1.5">
                Welcome Back
              </h1>
              <p className="text-lightGray text-center lg:text-left mt-[8px] mb-[35px] ml-1.5">
                Enter your email and password to sign in{" "}
              </p>
              <label className="text-second ml-1.5">Email</label>
              <input
                type="text"
                className="border border-[#E2E8F0] mt-[5px] mb-[24px] placeholder:text-[#A0AEC0] rounded-[15px] w-full h-[50px] px-[20px] focus:outline-none focus:border-primary"
                placeholder="Your email address"
              />
              <label className="text-second ml-1.5 ">Password</label>
              <input
                type="text"
                className="border border-[#E2E8F0] mt-[5px] placeholder:text-[#A0AEC0] rounded-[15px] w-full h-[50px] px-[20px] focus:outline-none focus:border-primary"
                placeholder="Your password"
              />
              <div className="mt-[24px]">
                <label className="inline-flex items-center me-5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <div className="relative w-11 h-6 bg-primary rounded-full peer-focus:ring-2 peer-focus:ring-primary peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-myWhite after:border-myWhite after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                  <h6 className="ms-3 text-[12px] font-[400] text-second">
                    Remember me
                  </h6>
                </label>
              </div>
              <button className="bg-primary text-myWhite rounded-[12px] w-full h-[45px] mt-[35px] text-[10px] font-[700] hover:bg-primary/90  transition duration-300 ease-in-out ">
                SIGN IN
              </button>

              <p className="text-[#A0AEC0] text-center flex items-center justify-center gap-1 mt-[20px]">
                Don't have an account?{" "}
                <p
                  className="text-primary text-[14px] cursor-pointer hover:underline"
                  onClick={() => navigate("/register")}
                >
                  Sign up
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
