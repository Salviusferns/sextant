// src/Exhibit.js
import './Exhibit.css';
import React from 'react';

const Exhibit = ({ title, children }) => {
  return (
    <div className="exhibit">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Exhibit;
