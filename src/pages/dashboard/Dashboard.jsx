import { LayoutDashboard, Moon, Sun } from "lucide-react";
import React from "react";
const Dashboard = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  //  default = light
  React.useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <h1 className="text-9xl text-center pt-20 dark:text-white">
        <LayoutDashboard className="text-9xl dark:text-white" /> DASHBOARD
      </h1>
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {darkMode ? <Sun className="text-yellow-400" /> : <Moon />}
        </button>
      </div>
    </>
  );
};

export default Dashboard;
