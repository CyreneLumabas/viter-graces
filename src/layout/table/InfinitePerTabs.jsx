import AddButton from "@/components/buttons/AddButton";
import NoData from "@/components/NoData";
import SearchBar from "@/components/SearchBar";
import ServerError from "@/components/ServerError";
import TableLoading from "@/components/spinners/TableLoading";
import { apiVersion } from "@/config/config";
import ActionButtonTable from "@/layout/ActionButtonTable";
import ModalAction from "@/layout/modal/ModalAction";
import TableDefaultStatusDot from "@/layout/TableDefaultStatusDot";
import { queryDataInfinite } from "@/services/queryDataInfinite";
import { setIsAdd } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import { getConvertStringToJSONparseData } from "@/utilities/getConvertStringToJSONparseData";
import { isEmptyItem } from "@/utilities/isEmptyItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useCallback, useMemo, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import InfinitePerTabsMobile from "./InfinitePerTabsMobile";
import InfiniteSubTable from "./InfiniteSubTable";
import { renderCellContent } from "./function-table";
import { getAdminDeveloperRole } from "@/utilities/roleValidation";

// Accessor keys rendered as their own bespoke block inside the collapsed
// row's detail panel (array-of-contacts / delivery) rather than the generic
// detail grid below - only shown when the caller's `columns` actually define
// them, so a module without these fields doesn't render empty labels.
const CONTACT_PERSON_ACCESSOR_KEY = "suppliers_contact_person";
const DELIVERY_ACCESSOR_KEY = "suppliers_delivery";

