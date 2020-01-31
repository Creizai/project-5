import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PlayerInfo from "./PlayerInfo";
import Player from "./Players";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      img: "",
      kills: "",
      mmr: ""
    };
    this.setPlayerInfo = this.setPlayerInfo.bind(this);
  }

  setPlayerInfo(newUser, newImg, newKills, newMmr) {
    this.setState({
      userName: newUser,
      img: newImg,
      kills: newKills,
      mmr: newMmr
    });
    console.error(this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">React UI Tabs</header>
        <Player />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/user/:userName"
            render={routerProps => (
              <PlayerInfo {...routerProps} {...this.state} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
