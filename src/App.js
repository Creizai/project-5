import React from "react";
import "./reset.css";
import "./App.css";
import { Route, Link } from "react-router-dom";
import PlayerInfo from "./PlayerInfo";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={"/user/creizai"}>
          <h1>Creizai</h1>
        </Link>
        <Link to={"/user/nexanomaly"}>
          <h1>Nexanomaly</h1>
        </Link>
        <Link to={"/user/rekyu3d"}>
          <h1>Rekyu3d</h1>
        </Link>
      </header>
      <Route path="/" exact render={Home} />}
      <Route
        exact
        path="/user/:id"
        render={routerProps => <PlayerInfo {...routerProps} />}
      />
    </div>
  );
}

export default App;
