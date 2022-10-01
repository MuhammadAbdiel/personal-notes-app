import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import NewNoteAction from "../../components/notes/NewNoteAction";
import { addNote } from "../../utils/local-data";

class NewNoteClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
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
    this.setState(() => {
      return {
        body: e.target.innerHTML, // Ingat! innerHTML, bukan value.
      };
    });
  };

  handleSave = () => {
    const { title, body } = this.state;
    addNote({ title, body });
    this.props.navigate("/");
  };

  render() {
    const { title, body } = this.state;

    return (
      <section className="add-new-page">
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
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
        <NewNoteAction handleSave={this.handleSave} />
      </section>
    );
  }
}

const NewNote = (props) => {
  const navigate = useNavigate();

  return <NewNoteClass {...props} navigate={navigate} />;
};

export default NewNote;
