/* eslint-disable no-restricted-globals */
import Swal from "sweetalert2";
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
} from "../../utils/network-data";
import NoteIdAction from "../../components/notes/NoteIdAction";
import NotFoundMessage from "../../components/layouts/NotFoundMessage";
import LoadingIndicator from "../../components/layouts/LoadingIndicator";
import useLanguage from "../../hooks/useLanguage";

const NoteId = () => {
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState({});
  const { id } = useParams();
  const textApp = useLanguage("app");
  const textNote = useLanguage("noteId");
  const navigate = useNavigate();

  const handleArchive = () => {
    Swal.fire({
      title: textApp.msg.confirm,
      text: "You will move this note!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, move it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let methods = null;
        let navigateTo = "/";
        if (note.archived) {
          methods = unarchiveNote(id);
          navigateTo = "/archives";
        } else {
          methods = archiveNote(id);
        }

        const fetchData = async () => {
          const response = await methods;
          try {
            if (!response.error) {
              navigate(navigateTo);
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
      }
    });
  };

  const handleDelete = () => {
    Swal.fire({
      title: textApp.msg.confirm,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const fetchData = async () => {
          const response = await deleteNote(id);
          try {
            if (!response.error) {
              Swal.fire({
                icon: "success",
                title: "Success",
                text: textApp.msg.success,
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
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getNote(id);
      try {
        if (!response.error) {
          setNote(response.data);
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: textNote.notFound,
          });
        }
        setLoading(false);
      } catch (e) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: textApp.msg.error,
        });
      }
    };

    fetchData();
  }, [id, textApp.msg.error, textNote.notFound]);

  return (
    <section className="detail-page">
      {"id" in note && !loading ? (
        <>
          <Link to="/" className="nav-icon" title="Kembali">
            <HiArrowLeft />
          </Link>
          <h3 className="detail-page__title">{note.title}</h3>
          <p className="detail-page__createdAt">
            {showFormattedDate(note.createdAt)}
          </p>
          <div className="detail-page__body">{parser(note.body)}</div>
          <NoteIdAction
            archived={note.archived || false}
            handleArchive={handleArchive}
            handleDelete={handleDelete}
          />
        </>
      ) : (
        ""
      )}
      {!("id" in note) && !loading ? <NotFoundMessage /> : ""}
      {loading ? <LoadingIndicator /> : ""}
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
