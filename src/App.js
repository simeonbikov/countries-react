import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import CountryCards from "./components/CountryCards";
import countriesAll from "./data/countriesAll.json";
import "./App.css";

let countries = countriesAll;

const contains = (inspectStr, targetStr) =>
  inspectStr &&
  targetStr &&
  -1 !== inspectStr.toLowerCase().indexOf(targetStr.toLowerCase());

const makeListForMatchingCountries = (query) => {
  if (query) {
    return countries.filter(
      (country) =>
        contains(country.name, query) || contains(country.capital, query)
    );
  } else {
    return countries;
  }
};

function App() {
  const [targetCountry, setTargetCountry] = useState("");

  const handleInputChange = (event) => {
    let filteredCountries = makeListForMatchingCountries(event.target.value);
    setTargetCountry(filteredCountries);
  };

  return (
    <div className="App">
      <SearchInput handleChange={handleInputChange} />
      <CountryCards countries={targetCountry ? targetCountry : countries} />
    </div>
  );
}

export default App;
