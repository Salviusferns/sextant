// src/IPAddress.js
import React, { useState, useEffect } from 'react';

const IPAddress = ({ type }) => {
  const [ipAddress, setIPAddress] = useState('');

  useEffect(() => {
    const fetchIPAddress = async () => {
      const response = await fetch(`https://api.ipify.org?format=json`);
      const data = await response.json();
      setIPAddress(data.ip);
    };

    fetchIPAddress();
  }, []);

  return (
    <div className='ip-address-container'>
      <h3>Public {type} Address</h3>
      <p>{ipAddress}</p>
    </div>
  );
};

export default IPAddress;
