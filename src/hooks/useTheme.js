import { useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = (val) => {
    setTheme(val);
    const root = window.document.documentElement;
    root.setAttribute("data-theme", val);
    localStorage.setItem("theme", val);
  };
  return [theme, changeTheme];
};

export default useTheme;
