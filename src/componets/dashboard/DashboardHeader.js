import React from "react";
import { FaArrowRight } from "react-icons/fa";

const DashboardHeader = () => {
  const stats = [
    {
      icon: "/assets/dashboard/d-icon1.png",
      label: "Today's Money",
      value: "$53,000",
      change: "+55%",
      isPositive: true,
    },
    {
      icon: "/assets/dashboard/d-icon2.png",
      label: "Today's Users",
      value: "2,300",
      change: "+5%",
      isPositive: true,
    },
    {
      icon: "/assets/dashboard/d-icon3.png",
      label: "New Clients",
      value: "+3,052",
      change: "-14%",
      isPositive: false,
    },
    {
      icon: "/assets/dashboard/d-icon4.png",
      label: "Total Sales",
      value: "$173,000",
      change: "+8%",
      isPositive: true,
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-[24px] mt-[24px] ">
        {stats.map((stat, index) => (
          <div className="bg-myWhite w-full rounded-[15px] h-[80px] shadow-subtle flex items-center justify-between px-4">
            <div
              key={index}
              className="flex items-center justify-between gap-4 w-full text-second font-[700]"
            >
              <div>
                <h6 className=" text-lightGray">{stat.label}</h6>
                <div className="flex items-center gap-2">
                  <h4 className="">{stat.value}</h4>
                  <p
                    className={` ${
                      stat.isPositive ? "text-darkGreen" : "text-[#E53E3E]"
                    }`}
                  >
                    {stat.change}
                  </p>
                </div>
              </div>
              <div className="w-[45px] h-[45px] bg-primary rounded-[12px] flex items-center justify-center  shadow-subtle ">
                <img src={stat.icon} alt="icon" className="w-[22px] h-[22px]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full lg:flex-row flex-col justify-between items-stretch gap-[24px] my-[24px] ">
        <div className="lg:w-[63%] bg-myWhite rounded-[15px] p-[15px] shadow-subtle flex lg:flex-row flex-col gap-5 lg:gap-0 justify-between ">
          <div className="lg:w-2/3  text-second font-[700] flex flex-col justify-between">
            <div>
              <h6 className="text-[700] text-lightGray ">
                Built by developers
              </h6>

              <h4 className="text-second font-[700] mt-[3px]">
                Purity UI Dashboard
              </h4>
              <p className="text-lightGray mt-[3px] font-[400] w-[70%]">
                From colors, cards, typography to complex elements, you will
                find the full documentation.
              </p>
            </div>
            <div className="flex items-center gap-2 ]">
              <span className="text-second font-[700]">Read more</span>
              <img
                src="/assets/dashboard/arrow-right.png"
                alt="arrow"
                className="w-[12px] h-[12px]"
              />
            </div>
          </div>
          <div className="lg:w-1/3 flex items-center justify-between gap-4 text-second font-[700]">
            <img
              src="/assets/dashboard/dashboard-img.png"
              alt="icon"
              className="w-full h-auto object-contain "
            />
          </div>
        </div>
        <div className="lg:w-[37%] bg-myWhite rounded-[15px] p-[15px]  shadow-subtle">
          <div
            className="bg-center bg-cover bg-no-repeat rounded-[12px] w-full h-full"
            style={{
              backgroundImage: "url('/assets/dashboard/rocket.png')",
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col justify-between lg:h-full h-[200px] p-4">
              <div>
                <h4 className="text-myWhite">Work with the Rockets</h4>
                <h6 className="text-myWhite font-[400] w-[70%]">
                  Wealth creation is an evolutionarily recent positive-sum game.
                  It is all about who take the opportunity first.{" "}
                </h6>
              </div>
              <span className="text-myWhite font-[700]">
                Read more
                <FaArrowRight className="inline-block text-myWhite ml-2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
