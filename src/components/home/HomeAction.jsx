import { HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage";
import Action from "../layouts/Action";

const HomeAction = () => {
  const text = useLanguage("app");
  const navigate = useNavigate();

  return (
    <Action page="homepage">
      <button
        className="action"
        type="button"
        title={text.add}
        onClick={() => navigate("/notes/new")}
      >
        <HiPlus />
      </button>
    </Action>
  );
};

export default HomeAction;
