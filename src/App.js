import React, {useReducer} from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import SeachBar from "./components/SearchBar"
//import {EmployeeProvider} from "./utils/GlobalState";
import Employees from "./components/employees.json";
function App() {
  const [employeesState, setEmployees] = useReducer((state, action) =>{
    switch(action.type){
      case "change":
        console.log(action.input);
        return Employees;
      default: 
      return Employees;
    }
  },Employees);

  ///make function that loops through changes in employees and sends then to set employess
  console.log(employeesState);




  return (
    <div className="App">
          <Header/>
          <SeachBar setEmployees = {setEmployees}/>
          <br></br>
          <Table employees = {employeesState}/>
    </div>
  );
}

export default App;
