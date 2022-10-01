import { HiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Action from "../layouts/Action";

const HomeAction = () => {
  const navigate = useNavigate();

  return (
    <Action page="homepage">
      <button
        className="action"
        type="button"
        title="Tambah"
        onClick={() => navigate("/notes/new")}
      >
        <HiPlus />
      </button>
    </Action>
  );
};

export default HomeAction;
