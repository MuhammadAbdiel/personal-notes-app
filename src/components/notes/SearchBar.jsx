import PropTypes from "prop-types";

const SearchBar = ({ search, keywordChange }) => {
  return (
    <input
      type="text"
      placeholder="Search based on title"
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
