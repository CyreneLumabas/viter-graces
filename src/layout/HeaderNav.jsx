import Header from "@/layout/Header";
import Navigation from "@/layout/navigation/Navigation";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
const HeaderNav = ({ children, menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <Navigation menu={menu} submenu={submenu} />
      <Header />
      <div
        className={`wrapper overflow-x-hidden transform transition-all duration-300 ease-in-out py-5 bg-[#F6F7F9] dark:bg-[#0b111e] h-[93.5dvh] ${
          !store.isNavFullShow ? " pl-12 " : " pl-[220px] "
        } sm:pr-6 pr-0`}
      >
        {children}
      </div>
    </>
  );
};

export default HeaderNav;