const InfinitePerTabs = ({
  columns,
  subColumnsTable,
  path,
  subPath,
  setItemEdit,
  setItemVal,
  isSearch = false,
  ishaveAdd = false,
  haveFilterTable = false,
  ishaveSubAdd = true,
  dataTestidAddButton,
  refetchOnWindowFocus = false,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [openRow, setOpenRow] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const search = React.useRef(null);
  const [onSearch, setOnSearch] = React.useState(false);
  const observer = useRef();

  // ACTIONS ADD
  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  const queryKey = useMemo(
    () => [path, store.isSearch, search.current?.value],
    [path, store.isSearch, search.current?.value],
  );

  // React Query infinite fetch
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        null,
        `${apiVersion}/${path}/page/${pageParam}`,
        false,
        { columnFilters: [], searchValue: search.current?.value || "", id: "" },
        "post",
      ),

    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return undefined;
    },
    refetchOnWindowFocus: refetchOnWindowFocus,
  });

  // Flatten pages into single array
  const tableData = useMemo(
    () => data?.pages?.flatMap((page) => page.data || []) ?? [],
    [data],
  );

  // Infinite scroll trigger
  const lastRowRef = useCallback(
    (node) => {
      if (isFetchingNextPage) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage],
  );

  // Table instance
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const rows = table?.getRowModel()?.rows;
  const isEmpty = status !== "pending" && rows?.length === 0;

  // The primary (collapsed-row) columns are whatever the caller flags with
  // `isPrimaryRow` - same "config drives layout" convention InfiniteTable
  // uses for its columns, so this table is reusable for any module, not just
  // suppliers. `isMobileTitle` (the existing convention shared with
  // InfiniteDefaultTableMobileCard/CustomerMobile) marks which one of those
  // also carries the expand/collapse toggle.
  const primaryHeaders = table
    ?.getHeaderGroups()?.[0]
    ?.headers?.filter((header) => header.column.columnDef.isPrimaryRow);

  const hasContactPersonColumn = columns?.some(
    (column) => column.accessorKey === CONTACT_PERSON_ACCESSOR_KEY,
  );
  const hasDeliveryColumn = columns?.some(
    (column) => column.accessorKey === DELIVERY_ACCESSOR_KEY,
  );

  return (
    <>
      <div className="sm:flex justify-between flex-row-reverse mb-3 gap-4 ">
        {ishaveAdd && (
          <div className="flex justify-end sm:mb-0! mb-3 ">
            <AddButton
              value={path?.replaceAll("-", " ")}
              onClick={handleAdd}
              testId={dataTestidAddButton}
            />
          </div>
        )}
        <div className={`w-full lg:max-w-1/4 `}>
          <SearchBar
            search={search}
            dispatch={dispatch}
            setOnSearch={setOnSearch}
            onSearch={onSearch}
            label={"Search..."}
          />
        </div>
      </div>

      <div className="relative rounded-xl overflow-auto z-0">
        <table className="overflow-visible md:border md:border-gray-300 dark:border-[#0b111e]">
          <thead className="hidden lg:table-header-group">
            <tr className="sticky top-0 uppercase dark:bg-[#0b111e] border-0! z-10">
              <th className="w-px">#</th>
              <th className="w-px"></th>
              <th className="w-px"></th>
              {primaryHeaders?.map((header) => (
                <th
                  key={header.id}
                  className={isEmptyItem(
                    header.column.columnDef.classTh,
                    "min-w-40",
                  )}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
              <th className="text-center w-[7rem]">Action</th>
            </tr>
          </thead>

          <tbody>
            {(status === "pending" || isEmpty) && (
              <tr>
                <td colSpan="100%" className="p-10">
                  {status === "pending" ? (
                    <TableLoading count={20} cols={3} />
                  ) : (
                    <NoData />
                  )}
                </td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan="100%" className="p-10">
                  <ServerError />
                </td>
              </tr>
            )}

            {rows?.map((row, index) => {
              const rowData = row.original;
              const isOpen = openRow === row.id;
              const arrayContact = getConvertStringToJSONparseData(
                rowData?.suppliers_contact_person,
              );
              const toggle = () => setOpenRow(isOpen ? null : row.id);
              const primaryCells = row
                .getVisibleCells()
                .filter((cell) => cell.column.columnDef.isPrimaryRow);

              return (
                <React.Fragment key={row.id}>
                  {/* DESKTOP ROW */}
                  <tr
                    className="hidden lg:table-row group"
                    data-testid="table-row"
                  >
                    <td className="text-center">{index + 1}.</td>
                    <td className="text-center">
                      <button
                        type="button"
                        onClick={toggle}
                        className="flex items-center justify-center cursor-pointer"
                        data-testid="button-open-customer-tab"
                      >
                        <FaCaretDown
                          className={`h-4 w-4 text-gray-600 dark:text-light font-bold transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </td>
                    <td>
                      <TableDefaultStatusDot dataArray={rowData} />
                    </td>
                    {primaryCells.map((cell) =>
                      cell.column.columnDef.isMobileTitle ? (
                        <td key={cell.id}>
                          <span className="text-sm font-medium text-gray-800 dark:text-light">
                            {rowData?.[cell.column.columnDef.accessorKey]}
                          </span>
                        </td>
                      ) : (
                        <td key={cell.id}>
                          {renderCellContent(cell, rowData, path)}
                        </td>
                      ),
                    )}
                    <td className="text-center">
                      {getAdminDeveloperRole(store) &&
                        columns
                          ?.filter((column) => column.accessorKey === "action")
                          .map((column) => (
                            <ActionButtonTable
                              key={column.accessorKey}
                              item={column}
                              dataArray={rowData}
                              setData={setData}
                              setItemEdit={setItemEdit}
                              path={path}
                            />
                          ))}
                    </td>
                  </tr>

                  {/* MOBILE ROW - reuses the existing mobile card unchanged */}
                  <tr className="table-row lg:hidden">
                    <td colSpan="100%" className="p-0!">
                      <InfinitePerTabsMobile
                        item={row}
                        rows={rows}
                        path={path}
                        index={index}
                        setItemEdit={setItemEdit}
                        setData={setData}
                        isOpen={isOpen}
                        setOpenRow={setOpenRow}
                        ishaveSubAdd={ishaveSubAdd}
                      />
                    </td>
                  </tr>

                  {/* EXPANDED DETAILS */}
                  {isOpen && (
                    <tr>
                      <td
                        colSpan="100%"
                        className="bg-[#F6F7F9] dark:bg-[#0b111e] border-t border-gray-200 dark:border-[#1f2b47] p-4"
                      >
                        <div className="grid xs:grid-cols-[1fr_1fr_1fr_12rem] gap-3 mb-3">
                          {columns
                            ?.filter(
                              (column) =>
                                !column.isPrimaryRow &&
                                column.accessorKey !== "action" &&
                                column.accessorKey !==
                                  CONTACT_PERSON_ACCESSOR_KEY &&
                                column.accessorKey !== DELIVERY_ACCESSOR_KEY,
                            )
                            .map((column) => {
                              const value = rowData?.[column.accessorKey];
                              const valItem = isEmptyItem(value, "none");
                              const link =
                                typeof column?.link === "function"
                                  ? column.link(value)
                                  : column?.link
                                    ? `${column.link}${value}`
                                    : "";
                              const externalLink =
                                link &&
                                !/^https?:\/\//i.test(link) &&
                                !/^mailto:/i.test(link) &&
                                !/^tel:/i.test(link)
                                  ? `https://${link}`
                                  : link;

                              return (
                                <div
                                  key={column.accessorKey}
                                  className="text-xs text-gray-500 dark:text-light mb-0 wrap-break-word"
                                >
                                  <small className="font-bold text-xs uppercase text-[9px]">
                                    {column?.header}
                                  </small>
                                  <br />
                                  <div className="flex gap-1 items-center">
                                    {column?.icon}
                                    {!column?.isHaveLink ||
                                    isEmptyItem(value, "") === "" ? (
                                      <span>{valItem}</span>
                                    ) : (
                                      <a
                                        href={externalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer hover:text-blue-600 hover:underline"
                                      >
                                        {valItem}
                                      </a>
                                    )}
                                  </div>
                                </div>
                              );
                            })}

                          {ishaveSubAdd && hasContactPersonColumn && (
                            <div className="text-xs text-gray-500 dark:text-light mb-0 wrap-break-word">
                              <small className="font-bold text-xs uppercase text-[9px]">
                                Other Contacts
                              </small>
                              <br />
                              <div className="gap-3">
                                {arrayContact?.map((gitem, gkey) => (
                                  <p key={gkey}>
                                    {gitem?.contact_name}{" "}
                                    {`(${gitem?.contact_phone})`}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}

                          {ishaveSubAdd && hasDeliveryColumn && (
                            <p className="text-xs text-gray-500 dark:text-light mb-0 wrap-break-word">
                              <small className="font-bold text-xs uppercase text-[9px]">
                                Delivery
                              </small>
                              <br />
                              <span className="flex gap-3">
                                {isEmptyItem(rowData?.suppliers_delivery, "-")}
                              </span>
                            </p>
                          )}

                          <p className="m-0!">
                            Notes:
                            <span className="ml-1">
                              {isEmptyItem(rowData?.notes, "")}
                            </span>
                          </p>
                        </div>

                        <InfiniteSubTable
                          columns={subColumnsTable}
                          className={`sm:overflow-auto max-h-[calc(93dvh-200px)] min-h-full`}
                          path={subPath}
                          data={rowData}
                          setItemEdit={setItemEdit}
                          isSearch={isSearch}
                          ishaveSubAdd={ishaveSubAdd}
                          haveFilterTable={haveFilterTable}
                          isDefaultMobile={path}
                          setItemVal={setItemVal}
                          refetchOnWindowFocus={refetchOnWindowFocus}
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}

            {/* Infinite-scroll sentinel - kept in normal flow (not
            hidden/table-row toggled per breakpoint like the rows above) so
            IntersectionObserver can actually measure it at any viewport
            width. */}
            {rows?.length > 0 && (
              <tr ref={lastRowRef}>
                <td colSpan="100%" className="p-0! h-px border-0!" />
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {store.isAction && (
        <ModalAction
          mysqlApiAction={`${apiVersion}/${path}/${dataItem?.path}`}
          msg={`Are you sure you want to ${dataItem?.action}`}
          successMsg={`${dataItem?.action} successfully.`}
          item={dataItem}
          queryKey={`${path}`}
        />
      )}
    </>
  );
};

export default InfinitePerTabs;
