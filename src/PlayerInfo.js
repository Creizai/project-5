import React, { Component } from "react";
import "./PlayerInfo.css";

class PlayerInfo extends React.Component {
  render() {
    return (
      <div className="player">
        <h2>Creizai</h2>
        <h5>
          <span>Avatar: </span>
          Image
        </h5>
        <h5>
          <span>Kills: </span>
          200
        </h5>
        <h5>
          <span>MMR: </span>
          3000
        </h5>
      </div>
    );
  }
}
export default PlayerInfo;
