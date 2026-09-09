import { MultiSelectCheckboxFilter } from "@/components/inputs/InputSelect";
import { ActionTableList, ActiveInActiveStatus } from "@/layout/ArrayValue";
import HeaderNav from "@/layout/headers/HeaderNav";
import InfiniteTable from "@/layout/table/InfiniteTable";
import { StoreContext } from "@/store/StoreContext";
import { ProductOwnerIdOnly } from "@/utilities/productOwnerToken";
import React from "react";
import UpdateAccountsReceivableDetails from "./UpdateAccountsReceivableDetails";
import ViewAccountsReceivableDetails from "./ViewAccountsReceivableDetails";
import { MultiRangeAmountFilter } from "@/components/inputs/InputRangeFilter";
import { MultiRangeDateFilter } from "@/components/inputs/InputRangeFilter";

const AccountsReceivable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [isView, setView] = React.useState(false);

  const handleView = (item) => {
    setView(true);
    setItemEdit(item);
  };

  // Columns Pending, Due Soon, Due tomorrow, Due today, Overdue, Partial
  const columns = [
    {
      accessorKey: "status_text",
      header: "status",
      classTh: "min-w-40!",
      classTd: "",
      filterFn: "multiSelect",
      meta: {
        filterComponent: (column) => (
          <MultiSelectCheckboxFilter
            column={column}
            staticOptions={ActiveInActiveStatus("ar-finance").map(
              (option) => option.value,
            )}
            testFilterId={"filter-status"}
          />
        ),
      },
      status_option: ActiveInActiveStatus("ar-finance"),
    },
    {
      accessorKey: "sales_order_number",
      header: "Order #",
      classTh: "min-w-20!",
      classTd: "",
      meta: "",
    },
    {
      accessorKey: "sales_order_due_date",
      header: "Due date",
      classTh: "min-w-40",
      classTd: "",
      filterFn: "multiDateRange",
      meta: {
        filterComponent: (column) => (
          <MultiRangeDateFilter column={column} testFilterId={"filter-due-date"} />
        ),
      },
    },
    {
      accessorKey: "days_overdue",
      header: "Days Overdue",
      classTh: "min-w-40",
      classTd: "",
      filterFn: "multiRange",
      meta: {
        filterComponent: (column) => (
          <MultiRangeAmountFilter
            column={column}
            testFilterId={"filter-days-overdue"}
          />
        ),
      },
      cell: (info) => (Number(info.getValue()) > 0 ? info.getValue() : "-"),
    },
    {
      accessorKey: "sales_order_date",
      header: "Date",
      classTh: "min-w-40",
      classTd: "",
      filterFn: "multiDateRange",
      meta: {
        filterComponent: (column) => (
          <MultiRangeDateFilter column={column} testFilterId={"filter-sales-date"} />
        ),
      },
    },
    {
      accessorKey: "sales_order_customer_name",
      header: "Customers",
      classTh: "min-w-[10rem] ",
      classTd: "",
      isMobileTitle: true,
      filterFn: "multiSelect",
      meta: {
        filterComponent: (column) => (
          <MultiSelectCheckboxFilter
            column={column}
            path="customer/read-all-by-active"
            testFilterId={"filter-customer"}
          />
        ),
      },
    },
    {
      accessorKey: "sales_order_product_name",
      header: "Products",
      classTh: "min-w-[10rem] ",
      classTd: "",
      filterFn: "multiSelect",
      meta: {
        filterComponent: (column) => (
          <MultiSelectCheckboxFilter
            column={column}
            path="products/read-all-by-active"
            testFilterId={"filter-product-name"}
          />
        ),
      },
    },
    {
      accessorKey: "sales_order_qty",
      header: "Quantity",
      classTh: "min-w-40",
      classTd: "",
      meta: "",
    },
    {
      accessorKey: "sales_order_total_receivable_amount",
      header: "Amount",
      amount: true,
      classTh: "min-w-40",
      classTd: "",
      filterFn: "multiRange",
      meta: {
        filterComponent: (column) => (
          <MultiRangeAmountFilter column={column} testFilterId={"filter-amount"} />
        ),
      },
    },
    {
      accessorKey: "sales_order_paid_amount",
      header: "paid",
      amount: true,
      classTh: "min-w-40",
      classTd: "",
      filterFn: "multiRange",
      meta: {
        filterComponent: (column) => (
          <MultiRangeAmountFilter column={column} testFilterId={"filter-paid"} />
        ),
      },
    },
    {
      accessorKey: "sales_order_total_balance_amount",
      header: "balance",
      amount: true,
      classTh: "min-w-40",
      classTd: "",
      filterFn: "multiRange",
      meta: {
        filterComponent: (column) => (
          <MultiRangeAmountFilter column={column} testFilterId={"filter-balance"} />
        ),
      },
    },
    ...(Number(ProductOwnerIdOnly(store)) > 0
      ? [
          {
            accessorKey: "action",
            action_array: ActionTableList(
              "expenses",
              "finance_ar_product_owner",
            ),
            header: "Action",
            classTh: " text-center ",
            classTd: "opacity-100 group-hover:opacity-100 -right-3 pr-5 z-10 ",
          },
        ]
      : [
          {
            accessorKey: "action",
            action_array: ActionTableList("expenses", "finance-ar"),
            header: "Action",
            classTh: " text-center ",
            classTd: "opacity-100 group-hover:opacity-100 -right-3 pr-5 z-10 ",
          },
        ]),
  ];

  return (
    <>
      <HeaderNav menu={"finance"} activeTab="accounts-receivable">
        <InfiniteTable
          columns={columns}
          className={`sm:overflow-auto sm:h-[calc(100dvh-203px)] h-[calc(97dvh-250px)]`}
          path="finance-account-receivable"
          haveFilterTable={true}
          ishaveAdd={false}
          setItemEdit={setItemEdit}
        />
      </HeaderNav>
      {store.isAdd && <UpdateAccountsReceivableDetails itemEdit={itemEdit} />}
      {store.isView && <ViewAccountsReceivableDetails itemEdit={itemEdit} />}
    </>
  );
};

export default AccountsReceivable;
