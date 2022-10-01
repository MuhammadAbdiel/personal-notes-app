import React, { Component } from "react";
import HomeAction from "../components/home/HomeAction";
import NoteListEmpty from "../components/notes/NoteListEmpty";
import NotesList from "../components/notes/NotesList";
import { getArchivedNotes } from "../utils/local-data";

class Archives extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      search: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({ search: e.target.value });
  }

  componentDidMount(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      if (this.state.search !== "") {
        this.setState(() => {
          getArchivedNotes().filter((note) =>
            note.title.toLowerCase().includes(this.state.search.toLowerCase())
          );
        });
      } else {
        this.setState(() => {
          getArchivedNotes();
        });
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      if (this.state.search !== "") {
        this.setState(() => {
          getArchivedNotes().filter((note) =>
            note.title.toLowerCase().includes(this.state.search.toLowerCase())
          );
        });
      } else {
        this.setState(() => {
          getArchivedNotes();
        });
      }
    }
  }

  render() {
    const { notes, search } = this.state;

    return (
      <section className="homepage">
        <h2>Archive Notes</h2>
        <section className="search-bar">
          <input
            type="text"
            placeholder="Search based on title"
            value={search}
            onChange={this.handleSearch}
          />
        </section>
        {notes.length > 0 ? <NotesList notes={notes} /> : <NoteListEmpty />}
        <HomeAction />
      </section>
    );
  }
}

export default Archives;
