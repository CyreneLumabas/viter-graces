import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { Link } from "react-router-dom";

// Louren, Emman, Cyxy
export const urlPath = "http://localhost/react-vite/viter-graces";
export const urlPathGRACES = "https://www.graces.org";
export const folderName = `/public`;
export const apiVersion = `/v1`;

export const devApiUrl = `${urlPath}/rest`;
export const devBaseImgUrl = `${urlPath}${folderName}/img`;
export const devBaseUrl = `${urlPath}`;
export const devWebUrl = "/";
export const devNavUrl = "/portal";

export const setTimeZone = "Asia/Taipei";
export const UrlDeveloper = "developer";
export const isDemoMode = 0;
export const dollarSign = <span>&#x24;</span>;
export const googleThumbnailLink = "https://drive.google.com/thumbnail?id=";
export const googleHDViewLink = "https://lh3.googleusercontent.com/d/";
export const googleViewLink = "https://drive.google.com/file/d/";

// dev key
export const devKey =
  "$2a$12$5obsBD1n0We9BIAM01RJy.4F0t4W2KmMPJppAur2eY1tmpG4y87vO";

// reCAPTCHA site key TEST
export const siteKey = "6Ldaj2wrAAAAAN_xFAKXnbPGpy9C8y41GXR0_2WT";

export const pesoSign = <span> &#8369; </span>;

// console log values
export const consoleLog = (values, param2 = null) => {
  console.log(values, param2);
};

// Copyright year
export const copyrightYear = () => {
  return getDateNow().split("-")[0];
};

// format the numbers separated by comma
export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// format the numbers separated by comma
export const numberWithCommasToFixed = (item, x) => {
  let result = "0.00";

  if (typeof item !== "undefined" && item !== "") {
    result = numberWithCommas(Number(item).toFixed(x));
  }
  return result;
};

// format the numbers separated by comma
export const isEmptyItem = (item, x = "") => {
  let result = x;

  if (typeof item !== "undefined" && item !== "") {
    result = item;
  }
  return result;
};
export const isBookingNullAndCancelled = (item, x = "") => {
  let result = false;

  if (item !== null && item !== "" && item !== cancelledStatus) {
    result = true;
  }
  return result;
};

export const isNumberEmptyItem = (item, x = "", decimal = 0) => {
  let result = x;

  if (!isNaN(item) && item !== "" && item !== null) {
    result = Number(item).toFixed(Number(decimal));
  }
  return result;
};

// format the numbers separated by comma
export const isDefaultEmpty = (item, newItem = "", x = "") => {
  let result = x;

  if (typeof item !== "undefined" && item !== "") {
    result = newItem;
  }
  return result;
};

// get the url id parameter
export const getUrlParam = (id) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  // const param = urlParams.get(id);
  // return param;
  return urlParams;
};

// storage after login
export function setStorageRoute(jwt) {
  localStorage.setItem("gracestoken", JSON.stringify({ token: jwt }));
}

// formatting date
export const computedAge = (dateVal) => {
  let result = "--";
  let currentDate = new Date();
  let bday = new Date(dateVal);

  if (typeof dateVal !== "undefined" && dateVal !== "") {
    const birthYear = bday.getFullYear();
    const year = currentDate.getFullYear();
    return `${year - birthYear}`;
  }

  return result;
};

export const formatDateRange = (sDateVal, eDateVal, val = "", format = "") => {
  let formatedDateTime = val;
  let formatedDate = val;
  let formatedTime = val;
  let startDateTime = "";
  let endDateTime = "";
  let startDate = "";
  let startTime = "";
  let endTime = "";
  let endDate = "";
  if (typeof sDateVal !== "undefined" && sDateVal !== "") {
    // formatting date
    const event = new Date(sDateVal);

    startTime = event.toLocaleString("en", options("time"));
    startDateTime = `${event.toLocaleString("en", options(""))} ${startTime}`;
    startDate = event.toLocaleString("en", options(""));
  }
  if (typeof eDateVal !== "undefined" && eDateVal !== "") {
    // formatting date
    const event = new Date(eDateVal);

    endTime = event.toLocaleString("en", options("time"));
    endDateTime = `${event.toLocaleString("en", options(""))} ${endTime}`;
    endDate = event.toLocaleString("en", options(""));
  }

  if (startDateTime !== "" && endDateTime !== "" && format === "dateTime") {
    formatedDateTime = `${startDateTime} - ${endDateTime}`;
    return formatedDateTime;
  }
  if (startDateTime !== "" && endDateTime !== "" && format === "date") {
    formatedDate = `${startDate} - ${endDate}`;
    return formatedDate;
  }
  if (startDateTime !== "" && endDateTime !== "" && format === "time") {
    formatedTime = `${startTime} - ${endTime}`;
    return formatedTime;
  }
  return formatedDate;
};

