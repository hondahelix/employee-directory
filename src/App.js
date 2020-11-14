import React, {useReducer} from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import SeachBar from "./components/SearchBar"
import Pokemons from "./components/pokemons.json";
function App() {
  const [pokemonsState, setPokemons] = useReducer((state, action) =>{
    switch(action.type){
      case "change":
        return action.input;
      case "sort":
          //have to make copy because will not re render if just sorted thats why [...state]
          return [...state].sort((a,b)=>(a.name>b.name) ? 1: -1);
      default: 
      return Pokemons;
    }
  },Pokemons);

  function handleChange(value){
    const matchingPokemons = [];
    for(var i = 0; i<Pokemons.length; i++){
      if(Pokemons[i].name.includes(value)){
        matchingPokemons.push(Pokemons[i]);
      }
    }
    setPokemons({
      type: "change",
      input: matchingPokemons
    });
  }
  //console.log(employeesState);
  return (
    <div className="App">
          <Header/>
          <SeachBar handleChange={handleChange}/>
          <br></br>
          <Table pokemons = {pokemonsState} setPokemons = {setPokemons}/>
    </div>
  );
}

export default App;
