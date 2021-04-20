import React from "react";
import "./SearchField.css";

function SearchField({ onHandleClickSearch }) {
  const readName = (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    onHandleClickSearch(name);
  };
  return (
    <form onSubmit={readName}>
      <label>Search by name</label>
      <div className="inputBox">
        <input type="text" name="name" id="name" placeholder="name" />
        <button>Search</button>
      </div>
    </form>
  );
}

export default SearchField;
