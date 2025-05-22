import { useState } from "react";
import { Nav1 } from "../../other";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  return (
    <div className=" h-full flex flex-col">
      <div
        className="flex flex-col h-[520px] lg:m-[24px] m-[14px] bg-gray-100 rounded-xl relative bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/auth/main-bg.png')` }}
      >
        <Nav1 />
        <div className="relative ">
          <div className="pt-[55px] flex flex-col items-center justify-center">
            <h1 className="text-myWhite">Welcome!</h1>
            <p className="text-myWhite text-center max-w-[330px] mt-[8px]">
              Use these awesome forms to login or create new account in your
              project for free.
            </p>
          </div>

          <div className="bg-myWhite absolute mt-[66px] left-1/2 -translate-x-1/2 border border-[#E2E8F0] lg:w-[452px] lg:h-[710px] w-[90%] rounded-xl flex flex-col items-center pb-[20px] lg:pb-0">
            <h4 className="text-mywhite mt-[20px] lg:mt-[45px]">
              Register with
            </h4>
            <div className="flex justify-center items-center gap-[15px]  mt-[20px]">
              <div className="border border-[#E2E8F0] rounded-[15px] w-[75px] h-[75px] flex justify-center items-center cursor-pointer hover:bg-[#F7FAFC]">
                <img
                  src="/assets/auth/facebook.png"
                  alt="google"
                  className="w-[30px] h-[30px]"
                />
              </div>
              <div className="border border-[#E2E8F0] rounded-[15px] w-[75px] h-[75px] flex justify-center items-center cursor-pointer hover:bg-[#F7FAFC]">
                <img
                  src="/assets/auth/apple.png"
                  alt="google"
                  className="w-[30px] h-[30px]"
                />
              </div>
              <div className="border border-[#E2E8F0] rounded-[15px] w-[75px] h-[75px] flex justify-center items-center cursor-pointer hover:bg-[#F7FAFC]">
                <img
                  src="/assets/auth/google.png"
                  alt="google"
                  className="w-[30px] h-[30px]"
                />
              </div>
            </div>
            <h4 className="text-[#A0AEC0] mt-[20px] mb-[17px]">or</h4>
            <div className="w-[80%] text-left">
              <label className="text-second pl-1.5  ">Name</label>
              <input
                type="text"
                className="border border-[#E2E8F0] mt-[5px] placeholder:text-[#A0AEC0] rounded-[15px] w-full lg:h-[50px] h-[40px] lg:px-[20px] px-[14px] focus:outline-none focus:border-primary"
                placeholder="Your full name"
              />
              <div className="mt-[20px] ">
                <label className="text-second pl-1.5 ">Email</label>
                <input
                  type="text"
                  className="border border-[#E2E8F0] mt-[5px] placeholder:text-[#A0AEC0] rounded-[15px] w-full  lg:h-[50px] h-[40px] lg:px-[20px] px-[14px] focus:outline-none focus:border-primary"
                  placeholder="Your email address"
                />
              </div>
              <div className="mt-[20px]">
                <label className="text-second pl-1.5  ">Password</label>
                <input
                  type="text"
                  className="border border-[#E2E8F0] mt-[5px] placeholder:text-[#A0AEC0] rounded-[15px] w-full  lg:h-[50px] h-[40px] lg:px-[20px] px-[14px] focus:outline-none focus:border-primary"
                  placeholder="Your password"
                />
              </div>
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

              <button className="bg-primary hover:bg-primary/90  transition duration-300 ease-in-out  text-myWhite rounded-[12px] w-full h-[45px] font-[700] mt-[35px] text-[10px] ">
                SIGN UP
              </button>

              <div className="text-[#A0AEC0] text-center flex items-center justify-center gap-1 mt-[20px]">
                <p> Already have an account?</p>
                <p
                  className="text-primary text-[14px] cursor-pointer hover:underline"
                  onClick={() => {
                    navigate("/login");
                    console.log("clicked");
                  }}
                >
                  Sign in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[500px]"></div>
    </div>
  );
};

export default Register;
