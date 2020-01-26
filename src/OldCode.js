// this.state = {
//   show: true,
//   playerInfo: "",
//   profilePic: "",
//   kills: 0,
//   mmr: 0

// Bind the methods
// this.getPlayerData = this.getPlayerData.bind(this);
// players.forEach(Element => this.getPlayerData(Element));

//Pull API Data
// getPlayerData(playerName) {
//   fetch(url + playerName, {
//     headers: { "TRN-Api-Key": "ed558c3a-c545-4329-aff7-74e55afc3b77" }
//   })
//     .then(res => res.json())
//     .then(res => {
//       console.log(res);
//       this.setState({
//         playerInfo: [...this.state.playerInfo, res],
//         profilePic: [
//           ...this.state.profilePic,
//           res.data.platformInfo.avatarUrl
//         ],
//         kills: [
//           ...this.state.kills,
//           res.data.segments[0].stats.kills.displayValue
//         ],
//         mmr: [
//           ...this.state.mmr,
//           res.data.segments[0].stats.rankScore.displayValue
//         ]
//       });
//     });
// }

// const name = this.state.playerInfo;
// const pic = this.state.profilePic;
// const kills = this.state.kills;
// const mmr = this.state.mmr;

{
  /* <h2>{name}</h2>
        <img src={pic} alt={name}></img>
        <h2>{kills}</h2>
        <h2>{mmr}</h2> */
}

// {this.state.show(
//   <div
//     id="nexanomaly"
//     className="info-box player" /*style={{ display: 'none' }}*/
//   >
//     <h2>NexAnomaly</h2>
//     <img src={this.state.profilePic[1]} alt="Player"></img>
//     <p>NexAnomaly is Funny</p>
//   </div>
// )}

// constructor() {
//   super();

//   console.log(url + players[0]);
//   this.state = {
//     show: true,
//     playerInfo: "",
//     profilePic: "",
//     kills: 0,
//     mmr: 0
//   };

//   // Bind the methods
//   this.getPlayerData = this.getPlayerData.bind(this);
//   players.forEach(Element => this.getPlayerData(Element));
// }

// Change tab method

//   import React, { Component } from "react";
// import "./WireFrame.css";
// import PlayerInfo from "./PlayerInfo";

// // holds the origin user names
// let players = ["creizai", "nexanomaly", "rekyu3d"];

// // API Address
// let url = `https://public-api.tracker.gg/v2/apex/standard/profile/origin/`;

// class WireFrame extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       player: null
//     };
//     this.setPlayer = this.setPlayer.bind(this);
//   }

//   setPlayer(player) {
//     this.setState({ player: player });
//   }

//   render() {
//     const playerTabs = players.map(player => <h1>{player}</h1>);

//     return (
//       <div className="WireFrame-Box">
//         <div className="Button-Box">{playerTabs}</div>
//         <PlayerInfo props={this.state} />
//       </div>
//     );
//   }
// }

// export default WireFrame;
