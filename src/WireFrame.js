import React, { Component } from 'react'

// holds the origin user names
let players = [
    'creizai',
    'nexanomaly',
    'rekyu3d'
]

// API Address
let url = `https://public-api.tracker.gg/v2/apex/standard/profile/origin/`;



class WireFrame extends Component {
    constructor() {
        super()

        this.state = {
            //playerInfo: [],
            //profilePic: [],
            profilePic: 'https://secure.download.dm.origin.com/production/avatar/prod/userAvatar/12655624/208x208.JPEG',
            //kills: [],
            //mmr: []
        }

        // Bind the methods
        this.openPlayer = this.openPlayer.bind(this)
    }

    // Pull API Data
    // componentDidMount() {
    //     fetch(url + player[0], {
    //       headers: { 'TRN-Api-Key': 'ed558c3a-c545-4329-aff7-74e55afc3b77' }
    //     })
    //       .then(res => res.json())
    //       .then(res => {
    //         console.log(res);
    //         this.setState({ 
    //             playerInfo: [res],
    //          })
    //       })
    //   }

    // Change tab method
    // openPlayer(cityName) {
    //     var i;
    //     var x = document.getElementsByClassName("player");
    //     for (i = 0; i < x.length; i++) {
    //       x[i].style.display = "none";  
    //     }
    //     // Refactor this for react
    //     //document.getElementById(cityName).style.display = "block";  
    //   }


    render(){
        return (
            <div className="WireFrame-Box"> 
                        <div className="Button-Box">
          <button className="button-tab" onclick={this.openPlayer('London')}>Creizai</button>
          <button className="button-tab" onclick={this.openPlayer('Paris')}>NexAnomaly</button>
          <button className="button-tab" onclick={this.openPlayer('Tokyo')}>Rekyu3d</button>
        </div>

        <div id="London" className="w3-container player">
          <h2>London</h2>
          <img src="https://secure.download.dm.origin.com/production/avatar/prod/userAvatar/12655624/208x208.JPEG"></img>
          <p>London is the capital city of England.</p>
        </div>
        <div id="Paris" className="w3-container player" style={{display: 'none'}}>
          <h2>Paris</h2>
          <p>Paris is the capital of France.</p>
        </div>

        <div id="Tokyo" className="w3-container player" style={{display: 'none'}}>
          <h2>Tokyo</h2>
          <p>Tokyo is the capital of Japan.</p>
        </div>
            </div>
        )
    }
}

export default WireFrame;