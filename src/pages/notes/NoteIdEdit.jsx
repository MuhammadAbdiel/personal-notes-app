import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { editNote, getNote } from "../../utils/local-data";
import NoteIdEditAction from "../../components/notes/NoteIdEditAction";
import NotFoundMessage from "../../components/layouts/NotFoundMessage";

class NoteIdEditClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      archived: false,
      body: "Type here",
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onInputHandler = this.onInputHandler.bind(this);
  }

  handleChange = (e) => {
    this.setState(() => {
      return {
        title: e.target.value,
      };
    });
  };

  onInputHandler = (e) => {
    e.preventDefault();
    this.setState(() => {
      return {
        body: e.target.innerHTML,
      };
    });
  };

  handleSave = () => {
    const id = this.props.id;
    const { title, body } = this.state;
    editNote({ id, title, body });
    this.props.navigate(`/notes/${id}`);
  };

  componentDidMount() {
    const showNote = getNote(this.props.id);
    if (showNote) {
      const { title, archived, body } = showNote;
      this.setState({ id: this.props.id, title, archived, body });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { id, title, archived, body } = this.state;
    if (
      prevState.id !== id &&
      prevState.title !== title &&
      prevState.archived !== archived &&
      prevState.body !== body
    ) {
      const showNote = getNote(this.props.id);
      if (showNote) {
        const { title, archived, body } = showNote;
        this.setState({ id: this.props.id, title, archived, body });
      }
    }
  }

  render() {
    const { id, title, body } = this.state;

    return (
      <section className="edit-page">
        {id !== "" ? (
          <>
            <Link
              to={`/notes/${this.props.id}`}
              className="nav-icon"
              title="Kembali"
            >
              <HiArrowLeft />
            </Link>
            <div className="edit-page__input">
              <input
                className="edit-page__input__title"
                placeholder="Judul"
                value={title}
                onChange={this.handleChange}
              />
              <div
                className="add-new-page__input__body"
                data-placeholder={body}
                contentEditable
                onInput={this.onInputHandler}
              />
            </div>
          </>
        ) : (
          <NotFoundMessage />
        )}

        <NoteIdEditAction handleSave={this.handleSave} />
      </section>
    );
  }
}

const NoteIdEdit = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  return <NoteIdEditClass {...props} navigate={navigate} id={id} />;
};

NoteIdEdit.propTypes = {
  id: PropTypes.string,
  navigate: PropTypes.string,
};

export default NoteIdEdit;
