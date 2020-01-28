import React, { Component } from "react";
import "./PlayerInfo.css";

let apiUrl = `https://public-api.tracker.gg/v2/apex/standard/profile/5/`;

class PlayerInfo extends Component {
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

  setPlayerInfo(userName, img, kills, mmr) {
    this.setState({
      userName: userName,
      img: img,
      kills: kills,
      mmr: mmr
    });
  }

  componentDidMount() {
    // // This still needs to pull the user
    let userName = this.props.match.params.userName;
    let url = `${apiUrl}${userName}`;
    console.log(apiUrl);
    console.log(userName);
    console.log(url);

    fetch(url, {
      mode: "cors",
      headers: { "TRN-Api-Key": "ed558c3a-c545-4329-aff7-74e55afc3b77" }
    })
      .then(response => response.json())
      .then(response => {
        let newUser = this.props.match.params.userName;
        let newImg = response.data.platformInfo.avatarUrl;
        let newKills = response.data.segments[0].stats.kills.displayValue;
        let newMmr = response.data.segments[0].stats.rankScore.displayValue;

        // this.setPlayerInfo(newUser, newImg, newKills, newMmr);
        this.setState({
          userName: newUser,
          img: newImg,
          kills: newKills,
          mmr: newMmr
        });
        console.error(this.state);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>User name: {this.state.userName}</h1>
        <img src={this.state.img} />
        <div className="kills">{this.state.kills}</div>
        <div className="mmr">{this.state.mmr}</div>
      </div>
    );
  }
}

export default PlayerInfo;
