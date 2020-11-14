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
        return action.input;
      case "sort":
          //have to make copy because will not re render if just sorted thats why [...state]
          return [...state].sort((a,b)=>(a.name>b.name) ? 1: -1);
      default: 
      return Employees;
    }
  },Employees);

  function handleChange(value){
    const matchingEmployees = [];
    for(var i = 0; i<Employees.length; i++){
      if(Employees[i].name.includes(value)){
        matchingEmployees.push(Employees[i]);
      }
    }
    setEmployees({
      type: "change",
      input: matchingEmployees
    });
  }
  console.log(employeesState);
  return (
    <div className="App">
          <Header/>
          <SeachBar handleChange={handleChange}/>
          <br></br>
          <Table employees = {employeesState} setEmployees = {setEmployees}/>
    </div>
  );
}

export default App;
