import React from "react";

const OptionBox = ({ countries, getTargetValue }) => {
  //condition..........................
  let data = countries ? (
    countries.map((country) => {
      return <option key={country.CountryCode}>{country.Country}</option>;
    })
  ) : (
    <option>No data</option>
  );

  //Handles..........................
  const handleChange = (e) => {
    getTargetValue(e.target.value);
  };

  const handleLoad = (e) => {
    getTargetValue(e.target.value);
  };

  //Component........................
  return (
    <form onSelect={handleLoad} onChange={handleChange}>
      <div className="uk-margin">
        <div className="uk-form-controls">
          <select className="uk-select">{data}</select>
        </div>
      </div>
    </form>
  );
};

export default OptionBox;
