import Swal from "sweetalert2";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewNoteAction from "../../components/notes/NewNoteAction";
import { addNote } from "../../utils/network-data";
import useLanguage from "../../hooks/useLanguage";

const NewNote = () => {
  const [form, setForm] = useState({
    title: "",
    body: "Type here",
  });

  const textApp = useLanguage("app");
  const textNote = useLanguage("newNote");
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

    const fetchData = async () => {
      const addData = await addNote({ title, body });
      try {
        if (!addData.error) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: textNote.msgSuccess,
          });
          navigate("/");
        }
      } catch (e) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: textApp.msg.error,
        });
      }
    };

    fetchData();
  };

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder={textNote.titlePlaceholder}
          value={form.title}
          onChange={handleChange}
        />
        <div
          className="add-new-page__input__body"
          data-placeholder={textNote.bodyPlaceholder}
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
