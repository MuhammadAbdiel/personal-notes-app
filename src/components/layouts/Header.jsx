import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage";
import NavMenu from "./NavMenu";

const Header = ({ name }) => {
  const text = useLanguage("app");

  return (
    <header>
      <h1>
        <Link to="/">{text.title}</Link>
      </h1>
      <NavMenu name={name} />
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
