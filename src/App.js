import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import PlayerInfo from "./PlayerInfo";
import Players from "./Players";
import Home from "./Home";

import listOfPlayers from "./list.json";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     img: "",
  //     kills: "",
  //     mmr: ""
  //   };
  //   this.setImg = this.setImg.bind(this);
  //   this.setKills = this.setKills.bind(this);
  //   this.setMmr = this.setMmr.bind(this);
  // }

  // setImg(img) {
  //   this.setState({ img: img });
  // }
  // setKills(kills) {
  //   this.setState({ kills: kills });
  // }
  // setMmr(mmr) {
  //   this.setState({ mmr: mmr });
  // }

  render() {
    let list = listOfPlayers.map(item => {
      console.log(item);
      return (
        <div className="players" key={item.userName}>
          <p>
            <Link to={"/user/" + item.userName}>{item.userName}</Link>:{" "}
            {item.userName}
          </p>
        </div>
      );
    });
    return (
      <div className="App">
        <header className="App-header">{list}</header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" exact component={Players} />
          <Route
            path="/user/:userName"
            render={routerProps => (
              <PlayerInfo
                {...routerProps}
                // {...this.state}
                // setImg={this.setImg}
                // setKills={this.setKills}
                // setMmr={this.setMmr}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
