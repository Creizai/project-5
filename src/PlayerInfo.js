import React, { Component } from "react";
import "./PlayerInfo.css";

let apiUrl = `https://public-api.tracker.gg/v2/apex/standard/profile/origin/`;

class PlayerInfo extends Component {
  componentDidMount() {
    // This still needs to pull the user
    const userName = this.props.match.params.userName;
    const url = `${apiUrl}${userName}`;
    console.log(apiUrl);
    console.log(userName);
    console.log(url);

    fetch(url, {
      mode: "no-cors",
      headers: { "TRN-Api-Key": "ed558c3a-c545-4329-aff7-74e55afc3b77" }
    })
      .then(response => response.json())
      .then(response => {
        let newImg = response.data.platformInfo.avatarUrl;
        this.props.setImg(newImg);
        let newKills = response.data.segments[0].stats.kills.displayValue;
        this.props.setImg(newKills);
        let newMmr = response.data.segments[0].stats.rankScore.displayValue;
        this.props.setImg(newMmr);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <h1>User name: {this.props.match.params.userName}</h1>
        <img src={this.props.url}></img>
        <div className="kills">{this.props.kills}</div>
        <div className="mmr">{this.props.mmr}</div>
      </div>
    );
  }
}

export default PlayerInfo;
