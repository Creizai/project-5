import React, { Component } from "react";
import listOfPlayers from "./list.json";
import { Link, Switch } from "react-router-dom";

class Players extends Component {
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
    return <div>{list}</div>;
  }
}

export default Players;
