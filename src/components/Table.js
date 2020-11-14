import React from "react";
import Icons from "./icons";

function Table({employees, setEmployees}){

    return (
    <div className = "container">
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col" >name 
                <button 
                    style = {{padding:"0", border:"none",background:"none"}} 
                    onClick ={ () => setEmployees({type: "sort"})}>
                    <Icons />
                </button>
                </th>
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

export default Table;