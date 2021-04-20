import React from "react";
import "./DetailsCard.css";

// create a function to render all emplpyee's details
function DetailsCard({ object }) {
  return (
    <div className="detailsContainer">
      <h3>{object.name}</h3>
      <p>
        <strong>Age:</strong> {object.age}
      </p>
      <p>
        <strong>Position:</strong> {object.position}
      </p>
      <h4>self introduction</h4>
      <p>{object.intro}</p>
    </div>
  );
}

export default DetailsCard;
