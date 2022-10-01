import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Archive from "./pages/Archives";
import NoteId from "./pages/notes/NoteId";
import NewNote from "./pages/notes/NewNote";

const App = () => {
  return (
    <div className="app-container">
      <h1>Hello, React</h1>
    </div>
  );
};

export default App;
