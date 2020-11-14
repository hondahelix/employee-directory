import React from "react";
import Icons from "./icons";
import "./type.css";

function Table({pokemons, setPokemons}){

    return (
    <div className = "container">
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col" >Name 
                <button 
                    style = {{padding:"0", border:"none",background:"none"}} 
                    onClick ={ () => setPokemons({type: "sort"})}>
                    <Icons />
                </button>
                </th>
                <th scope="col">Id</th>
                <th scope="col">Type 1</th>
                <th scope="col">Type 2</th>
                </tr>
            </thead>
            <tbody>
                {pokemons.map(pokemon => 
                <tr key = {pokemon.id}>
                    <td><img id = {pokemon.name} src={pokemon.image} alt={pokemon.name} className="img-responsive"/></td>
                    <td>{pokemon.name}</td>
                    <td>{pokemon.id}</td>
                    <td >
                        <p id = "type" className = {pokemon.type1}>{pokemon.type1}</p>
                    </td>
                    <td>                    
                        <p id = "type" className = {pokemon.type2}>{pokemon.type2}</p>
                    </td>
                </tr>
                )}
            </tbody>
      </table>
    </div>
    );
}

export default Table;