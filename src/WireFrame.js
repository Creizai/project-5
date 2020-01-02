import React, { Component } from "react";
import "./WireFrame.css";

// holds the origin user names
let players = ["creizai", "nexanomaly", "rekyu3d"];

// API Address
let url = `https://public-api.tracker.gg/v2/apex/standard/profile/origin/`;

class WireFrame extends Component {
  constructor() {
    super();

    console.log(url + players[0]);
    this.state = {
      show: true,
      playerInfo: [],
      profilePic: [],
      kills: [],
      mmr: []
    };

    // Bind the methods
    this.getPlayerData = this.getPlayerData.bind(this);
    this.openPlayer = this.openPlayer.bind(this);

    this.toggleDiv = this.toggleDiv.bind(this);

    players.forEach(Element => this.getPlayerData(Element));
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  //Pull API Data
  getPlayerData(playerName) {
    fetch(url + playerName, {
      headers: { "TRN-Api-Key": "ed558c3a-c545-4329-aff7-74e55afc3b77" }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          playerInfo: [...this.state.playerInfo, res],
          profilePic: [
            ...this.state.profilePic,
            res.data.platformInfo.avatarUrl
          ],
          kills: [
            ...this.state.kills,
            res.data.segments[0].stats.kills.displayValue
          ],
          mmr: [
            ...this.state.mmr,
            res.data.segments[0].stats.rankScore.displayValue
          ]
        });
      });
  }

  // Change tab method
  openPlayer(playerName) {
    var i;
    var x = document.getElementsByClassName("player");
    for (i = 0; i < x.length; i++) {
      //x[i].style.display = "none";
    }
    //Refactor this for react
    // document.getElementById(playerName).style.display = "block";
  }

  render() {
    //

    console.log(this.state.profilePic[0]);
    return (
      <div className="WireFrame-Box">
        <div className="Button-Box">
          <button
            className="button-tab"
            onClick={(this.openPlayer("creizai"), this.toggleDiv)}
          >
            Creizai
          </button>
          <button
            className="button-tab"
            onClick={(this.openPlayer("nexanomaly"), this.toggleDiv)}
          >
            NexAnomaly
          </button>
          <button
            className="button-tab"
            onClick={(this.openPlayer("rekyu3d"), this.toggleDiv)}
          >
            Rekyu3d
          </button>
        </div>

        <div id="creizai" className="info-box player">
          <h2>Creizai</h2>
          <img src={this.state.profilePic[0]} alt="Player"></img>
          <p>Creizai is Loud</p>
        </div>
        <div
          id="nexanomaly"
          className="info-box player" /*style={{ display: 'none' }}*/
        >
          <h2>NexAnomaly</h2>
          <img src={this.state.profilePic[1]} alt="Player"></img>
          <p>NexAnomaly is Funny</p>
        </div>

        <div
          id="rekyu3d"
          className="info-box player"
          style={{ display: "none" }}
        >
          <h2>Rekyu3d</h2>
          <img src={this.state.profilePic[2]} alt="Player"></img>
          <p>Rekyu3d is a grill</p>
        </div>
      </div>
    );
  }
}

export default WireFrame;
