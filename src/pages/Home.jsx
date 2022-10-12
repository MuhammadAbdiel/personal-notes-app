/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import HomeAction from "../components/home/HomeAction";
import LoadingIndicator from "../components/layouts/LoadingIndicator";
import NoteListEmpty from "../components/notes/NoteListEmpty";
import NotesList from "../components/notes/NotesList";
import SearchBar from "../components/notes/SearchBar";
import useLanguage from "../hooks/useLanguage";
import { getActiveNotes } from "../utils/network-data";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("title");

  const changeSearchParams = (keyword) => {
    setSearchParams(() => {
      return {
        title: keyword,
      };
    });
  };

  const [allNotes, setAllNotes] = useState([]); // all notes
  const [notes, setNotes] = useState([]); // filtered notes
  const [search, setSearch] = useState(keyword || "");
  const [initNotes, setInitNotes] = useState(false);
  const [loading, setLoading] = useState(true);
  const textApp = useLanguage("app");
  const textNote = useLanguage("note");

  const handleSearch = (search) => {
    setSearch(search);
    changeSearchParams(search);
  };

  // Inisialisasi data dari API
  const initData = () => {
    const fetchData = async () => {
      const activeNotes = await getActiveNotes();
      try {
        if (!activeNotes.error) {
          setAllNotes(activeNotes.data);
          setNotes(activeNotes.data);
          setInitNotes(true);
          setLoading(false);
        }
      } catch (e) {
        alert(textApp.msg.error);
      }
    };

    fetchData();
  };

  useEffect(() => {
    if (!initNotes) {
      initData();
    }

    // Jika sudah init data, filter dari memory local
    if (initNotes) {
      let tempDataNotes = [...allNotes];
      if (search !== "") {
        tempDataNotes = tempDataNotes.filter((note) =>
          note.title.toLowerCase().includes(search.toLowerCase())
        );
      }
      setNotes(tempDataNotes);
    }
  }, [search]);

  return (
    <section className="homepage">
      <h2>{textNote.header}</h2>
      <section className="search-bar">
        <SearchBar search={search} keywordChange={handleSearch} />
      </section>
      {notes.length > 0 && !loading ? <NotesList notes={notes} /> : ""}
      {notes.length === 0 && !loading ? <NoteListEmpty /> : ""}
      {loading ? <LoadingIndicator /> : ""}
      <HomeAction />
    </section>
  );
};

export default Home;

// class HomeClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: [],
//       search: props.defaultKeyword || "",
//     };
//     this.handleSearch = this.handleSearch.bind(this);
//   }

//   handleSearch(search) {
//     this.setState(() => {
//       return {
//         search,
//       };
//     });

//     this.props.keywordChange(search);
//   }

//   componentDidMount() {
//     if (this.state.search !== "") {
//       this.setState({
//         notes: getActiveNotes().filter((note) =>
//           note.title.toLowerCase().includes(this.state.search.toLowerCase())
//         ),
//       });
//     } else {
//       this.setState(() => {
//         return {
//           notes: getActiveNotes(),
//         };
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.search !== this.state.search) {
//       if (this.state.search !== "") {
//         this.setState({
//           notes: getActiveNotes().filter((note) =>
//             note.title.toLowerCase().includes(this.state.search.toLowerCase())
//           ),
//         });
//       } else {
//         this.setState(() => {
//           return {
//             notes: getActiveNotes(),
//           };
//         });
//       }
//     }
//   }

//   render() {
//     const { notes, search } = this.state;

//     return (
//       <section className="homepage">
//         <h2>Active Notes</h2>
//         <section className="search-bar">
//           <SearchBar search={search} keywordChange={this.handleSearch} />
//         </section>
//         {notes.length > 0 ? <NotesList notes={notes} /> : <NoteListEmpty />}
//         <HomeAction />
//       </section>
//     );
//   }
// }

// const Home = (props) => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const search = searchParams.get("search");

//   const changeSearchParams = (search) => {
//     setSearchParams({ search });
//   };

//   return (
//     <HomeClass
//       {...props}
//       defaultKeyword={search}
//       keywordChange={changeSearchParams}
//     />
//   );
// };

// Home.propTypes = {
//   defaultKeyword: PropTypes.string,
//   keywordChange: PropTypes.func,
// };

// export default Home;
