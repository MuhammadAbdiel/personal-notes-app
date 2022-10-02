import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Archive from "./pages/Archives";
import NoteId from "./pages/notes/NoteId";
import NewNote from "./pages/notes/NewNote";
import NavMenu from "./components/layouts/NavMenu";
import NoteIdEdit from "./pages/notes/NoteIdEdit";

const App = () => {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Notes App</Link>
        </h1>
        <NavMenu />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archives" element={<Archive />} />
          <Route path="/notes" element={<Navigate to="/" replace />} />
          <Route path="/notes/new" element={<NewNote />} />
          <Route path="/notes/:id" element={<NoteId />} />
          <Route path="/notes/:id/edit" element={<NoteIdEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
