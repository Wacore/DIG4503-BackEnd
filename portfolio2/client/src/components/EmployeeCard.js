// import React
import React from "react";
// import css file
import "./EmployeeCard.css";

// Create a function called EmployeeCard to render a card component
function EmployeeCard({ object, onSelectEmployee }) {
  return (
    <div
      className="cardContainer"
      onClick={() => onSelectEmployee(object.name)}
    >
      <div className="cardImage">
        <img
          src={
            "https://www.seekpng.com/png/detail/72-729756_how-to-add-a-new-user-to-your.png"
          }
        />
      </div>
      <div className="cardInfo">
        <h3>{object.name}</h3>
        <p>Age: {object.age}</p>
      </div>
    </div>
  );
}

export default EmployeeCard;
