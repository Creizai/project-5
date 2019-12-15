import React, { Component } from 'react'
import './WireFrame.css'

// holds the origin user names
let players = [
    'creizai',
    'nexanomaly',
    'rekyu3d'
]

// API Address
let url = `https://public-api.tracker.gg/v2/apex/standard/profile/origin/creizai`;



class WireFrame extends Component {
    constructor() {
        super()

        this.state = {
            playerInfo: [],
            //profilePic: [],
            profilePic: [],
            //kills: [],
            //mmr: []
            mmr: "4,952"
        }

        // Bind the methods
        this.openPlayer = this.openPlayer.bind(this)
    }

    //Pull API Data
    componentDidMount() {
        fetch(url, {
          headers: { 'TRN-Api-Key': 'ed558c3a-c545-4329-aff7-74e55afc3b77' }
        })
          .then(res => res.json())
          .then(res => {
            console.log(res);
            this.setState({ 
                playerInfo: [res],
                profilePic: [res.data.platformInfo.avatarUrl]
             })
          })
      }

    // Change tab method
    openPlayer(playerName) {
        var i;
        var x = document.getElementsByClassName("player");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        // Refactor this for react
        //document.getElementById(playerName).style.display = "block";  
      }


    render() {
        return (
            <div className="WireFrame-Box">
                <div className="Button-Box">
                    <button className="button-tab" onClick={this.openPlayer('creizai')}>Creizai</button>
                    <button className="button-tab" onClick={this.openPlayer('nexanomaly')}>NexAnomaly</button>
                    <button className="button-tab" onClick={this.openPlayer('rekyu3d')}>Rekyu3d</button>
                </div>

                <div id="creizai" className="info-box player">
                    <h2>Creizai</h2>
                    <img src={this.state.profilePic[0]}></img>
                    <p>Creizai is the capital city of England.</p>
                </div>
                <div id="nexanomaly" className="info-box player" style={{ display: 'none' }}>
                    <h2>NexAnomaly</h2>
                    <p>NexAnomaly is the capital of France.</p>
                </div>

                <div id="rekyu3d" className="info-box player" style={{ display: 'none' }}>
                    <h2>Rekyu3d</h2>
                    <p>Rekyu3d is the capital of Japan.</p>
                </div>
            </div>
        )
    }
}

export default WireFrame;