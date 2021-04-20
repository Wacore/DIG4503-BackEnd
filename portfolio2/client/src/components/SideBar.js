// import components and css file
import React from "react";
import EmployeeCard from "./EmployeeCard";
import SearchField from "./SearchField";
import "./SideBar.css";

// create a functon called SideBar to render a side bar
function SideBar({ employees, onSelectEmployee, onHandleClickSearch }) {
  // conditional rendering result box
  // if no result, it will return "Not Found"
  // if results existed, it wil return card components
  return (
    <div className="sideBarContainer">
      <div className="searchContainer">
        <SearchField onHandleClickSearch={onHandleClickSearch} />
      </div>
      <div className="searchResultsBox" id="resultsBox">
        {employees.length >= 1 &&
          employees.map((e, index) => (
            <EmployeeCard
              key={index}
              object={e}
              onSelectEmployee={onSelectEmployee}
            />
          ))}
        {employees.length < 1 && <h3>Not Found</h3>}
      </div>
    </div>
  );
}

export default SideBar;
