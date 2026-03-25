import {
  setError,
  setIsNavFullShow,
  setIsSearch,
  setScrollPosition,
  setSuccess,
} from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import { Bolt, ChevronRight } from "lucide-react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LogoLg from "../../assets/svg/LogoLg";
import { getNavList } from "./function-nav";
import { getUserType } from "@/utilities/GetUserType";

const NavigationFullWidth = ({ menu, submenu = null }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  // const roleIsDev = store.credentials.data.role_code == "r_is_developer";
  const roleIsDev = "r_is_developer";
  const link = getUserType();
  const isMobileOrTablet = window.matchMedia("(max-width:426px)").matches;
  const isDesktop = window.matchMedia("(max-width:1027px)").matches;
  const scrollRef = React.useRef(null);
  const navWrapperRef = React.useRef(null);
  const hoverTimeout = React.useRef(null);
  // NOTIFICATION
  const userManualRef = React.useRef(null);
  const workScheduleRef = React.useRef(null);
  const leaveAvailableRef = React.useRef(null);
  const [leaveAvailableHeight, setLeaveAvailableHeight] = React.useState(
    leaveAvailableRef?.current?.offsetTop,
  );
  const [workScheduleHeight, setWorkScheduleHeight] = React.useState(
    workScheduleRef?.current?.offsetTop,
  );
  const [userManualHeight, setUserManualHeight] = React.useState(
    userManualRef?.current?.offsetTop,
  );
  const [hoverText, setHoverText] = React.useState("");
  const [hoverPos, setHoverPos] = React.useState(0);
  const [showHover, setShowHover] = React.useState(false);
  const [hoverItem, setHoverItem] = React.useState(null);
  const [submenuMaxHeight, setSubmenuMaxHeight] = React.useState(300);

  const handleShowNavigation = () => {
    dispatch(setIsNavFullShow(!store.isNavFullShow));
  };

  const handleScroll = (e) => {
    // set notification whats new
    setUserManualHeight(userManualRef?.current?.offsetTop - e.target.scrollTop);
    setWorkScheduleHeight(
      workScheduleRef?.current?.offsetTop - e.target.scrollTop,
    );
    setLeaveAvailableHeight(
      leaveAvailableRef?.current?.offsetTop - e.target.scrollTop,
    );
    dispatch(setScrollPosition(e.target.scrollTop));
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoverItem(null);
    }, 200);
  };

  const handleMouseEnter = (e, item) => {
    clearTimeout(hoverTimeout.current);
    setHoverItem(item);
    setHoverText(` ${item.label}`);
    setShowHover(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const navRect = navWrapperRef.current.getBoundingClientRect();

    const top = rect.top - navRect.top;
    const availableSpace = window.innerHeight - rect.top - 20; // subtract for margin

    setHoverPos(top);
    setSubmenuMaxHeight(availableSpace);
  };

  React.useEffect(() => {
    dispatch(setIsSearch(false));
    dispatch(setSuccess(false));
    dispatch(setError(false));
    scrollRef.current?.scrollTo(0, store.scrollPosition);
  }, []);

  React.useEffect(() => {
    if (isMobileOrTablet === false && store.isNavFullShow) {
      dispatch(setIsNavFullShow(true));
    }
  }, [isMobileOrTablet === false && store.isNavFullShow]);

  return (
    <>
      <div className="print:hidden">
        <nav
          className={`transform transition-all duration-300 ease-in-out ${
            store.isNavFullShow ? "-translate-x-60" : "translate-x-0"
          }  fixed z-9999 overflow-y-auto w-60 print:hidden py-3 h-dvh scrollbar-thin px-2`}
          ref={scrollRef}
          onScroll={(e) => handleScroll(e)}
        >
          <div className=" h-[83dvh]" ref={navWrapperRef}>
            <div className="place-self-center py-4 border-b">
              <LogoLg />
            </div>
            <ul className="mt-3">
              {getNavList().map((item, key) => {
                if (item.isDeveloper && !roleIsDev) return;
                return item.subList.length == 0 &&
                  item?.menu !== "system-info" ? (
                  <li
                    key={key}
                    className={`${
                      menu === `${item.menu}`
                        ? "rounded-lg bg-primary text-secondary"
                        : "text-white hover:bg-primary hover:text-secondary rounded-lg"
                    } mb-2 pl-1`}
                    onClick={() => dispatch(setIsSearch(false))}
                  >
                    <Link
                      to={`${link}/${item.path}`}
                      className={
                        "w-full flex items-center p-2 justify-start tooltip-navigation"
                      }
                      onClick={handleShowNavigation}
                      data-tooltip={`${item.label}`}
                    >
                      <div className="flex items-center ">
                        <span
                          className={`${
                            menu === `${item.menu}`
                              ? " text-secondary hover:text-secondary"
                              : " "
                          } mr-2`}
                        >
                          {item.icon}
                        </span>
                        <span
                          className={`${
                            menu === `${item.menu}`
                              ? " text-white"
                              : "text-white"
                          } text-sm`}
                        >
                          {item.label}
                        </span>
                      </div>
                    </Link>
                  </li>
                ) : item?.menu === "system-info" ? (
                  <Fragment key={key}>
                    <li
                      onMouseEnter={(e) => handleMouseEnter(e, item)}
                      onMouseLeave={handleMouseLeave}
                      onTouchStart={(e) => handleMouseEnter(e, item)}
                      onClick={handleShowNavigation}
                      className={`mb-2 pl-1 cursor-pointer`}
                    >
                      <div
                        className={`w-full flex items-center px-2! py-1! justify-start tooltip-navigation`}
                      >
                        <span className="mr-2">{item.icon}</span>
                        <div className="flex justify-between items-center w-full">
                          <span className="text-xs">{item.label}</span>
                        </div>
                      </div>
                    </li>
                  </Fragment>
                ) : (
                  <Fragment key={key}>
                    <li
                      className={`${
                        menu === item.menu
                          ? "bg-secondary"
                          : "hover:bg-secondary/80"
                      } mb-2 cursor-pointer pl-1`}
                      onClick={item.on_click}
                    >
                      <div
                        className={
                          "w-full flex items-center justify-between px-2! py-1! tooltip-navigation "
                        }
                        data-tooltip="Payroll"
                      >
                        <span className="mr-2">{item.icon}</span>
                        <div className="flex justify-between items-center w-full">
                          <span className="text-xs">{item.label}</span>
                          <Bolt
                            className={`mr-2 ${
                              !item.isOpenSubmenu
                                ? "rotate-0 duration-200"
                                : "rotate-180 duration-200"
                            }`}
                          />
                        </div>
                      </div>
                    </li>
                    {item.isOpenSubmenu && (
                      <ul className="ml-9 mb-2 text-xs capitalize">
                        {item.subList.map((item, key) => {
                          return (
                            <li key={key}>
                              <Link
                                className={`${
                                  submenu === item.submenu
                                    ? "flex items-center justify-start border-white! "
                                    : "w-full flex items-center justify-start tooltip-navigation"
                                } py-0.5  w-full h-full px-1 my-0.5 mb-2 hover:border-white! duration-150 border-l-2! border-transparent rounded-r-md`}
                                to={`${link}/${item.path}`}
                                onClick={handleShowNavigation}
                              >
                                <span>{item.name}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </Fragment>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col pl-4 gap-3 ">
            <div className="flex gap-3 items-center">
              <div className="flex bg-primary rounded-full justify-center items-center min-w-10 min-h-10 max-w-10 max-h-10 text-white pt-0.5 uppercase text-sm">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-light">Richard Santos</span>
                <span className="uppercase">Admin</span>
              </div>
            </div>
            <div className="py-4 pl-1 pr-4  z-50 flex items-center gap-2 rounded-br-sm focus:outline-0 cursor-pointer duration-200 ease-in text-light border-t border-t-gray-500">
              <button
                onClick={handleShowNavigation}
                className={`flex items-center gap-2 py-2 pl-1 w-full hover:rounded-lg hover:bg-primary hover:text-secondary`}
              >
                <ChevronRight
                  className={` hover:text-secondary ${
                    !store.isNavFullShow && "rotate-180"
                  }`}
                  size={14}
                />
                <span className="text-light">Collapse</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavigationFullWidth;
