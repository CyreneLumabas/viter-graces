import Header from "@/layout/Header";
import NavigationFullWidth from "@/layout/navigation/NavigationFullWidth";
import Navigations from "@/layout/navigation/Navigations";
import { StoreContext } from "@/store/StoreContext";
import { LayoutSettings } from "lucide-react";
import React from "react";
const Settings = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <Navigations menu="settings" />
      <NavigationFullWidth menu="settings" />
      <Header />
      <div
        className={`wrapper overflow-x-hidden transform transition-all duration-300 ease-in-out ${
          store.isNavFullShow ? " pl-12 " : " pl-[220px] "
        } sm:pr-6 pr-0`}
      >
        <div className="my-2 sm:pr-0 pr-6 bg-pink-500">
          <div className="flex items-center justify-between ">
            <h4 className="text-base ">Settings</h4>
            <h1 className="text-9xl text-center pt-20 dark:text-white">
              <LayoutSettings className="text-9xl dark:text-white" /> SETTINGS
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
