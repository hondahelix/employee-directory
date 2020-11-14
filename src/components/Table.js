import React from "react";
import Icons from "./icons";

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
                <th scope="col">Type</th>
                </tr>
            </thead>
            <tbody>
                {pokemons.map(pokemon => 
                <tr key = {pokemon.id}>
                <th><img src={pokemon.image} alt={pokemon.name} className="img-responsive"/></th>
                <td>{pokemon.name}</td>
                <td>{pokemon.id}</td>
                <td>{pokemon.type}</td>
                </tr>
                )}
            </tbody>
      </table>
    </div>
    );
}

export default Table;