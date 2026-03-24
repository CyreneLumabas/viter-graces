import Header from "@/components/partials/Header";
import NavigationFullWidth from "@/components/partials/navigation/NavigationFullWidth";
import Navigations from "@/components/partials/navigation/Navigations";
import { StoreContext } from "@/store/StoreContext";
import { LayoutDashboard } from "lucide-react";
import React from "react";
const Dashboard = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <Navigations menu="dashboard" />
      <NavigationFullWidth menu="dashboard" />
      <Header />
      <div
        className={`wrapper overflow-x-hidden transform transition-all duration-300 ease-in-out ${
          store.isNavFullShow ? " pl-12 " : " pl-[220px] "
        } sm:pr-6 pr-0`}
      >
        <div className="my-2 sm:pr-0 pr-6 bg-pink-500">
          <div className="flex items-center justify-between ">
            <h4 className="text-base ">Dashboard</h4>
            <h1 className="text-9xl text-center pt-20 dark:text-white">
              <LayoutDashboard className="text-9xl dark:text-white" /> DASHBOARD
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
