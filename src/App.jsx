/* eslint-disable react-hooks/exhaustive-deps */
import Swal from "sweetalert2";
import React, { useEffect, useMemo, useState } from "react";
import Routes from "./routes/routes";
import LocaleContext from "./contexts/LocaleContext";
import AuthContext from "./contexts/AuthContext";
import { getUserLogged } from "./utils/network-data";
import LoadingIndicator from "./components/layouts/LoadingIndicator";
import Header from "./components/layouts/Header";
import ThemeContext from "./contexts/ThemeContext";
import useTheme from "./hooks/useTheme";

const App = () => {
  const [auth, setAuth] = useState(null);
  const [locale, setLocale] = useState("id");
  const [theme, changeTheme] = useTheme();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  const toggleLocale = () => {
    localStorage.setItem("locale", locale === "id" ? "en" : "id");
    setLocale((prevLocale) => (prevLocale === "id" ? "en" : "id"));
  };

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  const authContextValue = useMemo(() => {
    return {
      auth,
      setAuth,
    };
  }, [auth]);

  const themeContextValue = useMemo(() => {
    return {
      theme,
      changeTheme,
    };
  }, [theme]);

  useEffect(() => {
    // Mengambil data user yang sudah login
    const fetchData = async () => {
      const userLogged = await getUserLogged();
      try {
        if (!userLogged.error) {
          setAuth(userLogged.data);
          setName(userLogged.data.name);
        } else {
          setAuth(null);
        }
        setLoading(false);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong!",
        });
      }
    };

    fetchData();

    // Inisialisasi Locale
    if (localStorage.locale && ["id", "en"].includes(localStorage.locale)) {
      setLocale(localStorage.locale);
    }

    // Inisialisasi Theme
    if (localStorage.theme) {
      changeTheme(localStorage.theme);
    } else {
      localStorage.setItem("theme", "dark");
      changeTheme("dark");
    }
  });

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <AuthContext.Provider value={authContextValue}>
          <div className="app-container">
            <Header name={name} />
            <main>{loading ? <LoadingIndicator /> : <Routes />}</main>
          </div>
        </AuthContext.Provider>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
