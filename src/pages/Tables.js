import React from "react";
import { DNavbar, Sidebar } from "../other";
import { AuthTable, ProjectTable, ProjectTables } from "../componets";
import Footer from "../other/Footer";

const Tables = ({ isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <div className="flex justify-between gap-7 items-start bg-bgGray p-4">
      <div className="w-[16%] hidden lg:block ">
        <Sidebar
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      </div>
      <div className="lg:w-[83%] w-full">
        <DNavbar
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
        <div className="bg-myWhite w-full rounded-[15px]  shadow-subtle lg:p-3 mt-[24px]">
          <AuthTable />
        </div>
        <div className="bg-myWhite w-full rounded-[15px]  shadow-subtle lg:p-3 mt-[24px]">
          <ProjectTables />
        </div>
        <div className="mt-[24px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Tables;
