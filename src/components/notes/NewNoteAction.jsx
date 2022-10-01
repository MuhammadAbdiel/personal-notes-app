import PropTypes from "prop-types";
import { HiX, HiCheck } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Action from "../layouts/Action";

const NewNoteAction = ({ handleSave }) => {
  const navigate = useNavigate();

  return (
    <Action page="add-new-page">
      <button
        className="action"
        type="button"
        title="Tambah"
        onClick={() => navigate("/")}
      >
        <HiX />
      </button>
      <button
        className="action"
        type="button"
        title="Tambah"
        onClick={() => handleSave()}
      >
        <HiCheck />
      </button>
    </Action>
  );
};

NewNoteAction.propTypes = {
  handleSave: PropTypes.func.isRequired,
};

export default NewNoteAction;
