import Header from "@/layout/Header";
import NavigationFullWidth from "@/layout/navigation/NavigationFullWidth";
import Navigations from "@/layout/navigation/Navigations";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
const HeaderNav = ({ children }) => {
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
        {children}
      </div>
    </>
  );
};

export default HeaderNav;
