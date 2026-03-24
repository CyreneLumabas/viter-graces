import { getUserType } from "@/components/helpers/functions-general";
import { StoreContext } from "@/store/StoreContext";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { getNavList } from "./function-nav";
import LogoSm from "../svg/LogoSm";
import LogoLg from "../svg/LogoLg";
import { setIsNavFullShow } from "@/store/StoreAction";
import { ChevronRight } from "lucide-react";

const Navigations = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  // const roleIsDev = store.credentials.data.role_code == "r_is_developer";
  const roleIsDev = "r_is_developer";
  const link = getUserType();
  const navWrapperRef = useRef(null);
  const hoverTimeout = useRef(null);
  const [hoverText, setHoverText] = React.useState("");
  const [hoverPos, setHoverPos] = React.useState(0);
  const [showHover, setShowHover] = React.useState(false);
  const [hoverItem, setHoverItem] = React.useState(null);
  const [submenuMaxHeight, setSubmenuMaxHeight] = React.useState(300);

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

  const handleHoverBoxEnter = () => {
    clearTimeout(hoverTimeout.current);
  };

  const handleHoverBoxLeave = () => {
    setHoverItem(null);
  };
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const handleShowNavigation = () => {
    dispatch(setIsNavFullShow(!store.isNavFullShow));
  };

  return (
    <>
      <div
        className={`${
          !store.isNavFullShow ? "-translate-x-56" : "translate-x-0!"
        } navigation transform transition-all duration-300 ease-in-out print:hidden z-999 `}
      >
        <div
          className={`${
            store.isNotifShow ? "h-[calc(100dvh-80px)]" : "h-[calc(100dvh-0px)]"
          } relative `}
        >
          <div
            ref={navWrapperRef}
            className="h-full bg-dark-bg overflow-y-auto overflow-x-hidden scrollbar-thin"
          >
            <div className="place-self-center py-4 border-b">
              {!store.isNavFullShow ? <LogoLg /> : <LogoSm />}
            </div>

            <nav className="flex flex-col mx-auto mt-3 w-[67px]">
              {getNavList().map((item, index) => {
                if (item.isDeveloper && !roleIsDev) return;
                const sharedClass = `relative group flex items-center justify-center h-7 mb-2 mx-auto py-5 px-3 ${
                  menu === item.menu
                    ? "rounded-lg bg-primary text-secondary"
                    : "text-white hover:bg-primary hover:text-secondary rounded-lg"
                }`;

                return item.path ? (
                  <Link
                    key={index}
                    to={`${link}/${item.path}`}
                    onMouseEnter={(e) => handleMouseEnter(e, item)}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={(e) => handleMouseEnter(e, item)}
                    className={sharedClass}
                  >
                    <span className="text-lg ">{item.icon}</span>
                  </Link>
                ) : (
                  <div
                    key={index}
                    onMouseEnter={(e) => handleMouseEnter(e, item)}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={(e) => handleMouseEnter(e, item)}
                    className={sharedClass}
                  >
                    <span className="text-lg ">{item.icon}</span>
                  </div>
                );
              })}
            </nav>

            <div className="absolute bottom-3">
              <div className="flex flex-col px-2 gap-3 ">
                <div className="flex gap-3 items-center">
                  <div className="flex bg-primary rounded-full justify-center items-center min-w-10 min-h-10 max-w-10 max-h-10 text-white pt-0.5 uppercase text-sm">
                    A
                  </div>
                </div>
                <div className="py-4 pl-1 pr-4  z-50 flex items-center gap-2 rounded-br-sm focus:outline-0 cursor-pointer duration-200 ease-in text-light border-t border-t-gray-500">
                  <button
                    onClick={handleShowNavigation}
                    className={`flex items-center gap-2 p-3 pl-1 w-full hover:rounded-lg hover:bg-primary hover:text-secondary`}
                  >
                    <ChevronRight
                      className={` hover:text-secondary  ${
                        !store.isNavFullShow && "rotate-180"
                      }`}
                      size={14}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {hoverItem && !hoverItem.subList?.length && (
            <div
              className={`absolute left-16 transition-all duration-300 my-0.5 whitespace-nowrap bg-primary text-white text-xs px-2 py-1 rounded shadow-md z-50 ${
                showHover
                  ? "group-hover:opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              style={{ top: hoverPos }}
            >
              {hoverText}
            </div>
          )}

          {/* Submenu */}

          {hoverItem &&
            hoverItem?.subList?.length > 0 &&
            hoverItem?.menu !== "system-info" && (
              <div
                className={`absolute left-16 z-99999 transition-all duration-500 ${
                  showHover
                    ? "group-hover:opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
                style={{ top: hoverPos }}
                onMouseEnter={handleHoverBoxEnter}
                onMouseLeave={handleHoverBoxLeave}
              >
                <div className="absolute left-[-15px] top-2 w-0 h-0 border-8 border-transparent border-r-primary"></div>

                <ul
                  className="bg-primary rounded shadow-lg w-44 py-3 text-xs overflow-y-auto  scrollbar-thin"
                  style={{ maxHeight: `${submenuMaxHeight}px` }}
                >
                  <li className="px-4 pb-2 text-[11px] text-white font-bold tracking-wider uppercase">
                    {hoverItem.sub_name}
                  </li>
                  {hoverItem.subList.map((subItem, subIndex) => (
                    <li key={subIndex} className="">
                      <Link
                        className={`block px-4 hover:bg-secondary-green/30 ${
                          submenu === subItem.submenu
                            ? " text-accent-light"
                            : " text-white"
                        }  `}
                        to={`${link}/${subItem.path}`}
                      >
                        <p className="border-l-2 border-transparent py-1">
                          {subItem.name}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default Navigations;
