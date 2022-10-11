import React, { useState, useEffect } from "react";
import parser from "html-react-parser";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { showFormattedDate } from "../../utils";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../../utils/local-data";
import NoteIdAction from "../../components/notes/NoteIdAction";
import NotFoundMessage from "../../components/layouts/NotFoundMessage";

const NoteId = () => {
  const [note, setNote] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/notes/${id}/edit`);
  };

  const handleArchive = () => {
    if (note.archived) {
      unarchiveNote(id);
      navigate("/archives");
    } else {
      archiveNote(id);
      navigate("/");
    }
  };

  const handleDelete = () => {
    deleteNote(id);
    navigate("/");
  };

  useEffect(() => {
    const showNote = getNote(id);
    if (showNote) {
      setNote(showNote);
    }
  }, [id]);

  return (
    <section className="detail-page">
      {"id" in note ? (
        <>
          <Link to="/" className="nav-icon" title="Kembali">
            <HiArrowLeft />
          </Link>
          <h3 className="detail-page__title">{note.title}</h3>
          <p className="detail-page__createdAt">
            {showFormattedDate(note.createdAt)}
          </p>
          <div className="detail-page__body">{parser(note.body)}</div>
        </>
      ) : (
        <NotFoundMessage />
      )}
      <NoteIdAction
        archived={note.archived || false}
        handleEdit={handleEdit}
        handleArchive={handleArchive}
        handleDelete={handleDelete}
      />
    </section>
  );
};

export default NoteId;

// class NoteIdClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       note: {},
//     };
//     this.handleEdit = this.handleEdit.bind(this);
//     this.handleArchive = this.handleArchive.bind(this);
//     this.handleDelete = this.handleDelete.bind(this);
//   }

//   handleEdit = () => {
//     this.props.navigate(`/notes/${this.props.id}/edit`);
//   };

//   handleArchive = () => {
//     if (this.state.note.archived) {
//       unarchiveNote(this.props.id);
//       this.props.navigate("/archives");
//     } else {
//       archiveNote(this.props.id);
//       this.props.navigate("/");
//     }
//   };

//   handleDelete = () => {
//     deleteNote(this.props.id);
//     this.props.navigate("/");
//   };

//   componentDidMount() {
//     const showNote = getNote(this.props.id);
//     if (showNote) {
//       this.setState(() => {
//         return {
//           note: showNote,
//         };
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.note !== this.state.note) {
//       const showNote = getNote(this.props.id);
//       if (showNote) {
//         this.setState(() => {
//           return {
//             note: showNote,
//           };
//         });
//       }
//     }
//   }

//   render() {
//     const { note } = this.state;

//     return (
//       <section className="detail-page">
//         {"id" in note ? (
//           <>
//             <Link to="/" className="nav-icon" title="Kembali">
//               <HiArrowLeft />
//             </Link>
//             <h3 className="detail-page__title">{note.title}</h3>
//             <p className="detail-page__createdAt">
//               {showFormattedDate(note.createdAt)}
//             </p>
//             <div className="detail-page__body">{parser(note.body)}</div>
//           </>
//         ) : (
//           <NotFoundMessage />
//         )}
//         <NoteIdAction
//           archived={note.archived || false}
//           handleEdit={this.handleEdit}
//           handleArchive={this.handleArchive}
//           handleDelete={this.handleDelete}
//         />
//       </section>
//     );
//   }
// }

// const NoteId = (props) => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   return <NoteIdClass {...props} navigate={navigate} id={id} />;
// };

// NoteId.propTypes = {
//   id: PropTypes.string,
//   navigate: PropTypes.string,
// };

// export default NoteId;
