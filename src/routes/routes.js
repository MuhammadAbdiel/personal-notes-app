import { Navigate, useRoutes } from "react-router-dom";
import RouteMiddleware from "../middleware/RouteMiddleware";
import Home from "../pages/Home";
import Archives from "../pages/Archives";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import NewNote from "../pages/notes/NewNote";
import NoteId from "../pages/notes/NoteId";
import Register from "../pages/Register";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <RouteMiddleware middleware="auth">
          <Home />
        </RouteMiddleware>
      ),
    },
    {
      path: "/login",
      element: (
        <RouteMiddleware middleware="public">
          <Login />
        </RouteMiddleware>
      ),
    },
    {
      path: "/register",
      element: (
        <RouteMiddleware middleware="public">
          <Register />
        </RouteMiddleware>
      ),
    },
    {
      path: "/archives",
      element: (
        <RouteMiddleware middleware="auth">
          <Archives />
        </RouteMiddleware>
      ),
    },
    {
      path: "/notes",
      element: (
        <RouteMiddleware middleware="auth">
          <Navigate to="/" replace />
        </RouteMiddleware>
      ),
    },
    {
      path: "/notes/new",
      element: (
        <RouteMiddleware middleware="auth">
          <NewNote />
        </RouteMiddleware>
      ),
    },
    {
      path: "/notes/:id",
      element: (
        <RouteMiddleware middleware="auth">
          <NoteId />
        </RouteMiddleware>
      ),
    },
    {
      path: "/*",
      element: (
        <RouteMiddleware middleware="auth">
          <NotFound />
        </RouteMiddleware>
      ),
    },
  ]);
};

export default Routes;
