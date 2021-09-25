import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./context";
import {
  Home,
  Movies,
  Games,
  MovieDetails,
  GameDetails,
  Login,
  Register,
  ChangePassword,
  MoviesTable,
  GamesTable,
  AddMovie,
  EditMovie,
  AddGame,
  EditGame,
  GuestView,
  Dashboard,
} from "./pages";

function AdminRoutes() {
  return (
    <>
      <Route exact path="/change-password" component={ChangePassword} />
      <Route exact path="/movies-table" component={MoviesTable} />
      <Route exact path="/games-table" component={GamesTable} />
      <Route exact path="/movies/add" component={AddMovie} />
      <Route exact path="/movies/edit/:id" component={EditMovie} />
      <Route exact path="/games/add" component={AddGame} />
      <Route exact path="/games/edit/:id" component={EditGame} />
      <Route exact path="/guest-view/:page" component={GuestView} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/">
        <Redirect strict from="/" to="/dashboard" />
      </Route>
    </>
  );
}

function GuestRoutes() {
  return (
    <>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Home} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/games" component={Games} />
    </>
  );
}

function Routes() {
  const { loginStatus } = useContext(UserContext);

  return (
    <>
      <Route exact path="/movies/detail/:id" component={MovieDetails} />
      <Route exact path="/games/detail/:id" component={GameDetails} />
      {!loginStatus && <GuestRoutes />}
      {loginStatus && <AdminRoutes />}
    </>
  );
}

export default Routes;
