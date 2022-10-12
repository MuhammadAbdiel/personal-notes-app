import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiArchive, BiHomeAlt } from "react-icons/bi";
import AuthContext from "../../contexts/AuthContext";
import LangToggler from "./LangToggler";
import LogoutButton from "./LogoutButton";
import ThemeToggler from "./ThemeToggler";

const NavMenu = () => {
  const { auth } = useContext(AuthContext);
  const { pathName } = useLocation();

  return (
    <>
      <nav className="navigation">
        <ul>
          {auth ? (
            <li>
              {pathName !== "/archives" ? (
                <Link to="/archives" className="nav-icon" title="Archives">
                  <BiArchive />
                </Link>
              ) : (
                <Link to="/" className="nav-icon" title="Home">
                  <BiHomeAlt />
                </Link>
              )}
            </li>
          ) : (
            ""
          )}
          <li>
            <LangToggler />
          </li>
          <li>
            <ThemeToggler />
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
