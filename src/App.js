// import React, { useState } from "react";
import CountryCards from "./components/CountryCards";
import countriesAll from "./data/countriesAll.json";
import "./App.css";

let countries = countriesAll;

function App() {
  return (
    <div className="App">
      <CountryCards countries={countries}/>
    </div>
  );
}

export default App;
