import React from "react";
//import { useEmployeeContext } from "../utils/GlobalState";

function Table({employees, setEmployees}){
    // const [state, dispatch] = useEmployeeContext();
    // console.log(state);
    return (
    <div className = "container">
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col"  ><button onClick ={ () => setEmployees({type: "sort"})}>name</button></th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => 
                <tr key = {employee.name}>
                <th>{employee.image}</th>
                <td>{employee.name}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                </tr>
                )}
            </tbody>
      </table>
    </div>
    );
}
/* <tbody>
{props.employees.map(employee => 
<tr>
  <th>employee.image</th>
  <td>employee.name</td>
  <td>employee.phone</td>
  <td>employee.email</td>
</tr>
)}
</tbody>  */
export default Table;