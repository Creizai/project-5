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
  }

  apiCallMethod() {
    let userName = this.props.matchs.params.userName;
    let url = `${apiUrl}${userName}`;
    fetch(url, {
      mode: "cors",
      headers: { "TRN-Api-Key": "ed558c3a-c545-4329-aff7-74e55afc3b77" }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        let newUser = res.data.platformInfo.platformUserId;
        let newImg = res.data.platformInfo.avatarUrl;
        let newKills = res.data.segments[0].stats.kills.displayValue;
        let newMmr = res.data.segments[0].stats.rankScore.displayValue;

        this.setState({
          userName: newUser,
          img: newImg,
          kills: newKills,
          mmr: newMmr
        });

        console.log(this.props);
      });
  }

  componentDidMount() {
    console.log(this.props);
    this.apiCallMethod();
  }

  // componentDidUpdate(prevProps) {
  //   //Typical usage, don't forget to compare the props
  //   console.log(this.props);
  //   if (this.props.userName !== prevProps.userName) {
  //     this.apiCallMethod();
  //   }
  // }

  component;

  render() {
    // console.log(this.state);
    return (
      <div className="PlayerInfo">
        <h1>User name: {this.props.userName}</h1>
        <img src={this.props.img} />
        <div className="kills">{this.props.kills}</div>
        <div className="mmr">{this.props.mmr}</div>
      </div>
    );
  }
}

export default PlayerInfo;