export const formatDate = (dateVal, val = "", format = "") => {
  const formatedDate = val;
  if (typeof dateVal !== "undefined" && dateVal !== "") {
    // formatting date
    const event = new Date(dateVal);

    return event.toLocaleString("en", options(format));
  }
  return formatedDate;
};

// formatting date and time
export const options = (format = "") => {
  const options =
    format == "time-only"
      ? {
          timeZone: setTimeZone,
          hour: "numeric", // Display hour
          minute: "2-digit", // Display minute with leading zero if needed
          hour12: true, // Enable 12-hour format with AM/PM
        }
      : format == "datetime"
        ? {
            timeZone: setTimeZone,
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric", // Display hour
            minute: "2-digit", // Display minute with leading zero if needed
            hour12: true, // Enable 12-hour format with AM/PM
          }
        : format == "time"
          ? {
              timeZone: setTimeZone,
              hour: "numeric", // Display hour
              minute: "2-digit", // Display minute with leading zero if needed
              hour12: true, // Enable 12-hour format with AM/PM
            }
          : format == "dateWithWeekName"
            ? {
                timeZone: setTimeZone,
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              }
            : {
                timeZone: setTimeZone,
                month: "long",
                day: "numeric",
                year: "numeric",
              };

  return options;
};

// formatting date and time
export const formatDateTime = (dateVal) => {
  const d = new Date(dateVal);
  const year = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();
  const day = d.getDay();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const hour = d.getHours();
  const minute = d.getMinutes();
  const hourFormatted = hour % 12 || 12; // hour returned in 24 hour format
  const minuteFormatted = minute < 10 ? "0" + minute : minute;
  const morning = hour < 12 ? "AM" : "PM";

  return `${days[day]} ${months[month]} ${date}, ${year}${
    `${hourFormatted}:${minuteFormatted} ${morning}` === "12:00 AM"
      ? ""
      : `, ${hourFormatted}:${minuteFormatted} ${morning}`
  } `;
};

// get focus on a button
export const GetFocus = (id) => {
  React.useEffect(() => {
    const obj = document.getElementById(id);
    obj.focus();
  }, []);
};

// get user type
export const getUserType = () => {
  const { store } = React.useContext(StoreContext);

  let link = `${devNavUrl}/${store.credentials?.data?.role_name.toLowerCase()}`;

  return link;
};

export const getDateNow = () => {
  return new Date(new Date().toString().split("GMT")[0] + " UTC")
    .toISOString()
    .split("T")[0];
};

export const handleEscape = (handleClose) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  });
};

// fetch for uploading photo or file
export const fetchFormData = (url, fd = {}) => {
  const data = fetch(url, {
    method: "post",
    body: fd,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error + " api endpoint error");
    });
  return data;
};

