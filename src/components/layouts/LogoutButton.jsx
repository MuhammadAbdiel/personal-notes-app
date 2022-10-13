/* eslint-disable no-restricted-globals */
import Swal from "sweetalert2";
import React, { useContext } from "react";
import { MdLogout } from "react-icons/md";
import AuthContext from "../../contexts/AuthContext";
import useLanguage from "../../hooks/useLanguage";

const LogoutButton = () => {
  const { auth } = useContext(AuthContext);
  const text = useLanguage("app");

  const handleLogout = () => {
    Swal.fire({
      title: text.msg.confirm,
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("accessToken");
        window.location = "/";
      }
    });
  };

  return (
    <>
      {auth ? (
        <button
          type="button"
          title="Logout"
          className="nav-icon"
          onClick={handleLogout}
        >
          <MdLogout />
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default LogoutButton;
