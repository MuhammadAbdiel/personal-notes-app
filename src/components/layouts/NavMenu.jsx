import { Link, useLocation } from "react-router-dom";
import { BiArchive, BiHomeAlt } from "react-icons/bi";
import ThemeToggler from "./ThemeToggler";

const NavMenu = () => {
  const { pathName } = useLocation();

  return (
    <nav className="navigation">
      <ul>
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
        <li>
          <ThemeToggler />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
