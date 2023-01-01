import React from "react";

const CountryCards = (props) => {
  return (
    <div className="cards-container">
      {props.countries.map((country) => {
        const population = new Intl.NumberFormat().format(country.population);
        return (
          <div className="card">
            <img src={country.flag} alt={country.name} className="flag-img" />
            <h3>{country.name}</h3>
            <p>
              <b>Population:</b> {population}
            </p>
            <p><b>Region:</b> {country.region}</p>
            <p><b>Capital:</b> {country.capital}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CountryCards;
