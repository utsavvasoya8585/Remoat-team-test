import React from "react";
import { HiDotsVertical } from "react-icons/hi";
const ProjectTable = () => {
  const projects = [
    {
      name: "Chakra Soft UI Version",
      logo: "/assets/dashboard/icon1.svg",
      members: 5,
      avatars: [1, 2, 3, 4, 5],
      budget: "$14,000",
      completion: 60,
    },
    {
      name: "Add Progress Track",
      logo: "/assets/dashboard/icon2.svg",
      members: 2,
      avatars: [1, 2],
      budget: "$3,000",
      completion: 10,
    },
    {
      name: "Fix Platform Errors",
      logo: "/assets/dashboard/icon3.svg",
      members: 2,
      avatars: [1, 2],
      budget: "Not set",
      completion: 100,
    },
    {
      name: "Launch our Mobile App",
      logo: "/assets/dashboard/icon4.svg",
      members: 4,
      avatars: [1, 2, 3, 4],
      budget: "$32,000",
      completion: 100,
    },
    {
      name: "Add the New Pricing Page",
      logo: "/assets/dashboard/icon5.svg",
      members: 5,
      avatars: [1, 2, 3, 4, 5],
      budget: "$400",
      completion: 25,
    },
    {
      name: "Redesign New Online Shop",
      logo: "/assets/dashboard/icon6.svg",
      members: 2,
      avatars: [1, 2],
      budget: "$7,600",
      completion: 40,
    },
  ];
  return (
    <div className="bg-white w-full shadow-md rounded-lg p-5 ">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-[700] text-second mb-1">Projects</h4>
          <div className="flex items-center gap-2">
            <img
              src="/assets/tables/circle.png"
              alt="line"
              className="w-[15px] h-[15px]"
            />
            <p className="text-lightGray"> 30 done this month</p>
          </div>
        </div>
        <HiDotsVertical className="text-lightGray text-[20px] cursor-pointer" />
      </div>

      <table className="w-full text-left mt-[20px] hidden lg:table">
        <thead>
          <tr className="text-lightGray text-[10px] uppercase font-[700]">
            <th className="pb-2">Companies</th>
            <th className="pb-2">Members</th>
            <th className="pb-2">Budget</th>
            <th className="pb-2">Completion</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, idx) => (
            <tr key={idx} className="border-t border-[#E2E8F0] hover:bg-bgGray">
              <td className="py-[19px] flex items-center text-[14px] text-second font-[700] gap-2">
                <img
                  src={project.logo}
                  alt="logo"
                  className="w-[20px] h-[20px]"
                />
                {project.name}
              </td>
              <td className="py-[19px]">
                <div className="flex -space-x-2">
                  {project.avatars.map((id, i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/28?img=${id}`}
                      className="w-[20px] h-[20px] rounded-full border-2 border-myWhite"
                      alt="avatar"
                    />
                  ))}
                </div>
              </td>
              <td className="py-[19px] text-[14px] text-second font-[700]">
                {project.budget}
              </td>
              <td className="py-[19px]">
                <p className="text-[14px] font-[700] text-primary mt-1">
                  {project.completion}%
                </p>
                <div className="w-[90%] bg-lightGray rounded-full h-[3px] relative overflow-hidden">
                  <div
                    className="h-[3px] bg-primary rounded-full absolute top-0 left-0"
                    style={{ width: `${project.completion}%` }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 
<div className="lg:hidden space-y-4 mt-5">
  {projects.map((project, idx) => (
    <div
      key={idx}
      className="bg-white p-4 rounded-lg border border-[#E2E8F0] shadow-sm"
    >
      <div className="flex items-center gap-2 mb-2">
        <img src={project.logo} alt="logo" className="w-[20px] h-[20px]" />
        <span className="text-[14px] text-second font-[700]">{project.name}</span>
      </div>

      <div className="text-[12px] mb-1 text-gray-500 font-semibold">Members</div>
      <div className="flex -space-x-2 mb-2">
        {project.avatars.map((id, i) => (
          <img
            key={i}
            src={`https://i.pravatar.cc/28?img=${id}`}
            className="w-[20px] h-[20px] rounded-full border-2 border-myWhite"
            alt="avatar"
          />
        ))}
      </div>

      <div className="text-[12px] text-gray-500 font-semibold mb-1">Budget</div>
      <div className="text-[14px] text-second font-[700] mb-2">
        {project.budget}
      </div>

      <div className="text-[12px] text-gray-500 font-semibold mb-1">Completion</div>
      <div>
        <p className="text-[14px] font-[700] text-primary mb-1">
          {project.completion}%
        </p>
        <div className="w-full bg-lightGray rounded-full h-[3px] relative overflow-hidden">
          <div
            className="h-[3px] bg-primary rounded-full absolute top-0 left-0"
            style={{ width: `${project.completion}%` }}
          ></div>
        </div>
      </div>
    </div>
  ))}
</div> */}
      <div className="w-full overflow-x-auto mt-[20px] lg:hidden">
        <table className="min-w-[600px] w-full text-left">
          <thead>
            <tr className="text-lightGray text-[10px] uppercase font-[700]">
              <th className="pb-2">Companies</th>
              <th className="pb-2">Members</th>
              <th className="pb-2">Budget</th>
              <th className="pb-2">Completion</th>
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
                <td className="py-[19px]">
                  <div className="flex -space-x-2">
                    {project.avatars.map((id, i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/28?img=${id}`}
                        className="w-[20px] h-[20px] rounded-full border-2 border-myWhite"
                        alt="avatar"
                      />
                    ))}
                  </div>
                </td>
                <td className="py-[19px] text-[14px] text-second font-[700] whitespace-nowrap">
                  {project.budget}
                </td>
                <td className="py-[19px] whitespace-nowrap">
                  <p className="text-[14px] font-[700] text-primary mt-1">
                    {project.completion}%
                  </p>
                  <div className="w-[90%] bg-lightGray rounded-full h-[3px] relative overflow-hidden">
                    <div
                      className="h-[3px] bg-primary rounded-full absolute top-0 left-0"
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;
