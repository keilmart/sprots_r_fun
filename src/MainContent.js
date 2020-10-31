import React, { Component } from "react";
import './mainContent.scss';
import progress from './assets/icons/progress.svg';
import playerOne from './assets/headshots/Lebron-James-PLP59D7092A6F6CEv2.png';
import playerTwo from './assets/headshots/Anthony-Davis-PLP59D70938C0B3Ev2.png';
import playerThree from './assets/headshots/Aaron Gordon -PLP59D7092156491v2.png';
import playerFour from './assets/headshots/Pascal-Siakam-PLP59D70927CC6DD.png';
import playerFive from './assets/headshots/Kawhi-Leonard-PLP59D7093A107E7v2.png';
import playerSix from './assets/headshots/Kyle-Lowry-PLP59D70927DF104.png';
import playerSeven from './assets/headshots/Dangelo Russell PLP59D709255D994v4.png';
import notify from './assets/icons/notify-me.svg';
import deposit from './assets/icons/money-bag.svg';
import ios from './assets/icons/ios-app.svg';
import google from './assets/icons/google-play.svg';

class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            players: [
                {
                    "last_name": "James",
                    "points": 28
                },
                {
                    "last_name": "Davis",
                    "points": 29
                },
                {
                    "last_name": "Gordon",
                    "points": 16
                },
                {
                    "last_name": "Siakam",
                    "points": 24
                },
                {
                    "last_name": "Leonard",
                    "points": 27
                },
                {
                    "last_name": "Lowry",
                    "points": 18
                },
                {
                    "last_name": "Russell",
                    "points": 23
                }
            ],
            playerFinalData: [],
        }
    }

    playerFinalData= () => {
    let playerInfo = this.state.players.map((playerStats) => {
      return {
        LastName: playerStats.last_name,
        Points: playerStats.points,
      };
    });
    this.setState({
      playerFinalData: playerInfo,
    });
  };

    render() {
        console.log(this.state.playerFinalData.last_name)
        return (
            <main>
                <div class="flex contentContainer">
                    <img src={progress} class="progressLine" alt="progress line element" />
                    <h2>your playtime is set!</h2>
                    <h3>come back @ 7:30pm to track it live!</h3>
                    <p>Pro Tip: You can manage your PlayLine's until they go live in the Upcoming area</p>
                    <div class="flex playerContainer">
                        <img src={playerOne} class="playerHeadshot" alt="Dangelo Russel Headshot" />
                        <img src={playerTwo} class="playerHeadshot" alt="Aaron Gordon Headshot" />
                        <img src={playerThree} class="playerHeadshot" alt="Lebron James Headshot" />
                        <img src={playerFour} class="playerHeadshot" alt="Kyle Lowry Headshot" />
                        <img src={playerFive} class="playerHeadshot" alt="Pascal Siakim Headshot" />
                        <img src={playerSix} class="playerHeadshot" alt="Kawhi Keonard Headshot" />
                        <img src={playerSeven} class="playerHeadshot" alt="Anthony Davis Headshot" />
                    </div>
                    <div class="flex statsContainer">
                        {this.state.players.map((playerStats) => {
                            return (
                                <li className="flex imgBacker" key={playerStats.points} id={playerStats.last_name}>
                                    <p>{playerStats.last_name}</p>
                                    <div class="flex numberBackground">
                                    <p class="points">{playerStats.points}</p>
                                    </div>
                                    <p>pts</p>
                                </li>
                            );
                        })}
                    </div>      
                        <div class="flex buttonContainer"> 
                    <button class="flex notify">
                        <img src={notify} class="flex notifyButton" alt="Button to notify user" />
                        <h4>notify</h4>
                    </button>
                    <button class="flex">
                        <img src={deposit} class="flex depositButton" alt="Button for user to deposit" />
                        <h4>deposit</h4>
                    </button>
                    </div>
                    <h4>download the app</h4>
                    <div class="flex mobileContainer">
                    <img src={ios} class="iosIcon" alt="Button for the ios store" />
                    <img src={google} class="googleIcon" alt="Button for the google store" />
                    </div>
                </div>
            </main>
        )
    }
}



export default MainContent;