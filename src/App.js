// src/App.js
import React from 'react';
import './App.css';
import Banner from './Components/Banner';
import Exhibit from './Components/Exhibit';
import IPAddress from './Components/IPAddress';
import Latency from './Components/Latency';


function App() {
  return (
    <div className="App">
      <Banner />
      <div className="exhibits-container">
        <Exhibit title="IPv4 Address">
          <IPAddress type="IPv4" />
        </Exhibit>
        <Exhibit title="IPv6 Address">
          <IPAddress type="IPv6" />
        </Exhibit>
        <Exhibit title="Packet Latency">
          <Latency />
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
