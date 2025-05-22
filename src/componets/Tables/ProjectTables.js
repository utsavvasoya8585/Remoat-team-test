import React from "react";
import { HiDotsVertical } from "react-icons/hi";

const ProjectTables = () => {
  const projects = [
    {
      name: "Chakra Soft UI Version",
      logo: "/assets/dashboard/icon1.svg",
      status: "Working",
      budget: "$14,000",
      completion: 60,
    },
    {
      name: "Add Progress Track",
      logo: "/assets/dashboard/icon2.svg",
      status: "Canceled",
      budget: "$3,000",
      completion: 10,
    },
    {
      name: "Fix Platform Errors",
      logo: "/assets/dashboard/icon3.svg",
      status: "Done",
      budget: "Not set",
      completion: 100,
    },
    {
      name: "Launch our Mobile App",
      logo: "/assets/dashboard/icon4.svg",
      status: "Done",
      budget: "$32,000",
      completion: 100,
    },
    {
      name: "Add the New Pricing Page",
      logo: "/assets/dashboard/icon5.svg",
      status: "Working",
      budget: "$400",
      completion: 25,
    },
  ];
  return (
    <div className="bg-white w-full shadow-md rounded-lg p-5 ">
      <h4 className="font-[700] text-second mb-1">Projects</h4>
      <div className="flex items-center gap-2">
        <img
          src="/assets/tables/circle.png"
          alt="line"
          className="w-[15px] h-[15px]"
        />
        <p className="text-lightGray"> 30 done this month</p>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="min-w-[700px] w-full text-left mt-[20px]">
          <thead>
            <tr className="text-lightGray text-[10px] uppercase font-[700]">
              <th className="pb-2">Companies</th>
              <th className="pb-2">Budget</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Completion</th>
              <th className="pb-2"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, idx) => (
              <tr
                key={idx}
                className="border-t border-[#E2E8F0] hover:bg-bgGray"
              >
                <td className="py-[19px] flex items-center text-[14px] text-second font-[700] gap-2 whitespace-nowrap">
                  <img
                    src={project.logo}
                    alt="logo"
                    className="w-[20px] h-[20px]"
                  />
                  {project.name}
                </td>
                <td className="py-[19px] text-[14px] text-second font-[700] whitespace-nowrap">
                  {project.budget}
                </td>
                <td className="py-[19px] text-[14px] text-second font-[700] whitespace-nowrap">
                  {project.status}
                </td>
                <td className="py-[19px] whitespace-nowrap">
                  <p className="text-[14px] font-[700] text-primary mt-1">
                    {project.completion}%
                  </p>
                  <div className="w-[70%] bg-lightGray rounded-full h-[3px] relative overflow-hidden">
                    <div
                      className="h-[3px] bg-primary rounded-full absolute top-0 left-0"
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </td>
                <td className="py-4 text-left whitespace-nowrap">
                  <HiDotsVertical className="text-lightGray w-[20px] h-[20px] cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTables;