export const getPageLink = (link = "", path = "", title = "") => {
  return (
    <>
      <Link to={`${link}/${path}`} className="w-full">
        <div className="flex items-center justify-between py-2 pr-5 hover:bg-primary/5">
          <div>
            <span className="font-semibold">{title}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export const formatCard = (input) => {
  const lastFourDigits = input.slice(-4);
  const maskedPart = input
    .slice(0, input.length - 4)
    .replace(/([a-zA-Z0-9])/g, "*");
  const maskedWithSpaces = maskedPart.replace(/(.{4})/g, "$1 ");

  return maskedWithSpaces + lastFourDigits;
};

export const formatCardSpaces = (value) => {
  var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || "";
  var parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
};

export const convertTimeToDecimal = (hrs, mins, secs = 0) => {
  const h = hrs * (1 / 1);
  const m = mins * (1 / 60);
  const s = secs * (1 / 3600);
  const total = h + m + s;
  return total.toFixed(4);
};

export const getConvertStringToJSONparseData = (jsonString) => {
  let resultArray = [];

  try {
    resultArray = JSON.parse(jsonString);
  } catch (e) {
    // console.log(e);
  }

  return resultArray;
};

export const computeAge = (birthDate) => {
  let newBirthDate = new Date(birthDate).toLocaleString("en", {
    timeZone: setTimeZone,
  });
  let newDateNow = new Date(getDateNow()).toLocaleString("en", {
    timeZone: setTimeZone,
  });

  const dateNow = new Date(newDateNow);
  const primaryBday = new Date(newBirthDate);
  const msPerYear = 1000 * 60 * 60 * 24 * 365.2425;

  const age = Math.floor(
    (dateNow.getTime() - primaryBday.getTime()) / msPerYear,
  );

  return age;
};

export const getWeekName = (weekDays = 0) => {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  return days[Number(weekDays)];
};

export const getArrayTotalDaysInMonthAndYear = (dateVal) => {
  let totalDaysPerMonth = [],
    resultArr = [],
    firstWeek = [],
    lastWeek = [],
    currentWeek = 1;

  let newDateVal = new Date(dateVal).toLocaleString("en", {
    timeZone: setTimeZone,
  });

  // get initial date
  let dateFullYear = new Date(newDateVal).getFullYear();
  let dateMonth = new Date(newDateVal).getMonth();
  let currentHour = new Date(newDateVal).getHours();
  const endOfTheMonthFullDate = new Date(dateFullYear, dateMonth + 1, 0);
  const lastDate = new Date(dateFullYear, dateMonth, 0);
  const currentDateLastDate = new Date(dateFullYear, dateMonth + 1, 0);
  const getCurrentDateLastDate = currentDateLastDate.getDate();
  const currentDateLastDay = currentDateLastDate.getDay();
  const lastDay = lastDate.getDay();
  const weekNumber = Math.ceil((lastDate.getDate() + lastDay) / 7);
  const endOfMonth = new Date(endOfTheMonthFullDate).getDate();

  // loop all days in a month
  for (let i = 0; i < endOfMonth; i++) {
    // get day per month
    const day = new Date(`${dateFullYear}-${dateMonth + 1}-${i + 1}`).getDay();
    // push in total days per month array

    const dateNumber = i + 1;
    const date = dateNumber <= 9 ? `0${dateNumber}` : dateNumber;
    const monthNumber = dateMonth + 1;
    const month = monthNumber <= 9 ? `0${monthNumber}` : monthNumber;

    totalDaysPerMonth.push({
      day: i + 1, //  day
      currentDay: day,
      week_name: getWeekName(day),
      date: new Date(`${dateFullYear}-${dateMonth + 1}-${i + 1}`), // store date
      originalDate: `${dateFullYear}-${month}-${date}`, // store date
      originalDateCode: `${dateFullYear}${month}${date}`, // store date
      year: dateFullYear, // store date
      month: month, // store date
      week: currentWeek, // current week of day
      isPreviousMonth: false, // is day previous of the month
      isNextMonth: false, // is day next of the month
    });
    // if day is sunday increment current week
    if (day === 0) currentWeek++;
  }
  // filter all first week
  const getAllDaysInFirstWeek = totalDaysPerMonth.filter(
    (item) => item.week === 1,
  );
  // filter all last week
  const getAllDaysInLastWeek = totalDaysPerMonth.filter(
    (item) => item.week === weekNumber,
  );

  // loop missing first week of month
  for (let i = 0; i < 7 - getAllDaysInFirstWeek.length; i++) {
    const monthNumber = dateMonth + 1;
    const month = monthNumber <= 9 ? `0${monthNumber}` : monthNumber;
    firstWeek.push({
      day: 0,
      currentDay: i + 1,
      date: "", // store date
      originalDate: "", // store date
      originalDateCode: "", // store date
      year: dateFullYear, // store date
      month: month, // store date
      week: 1,
      isPreviousMonth: true,
      isNextMonth: false,
    });
  }
  // loop missing last week of month
  for (let i = 0; i < 7 - getAllDaysInLastWeek.length; i++) {
    const countTotal = getAllDaysInLastWeek.length + i + 1;

    const monthNumber = dateMonth + 1;
    const month = monthNumber <= 9 ? `0${monthNumber}` : monthNumber;
    const countWeek = countTotal === 7 ? 0 : countTotal;
    lastWeek.push({
      day: 0,
      currentDay: countWeek,
      date: "", // store date
      originalDate: "", // store date
      originalDateCode: "", // store date
      year: dateFullYear, // store date
      month: month, // store date
      week: weekNumber,
      isPreviousMonth: false,
      isNextMonth: true,
    });
  }

  // if last week empty last week array
  if (lastWeek.length === 7) lastWeek = [];
  // filter all last week
  let getLastWeekCount =
    totalDaysPerMonth?.length > 0
      ? totalDaysPerMonth[getCurrentDateLastDate - 1].week
      : "";

  let lastDayCount = 7 - Number(currentDateLastDay);
  if (lastWeek.length === 0 && Number(lastDayCount) !== 0)
    // loop missing last week of month
    for (let i = 0; i < Number(lastDayCount); i++) {
      const countTotal = Number(currentDateLastDay) + i;

      const monthNumber = dateMonth + 1;
      const month = monthNumber <= 9 ? `0${monthNumber}` : monthNumber;
      const countWeek = countTotal === 7 ? 0 : countTotal;
      lastWeek.push({
        day: 0,
        currentDay: countWeek,
        date: "", // store date
        originalDate: "", // store date
        originalDateCode: "", // store date
        year: dateFullYear, // store date
        month: month, // store date
        week: getLastWeekCount,
        isPreviousMonth: false,
        isNextMonth: true,
      });
    }

  if (lastWeek.length === 7) lastWeek = [];

  // combine first week, total days and last week of month
  resultArr = [...firstWeek, ...totalDaysPerMonth, ...lastWeek];
  // console.log(
  //   totalDaysPerMonth
  //   // getAllDaysInFirstWeek,
  //   // firstWeek,
  //   // getAllDaysInLastWeek,
  //   // lastWeek,
  //   // resultArr
  // );

  return resultArr;
};

export const getArrayTotalDaysInMonthAndYearPerWeek = (
  totalDaysPerMonth = [],
) => {
  let result = [],
    weekPerMonth = 7;

  result = Array.from({ length: 5 }, (_, i) => {
    const start = i * weekPerMonth;
    const end = start + weekPerMonth;
    return totalDaysPerMonth.slice(start, end);
  });

  return result;
};

export const getDurationFromHoursAndMinutes = (startTimeStr, endTimeStr) => {
  let result = {
    decimal: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  // 1. Create Date objects using an arbitrary base date (e.g., Jan 1, 1970)
  // This helps avoid issues if the times cross midnight, although here we manually handle that for time strings.
  const baseDate = "1970-01-01 ";
  const startDate = new Date(baseDate + startTimeStr);
  let endDate = new Date(baseDate + endTimeStr);

  // If the end time is earlier than the start time (e.g., crossing midnight), add a day to the end date
  if (endDate.getTime() < startDate.getTime()) {
    endDate.setDate(endDate.getDate() + 1);
  }
  // 2. Calculate the difference in milliseconds
  const diffInMs = endDate.getTime() - startDate.getTime(); //
  // 3. Convert milliseconds to hours and minutes
  const hours = Math.floor(diffInMs / (1000 * 60 * 60)); //
  const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60)); //
  const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

  result.decimal = Number(convertTimeToDecimal(hours, minutes, seconds));
  result.hours = hours;
  result.minutes = minutes;
  result.seconds = seconds;

  return result;
};

export const generateTimeSlots = (itemVal, removeTimeSlot) => {
  let slots = [];
  const dateRef = new Date(); // Use a reference date for consistent calculations

  // let buffering = 0.9; // buffer a minute in end time

  // Function to convert "HH:MM" string to Date object
  const timeToDate = (timeStr) => {
    const [hours, minutes] = timeStr?.split(":").map(Number);
    const date = new Date(dateRef);
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  // Function to format Date object back to "HH:MM" string
  const dateToTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const startDate = timeToDate(itemVal.start_time);
  const endDate = timeToDate(itemVal.end_time);

  // Calculate the total duration in milliseconds
  const totalDurationMs = endDate.getTime() - startDate.getTime();

  if (totalDurationMs <= 0) {
    console.error("End time must be after start time.");
    return [];
  }

  // Calculate the duration for each slot in milliseconds
  const slotDurationMs = Number(itemVal.duration).toFixed(5) * 3600000;

  for (let i = 0; i < itemVal.time_array_create_count; i++) {
    let slotEndTime = "";
    const slotStartTime = new Date(
      startDate.getTime() + i * Number(slotDurationMs),
    );

    if (i + 1 == itemVal.time_array_create_count) {
      slotEndTime = new Date(endDate.getTime());
    } else {
      slotEndTime = new Date(startDate.getTime() + (i + 1) * slotDurationMs);
    }
    itemVal[`startTime${i}`] = dateToTime(slotStartTime);
    itemVal[`endTime${i}`] = dateToTime(slotEndTime);
    slots.push({
      startTime: dateToTime(slotStartTime),
      endTime: dateToTime(slotEndTime),
    });
  }

  if (removeTimeSlot?.length > 0) {
    for (let i = 0; i < removeTimeSlot?.length; i++) {
      const newTime = slots?.filter(
        (_, index) => index !== removeTimeSlot[i].key,
      );
      slots = newTime;
    }
  }
  if (slots?.length > 0) {
    for (let i = 0; i < slots?.length; i++) {
      itemVal[`startTime${i}`] = slots[i]?.startTime;
      itemVal[`endTime${i}`] = slots[i]?.endTime;
    }
  }

  itemVal.time_array = slots;
  return slots;
};
