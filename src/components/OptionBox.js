import React from "react";

const OptionBox = ({ countries, getTargetValue }) => {
  //condition..........................
  let data = countries ? (
    countries.map((country) => {
      return <option key={country.CountryCode}>{country.Country}</option>;
    })
  ) : (
    <div>No data</div>
  );

  //Handles..........................
  const handleChange = (e) => {
    getTargetValue(e.target.value);
    console.log(e.target.value);
  };

  //Component........................
  return (
    <form onChange={handleChange}>
      <div className="uk-margin">
        <div className="uk-form-controls">
          <select className="uk-select" id="form-horizontal-select">
            {data}
          </select>
        </div>
      </div>
    </form>
  );
};

export default OptionBox;
