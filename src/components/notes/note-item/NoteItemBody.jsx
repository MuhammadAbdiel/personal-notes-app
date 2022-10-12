import PropTypes from "prop-types";
import parser from "html-react-parser";

const NoteItemBody = ({ body }) => {
  return <p className="note-item__body">{parser(body)}</p>;
};

NoteItemBody.propTypes = {
  body: PropTypes.string.isRequired,
};

export default NoteItemBody;
