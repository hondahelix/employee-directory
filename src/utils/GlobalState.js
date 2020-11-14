import React, { createContext, useReducer, useContext } from "react";
import Employees from "../components/employees.json";
const employeeContext = createContext(Employees);

  const { Provider } = employeeContext;

  function reducer(state, action) {
    switch (action.type){
        // case "search"
        default: 
        console.log(state);
        return Employees;
    }

  }

  function EmployeeProvider({ value = [], ...props }) {
    const [state, dispatch] = useReducer(reducer);
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
  }
  
  function useEmployeeContext() {
    return useContext(employeeContext);
  }
  
  export { EmployeeProvider, useEmployeeContext };