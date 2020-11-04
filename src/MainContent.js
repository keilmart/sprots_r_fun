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

    // This below is an example of taking th function and saving into state rather than mapping over in the render //

//     playerFinalData= () => {
//     let playerInfo = this.state.players.map((playerStats) => {
//       return {
//         LastName: playerStats.last_name,
//         Points: playerStats.points,
//       };
//     });
//     this.setState({
//       playerFinalData: playerInfo,
//     });
//     console.log(this.state.playerFinalData.last_name)
//   };

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
                        <a href="https://www.nba.com/stats/player/2544/career/">
                            <img src={playerOne} class="playerHeadshot" alt="Le                   bron James Headshot" />
                        </a>
                        {/* <p>{this.state.players.last_name[2]}</p> */}
                        <a href="https://www.nba.com/player/203076/anthony-davis">
                            <img src={playerTwo} class="playerHeadshot" alt="Anthony Davis Headshot" />
                        </a>
                        <a href="https://www.nba.com/player/203932/aaron-gordon">
                            <img src={playerThree} class="playerHeadshot" alt="Aaron Gordon Headshot"  />
                        </a>
                        <a href="https://www.nba.com/player/1627783/pascal-siakam">
                            <img src={playerFour} class="playerHeadshot" alt= "Pascal Siakim Headshot"/>
                        </a>
                        <a href="https://www.nba.com/player/202695/kawhi-leonard">
                            <img src={playerFive} class="playerHeadshot" alt="Kawhi Leonard Headshot"  />
                        </a>
                        <a href="https://www.basketball-reference.com/players/l/lowryky01.html">
                            <img src={playerSix} class="playerHeadshot" alt="Kyle Lowry Headshot"/>
                        </a>
                        <a href="https://www.nba.com/player/1626156/dangelo-russell">
                            <img src={playerSeven} class="playerHeadshot" alt="Anthony Davis Headshot" />
                        </a>
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
                    <a href="https://notify.ly/">
                        <button class="flex notify">
                            <img src={notify} class="flex notifyButton" alt="Button to notify user" />
                            <h4>notify me</h4>
                        </button>
                    </a>
                    <a href="https://www.merriam-webster.com/dictionary/deposit%20money">
                        <button class="flex">
                            <img src={deposit} class="flex depositButton" alt="Button for user to deposit" />
                            <h4>deposit</h4>
                        </button>
                    </a>
                    </div>
                    <div class="download">
                        <h4>download the app</h4>
                    </div>
                    <div class="flex mobileContainer">
                        <a href="https://www.apple.com/ca/app-store/">
                            <img src={ios} class="iosIcon" alt="Button for the ios store" />
                        </a>
                        <a href="https://play.google.com/store">
                            <img src={google} class="googleIcon" alt="Button for the google store" />
                        </a>
                    </div>
                </div>
            </main>
        )
    }
}

export default MainContent;