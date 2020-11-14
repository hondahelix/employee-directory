import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import SeachBar from "./components/SearchBar"

function App() {
  return (
    <div className="App">
      <Header/>
      <SeachBar/>
      <br></br>
      <Table />
    </div>
  );
}

export default App;
