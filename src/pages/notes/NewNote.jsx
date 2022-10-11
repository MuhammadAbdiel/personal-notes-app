import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewNoteAction from "../../components/notes/NewNoteAction";
import { addNote } from "../../utils/local-data";

const NewNote = () => {
  const [form, setForm] = useState({
    title: "",
    body: "Type here",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((data) => {
      return {
        ...data,
        title: e.target.value,
      };
    });
  };

  const onInputHandler = (e) => {
    setForm((data) => {
      return {
        ...data,
        body: e.target.innerHTML,
      };
    });
  };

  const handleSave = () => {
    const { title, body } = form;
    addNote({ title, body });
    navigate("/");
  };

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder="Judul"
          value={form.title}
          onChange={handleChange}
        />
        <div
          className="add-new-page__input__body"
          data-placeholder={form.body}
          contentEditable
          onInput={onInputHandler}
        />
      </div>
      <NewNoteAction handleSave={handleSave} />
    </section>
  );
};

export default NewNote;

// class NewNoteClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       body: "Type here",
//     };
//     this.handleSave = this.handleSave.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.onInputHandler = this.onInputHandler.bind(this);
//   }

//   handleChange = (e) => {
//     this.setState(() => {
//       return {
//         title: e.target.value,
//       };
//     });
//   };

//   onInputHandler = (e) => {
//     this.setState(() => {
//       return {
//         body: e.target.innerHTML,
//       };
//     });
//   };

//   handleSave = () => {
//     const { title, body } = this.state;
//     addNote({ title, body });
//     this.props.navigate("/");
//   };

//   render() {
//     const { title, body } = this.state;

//     return (
//       <section className="add-new-page">
//         <div className="add-new-page__input">
//           <input
//             className="add-new-page__input__title"
//             placeholder="Judul"
//             value={title}
//             onChange={this.handleChange}
//           />
//           <div
//             className="add-new-page__input__body"
//             data-placeholder={body}
//             contentEditable
//             onInput={this.onInputHandler}
//           />
//         </div>
//         <NewNoteAction handleSave={this.handleSave} />
//       </section>
//     );
//   }
// }

// const NewNote = (props) => {
//   const navigate = useNavigate();

//   return <NewNoteClass {...props} navigate={navigate} />;
// };

// NewNote.propTypes = {
//   navigate: PropTypes.string,
// };

// export default NewNote;
