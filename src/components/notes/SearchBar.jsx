import PropTypes from "prop-types";
import useLanguage from "../../hooks/useLanguage";

const SearchBar = ({ search, keywordChange }) => {
  const textNote = useLanguage("note");

  return (
    <input
      type="text"
      placeholder={textNote.searchPlaceholder}
      value={search}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
};

SearchBar.propType = {
  search: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
