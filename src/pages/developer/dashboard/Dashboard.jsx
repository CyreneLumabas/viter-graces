import DeveloperHeaderNav from "@/layout/developer/DeveloperHeaderNav";
import { StoreContext } from "@/store/StoreContext";
import { LayoutDashboard } from "lucide-react";
import React from "react";
const Dashboard = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <DeveloperHeaderNav>
        <div className="my-2 sm:pr-0 pr-6 bg-pink-500">
          <div className="flex items-center justify-between ">
            <h4 className="text-base ">Dashboard</h4>
            <h1 className="text-9xl text-center pt-20 dark:text-white">
              <LayoutDashboard className="text-9xl dark:text-white" /> DASHBOARD
            </h1>
          </div>
        </div>
      </DeveloperHeaderNav>
    </>
  );
};

export default Dashboard;
