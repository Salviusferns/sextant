import React, { useState, useEffect } from 'react';
import { w3cwebsocket } from 'websocket'; // Import the specific constructor
import './Latency.css';

const Latency = () => {
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    const wsClient = new w3cwebsocket('ws://localhost:55455'); // Create a new instance

    wsClient.onopen = () => {
      console.log('WebSocket connection opened');
    };

    wsClient.onmessage = (message) => {
      const packetTimestamp = parseInt(message.data);
      const currentTimestamp = new Date().getTime();
      const packetLatency = currentTimestamp - packetTimestamp;
      setLatency(packetLatency);
    };

    wsClient.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }, []);

  return (
    <div className="latency-container">
   
      <p>{latency} ms</p>
    </div>
  );
};

export default Latency;
