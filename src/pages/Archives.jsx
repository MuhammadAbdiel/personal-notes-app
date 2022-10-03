import React, { Component } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import HomeAction from "../components/home/HomeAction";
import NoteListEmpty from "../components/notes/NoteListEmpty";
import NotesList from "../components/notes/NotesList";
import SearchBar from "../components/notes/SearchBar";
import { getArchivedNotes } from "../utils/local-data";

class ArchivesClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      search: props.defaultKeyword || "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(search) {
    this.setState(() => {
      return {
        search,
      };
    });

    this.props.keywordChange(search);
  }

  componentDidMount() {
    if (this.state.search !== "") {
      this.setState({
        notes: getArchivedNotes().filter((note) =>
          note.title.toLowerCase().includes(this.state.search.toLowerCase())
        ),
      });
    } else {
      this.setState({ notes: getArchivedNotes() });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      if (this.state.search !== "") {
        this.setState({
          notes: getArchivedNotes().filter((note) =>
            note.title.toLowerCase().includes(this.state.search.toLowerCase())
          ),
        });
      } else {
        this.setState({ notes: getArchivedNotes() });
      }
    }
  }

  render() {
    const { notes, search } = this.state;

    return (
      <section className="homepage">
        <h2>Archive Notes</h2>
        <section className="search-bar">
          <SearchBar search={search} keywordChange={this.handleSearch} />
        </section>
        {notes.length > 0 ? <NotesList notes={notes} /> : <NoteListEmpty />}
        <HomeAction />
      </section>
    );
  }
}

const Archives = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  const changeSearchParams = (search) => {
    setSearchParams({ search });
  };

  return (
    <ArchivesClass
      {...props}
      defaultKeyword={search}
      keywordChange={changeSearchParams}
    />
  );
};

Archives.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default Archives;
