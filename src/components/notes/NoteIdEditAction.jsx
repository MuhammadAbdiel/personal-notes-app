import PropTypes from "prop-types";
import { HiCheck } from "react-icons/hi";
import Action from "../layouts/Action";

const NoteIdEditAction = ({ handleSave }) => {
  return (
    <Action page="detail-page">
      <button
        className="action"
        type="button"
        title="Simpan"
        onClick={() => handleSave()}
      >
        <HiCheck />
      </button>
    </Action>
  );
};

NoteIdEditAction.propTypes = {
  handleSave: PropTypes.func.isRequired,
};

export default NoteIdEditAction;
