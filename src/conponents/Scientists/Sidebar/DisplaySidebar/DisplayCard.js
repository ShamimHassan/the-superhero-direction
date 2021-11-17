import React from 'react';
import "./DisplayCard.css";

const DisplaySidebar = props => {
  const {scientist} =props;

  return (
    <div className="selected-card">
      <div className="card-image">
        <img src={scientist?.picture} alt="selected scientist" />
      </div>
      <div className="seleceted-name">
        <h4>{scientist?.name.toLowerCase()}</h4>
      </div>
    </div>
  );
};

export default DisplaySidebar;