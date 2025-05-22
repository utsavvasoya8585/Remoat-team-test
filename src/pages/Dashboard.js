import React, { useEffect, useState } from "react";
import { DNavbar, Sidebar } from "../other";

import {
  ActiveUsers,
  DashboardHeader,
  OrderOverView,
  ProjectTable,
  SalesOverview,
} from "../componets";
import Footer from "../other/Footer";
import { ActiveUserSkeleton } from "../shared";

const Dashboard = ({ setIsDrawerOpen, isDrawerOpen }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="flex justify-between gap-7 items-start bg-bgGray p-4">
        <div className="w-[16%] hidden lg:block ">
          <Sidebar setIsDrawerOpen={setIsDrawerOpen} />
        </div>
        <div className="lg:w-[83%] w-full bg-white">
          <DNavbar
            setIsDrawerOpen={setIsDrawerOpen}
            isDrawerOpen={isDrawerOpen}
          />
          <DashboardHeader />
          <div className="flex   flex-col lg:flex-row justify-between items-stretch gap-[24px]">
            <div className="bg-myWhite lg:w-[45%] w-full rounded-[15px]  shadow-subtle flex items-center justify-between p-3">
              {/* {loading ? <ActiveUserSkeleton /> : <ActiveUsers />} */}
              <ActiveUsers />
            </div>
            <div className="bg-myWhite lg:w-[55%] w-full rounded-[15px]  shadow-subtle flex items-center justify-between p-3">
              {/* {loading ? <ActiveUserSkeleton /> : <SalesOverview />} */}
              <SalesOverview />
            </div>
          </div>
          <div className="flex justify-between flex-col lg:flex-row items-strech mt-[24px] gap-[24px] h-full">
            <div className="bg-myWhite lg:w-[70%] w-full rounded-[15px]  shadow-subtle flex items-start justify-between p-3 h-full">
              {/* {loading ? <ActiveUserSkeleton /> :   <ProjectTable /> } */}
              <ProjectTable />
            </div>
            <div className="bg-myWhite lg:w-[30%] w-full rounded-[15px]  shadow-subtle flex items-center justify-between p-3">
              <OrderOverView />
            </div>
          </div>
          <div className="mt-[24px]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
