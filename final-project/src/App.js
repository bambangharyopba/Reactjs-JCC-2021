import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { GameProvider, MovieProvider, UserProvider } from "./context";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <MovieProvider>
            <GameProvider>
              <Routes />
            </GameProvider>
          </MovieProvider>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
