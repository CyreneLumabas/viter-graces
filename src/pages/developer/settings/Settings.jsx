import HeaderNav from "@/layout/HeaderNav";
import TableDefaultPage from "@/layout/table/TableDefaultPage";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
const Settings = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  // theadList = [{ name: "cy" }];
  return (
    <>
      <HeaderNav menu={"settings"}>
        <TableDefaultPage
        // children={}
        // theadList = [],
        // result={},
        // dataItem = null,
        // classname = "",
        // ref = null,
        />
      </HeaderNav>
    </>
  );
};

export default Settings;
