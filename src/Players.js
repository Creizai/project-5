import React, { Component } from "react";
import { Link } from "react-router-dom";
import listOfPlayers from "./list.json";

class Players extends Component {
  constructor() {
    super();

    // this.state = {
    //   activeUser: null
    // };
  }
  render() {
    let list = listOfPlayers.map(item => {
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
