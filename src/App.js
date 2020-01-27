import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import { Route, Link } from "react-router-dom";
import PlayerInfo from "./PlayerInfo";
import Players from "./Players";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      kills: null,
      mmr: null
    };
    this.setImg = this.setImg.bind(this);
    this.setKills = this.setKills.bind(this);
    this.setMmr = this.setMmr.bind(this);
  }

  setImg(img) {
    this.setState({ img: img });
  }
  setKills(kills) {
    this.setState({ kills: kills });
  }
  setMmr(mmr) {
    this.setState({ mmr: mmr });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to={"/user"}>
            <h1>Players</h1>
          </Link>
          <Link to={"/user/creizai"}>
            <h1>creizai</h1>
          </Link>
          <Link to={"/user/nexanomaly"}>
            <h1>nexanomaly</h1>
          </Link>
          <Link to={"/user/rekyu3d"}>
            <h1>rekyu3d</h1>
          </Link>
        </header>

        <Route path="/" exact render={Home} />
        <Route path="/user" exact render={Players} />
        <Route
          path="/user/:userName"
          render={routerProps => (
            <PlayerInfo
              {...routerProps}
              {...this.state}
              setImg={this.setImg}
              setKills={this.setKills}
              setMmr={this.setMmr}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
