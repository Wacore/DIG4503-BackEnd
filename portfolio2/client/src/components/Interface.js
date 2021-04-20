// import components, css file and library
import React from "react";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";
import DetailsCard from "./DetailsCard";
import "./Interface.css";
import _ from "lodash";

function Interface() {
  // creates three states
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [filteredEmmpyees, setFilteredEmmpyees] = useState([]);
  const [employees, setEmployees] = useState([]);

  // create a function called callApi to fetch data from the api
  const callApi = async () => {
    // Calling the api and await for the result
    const response = await fetch("http://localhost:3010/employees");
    const body = await response.json();
    // The request is rejected, send an error
    if (response.status !== 200) throw Error(body.message);
    // return data
    return body;
  };

  // create a function to handle the click event and render employee's info
  function handleSelectEmployee(name) {
    // find all employee with the same name
    let result = _.find(employees, { name: name });
    setSelectedEmployee(result);
  }

  // create a function to handle the click event
  function handleClickSearch(name) {
    // find all employee with the same name
    let result = _.filter(employees, { name: name });
    setFilteredEmmpyees(result);
  }

  useEffect(() => {
    // Use the function to fetch data from the API
    callApi()
      .then((res) => {
        setEmployees(res);
        setFilteredEmmpyees(res);
      }) // set data into the state
      .catch((err) => console.log(err)); // if any errors occurred, log the error to the console.
  }, []); // componentDidMount

  return (
    <div className="interface">
      <SideBar
        employees={filteredEmmpyees}
        onSelectEmployee={handleSelectEmployee}
        onHandleClickSearch={handleClickSearch}
      />
      <div className="employeeDetails">
        {selectedEmployee && (
          <DetailsCard
            object={{
              age: selectedEmployee.age,
              intro: selectedEmployee.intro,
              name: selectedEmployee.name,
              position: selectedEmployee.position,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Interface;
