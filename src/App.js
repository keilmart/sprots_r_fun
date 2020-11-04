import React, { Component } from "react";
import MainContent from "./MainContent.js";
import Links from "./Links.js";
import './App.scss';
import { Card } from 'react-bootstrap';
import logo from './assets/logo/logo@3x.png';

class App extends Component {
  render() {
  return (
    <Card className="App" md>
      <main className="App-header" md={{ span: 6, offset: 3 }}>
        <img src={logo} class="mainLogo" alt="playline logo" />
        <MainContent />
        <Links />
      </main>
      </Card>
    );
  }
}

export default App;
