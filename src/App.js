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
        console.log("hit sort");
        console.log(state);
        return state;
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

  function handleSort(){
    const sortedEmployees = Employees.sort((a,b)=>{
        if(a.name>b.name){
          return 1;
        }
        else{
          return -1;
        }
    });
    //console.log(sortedEmployees);
    setEmployees({
      type: "sort",
      input: sortedEmployees
    });
  }
  console.log(employeesState);
  return (
    <div className="App">
          <Header/>
          <SeachBar handleChange={handleChange}/>
          <br></br>
          <Table employees = {employeesState} handleSort ={handleSort}/>
    </div>
  );
}

export default App;
