import { setIsSearch } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import {
  ChartColumn,
  DollarSign,
  LayoutDashboard,
  Leaf,
  Package,
  RotateCcw,
  Settings,
  ShoppingCart,
  Users,
  Warehouse,
} from "lucide-react";
import React from "react";

export const getNavList = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  // const handleSettingsOpen = () => {
  //   dispatch(setIsSettingsOpen(!store.isSettingsOpen));
  // };
  // const handleReportsOpen = () => {
  //   dispatch(setIsReportsOpen(!store.isReportsOpen));
  // };
  const onClickNav = () => {
    dispatch(setIsSearch(false));
  };

  let navItems = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard className="size-5" />,
      menu: "dashboard",
      path: `dashboard`,
      isOpenSubmenu: "",
      on_click: onClickNav,
      subList: [],
    },
    {
      label: "Products",
      icon: <Package className="size-5" />,
      menu: "products",
      path: `products`,
      isOpenSubmenu: "",
      on_click: onClickNav,
      subList: [],
    },
    {
      label: "Inventory",
      icon: <Warehouse className="size-5" />,
      menu: "inventory",
      path: `inventory`,
      isOpenSubmenu: "",
      on_click: onClickNav,
      subList: [],
    },
    {
      label: "Customers",
      icon: <Users className="size-5" />,
      menu: "customers",
      path: `customers`,
      isOpenSubmenu: "",
      on_click: onClickNav,
      subList: [],
    },
    {
      label: "Sales & Orders",
      icon: <ShoppingCart className="size-5" />,
      menu: "sales-orders",
      path: `sales-orders`,
      isOpenSubmenu: "",
      on_click: onClickNav,
      subList: [],
    },
    {
      label: "Returns",
      icon: <RotateCcw className="size-5" />,
      menu: "returns",
      path: `returns`,
      isOpenSubmenu: "",
      on_click: onClickNav,
      subList: [],
    },
    {
      label: "Finance",
      icon: <DollarSign className="size-5" />,
      menu: "finance",
      path: `finance`,
      isOpenSubmenu: "",
      on_click: onClickNav,
      subList: [],
    },
    {
      label: "Reports",
      icon: <ChartColumn className="size-5" />,
      menu: "reports",
      path: `reports`,
      isOpenSubmenu: "",
      on_click: onClickNav,
      subList: [],
    },
    {
      label: "Suppliers",
      icon: <Leaf className="size-5" />,
      menu: "suppliers",
      path: `suppliers`,
      isOpenSubmenu: "",
      on_click: onClickNav,
      subList: [],
    },
    {
      label: "Settings",
      icon: <Settings className="size-5" />,
      menu: "settings",
      path: `settings`,
      isOpenSubmenu: "",
      on_click: onClickNav,
      subList: [],
    },
    // {
    //   label: "Settings",
    //   icon: <Settings className="size-5" />,
    //   menu: "settings",
    //   path: ``,
    //   isOpenSubmenu: store.isSettingsOpen,
    //   on_click: handleSettingsOpen,
    //   sub_name: "Settings",
    //   subList: [
    //     {
    //       name: "Users",
    //       path: `settings/users`,
    //       submenu: "users",
    //     },
    //     {
    //       name: "Category",
    //       path: `settings/category`,
    //       submenu: "category",
    //     },
    //     {
    //       name: "Designation",
    //       path: `settings/designation`,
    //       submenu: "designation",
    //     },
    //     {
    //       name: "Community",
    //       path: `settings/community `,
    //       submenu: "community",
    //     },
    //     {
    //       name: "Notification",
    //       path: `settings/notification`,
    //       submenu: "notification",
    //     },
    //     {
    //       name: "Receipt Template",
    //       path: `settings/receipt-template`,
    //       submenu: "receipt-template",
    //     },
    //   ],
    // },
  ];

  return navItems;
};
