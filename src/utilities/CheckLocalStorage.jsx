export const checkLocalStorage = () => {
  let wfstoken = null;
  try {
    wfstoken = JSON.parse(localStorage.getItem("wfstoken"));
  } catch (error) {
    wfstoken = null;
  }

  return wfstoken;
};
