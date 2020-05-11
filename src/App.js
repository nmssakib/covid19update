import React, { Component } from "react";
import Axios from "axios";
import "./custom.css";
import OptionBox from "./components/OptionBox";
// import Card from "./components/Card";
import CardList from "./components/CardList";

class App extends Component {
  //STATE............................
  state = {
    filteredData: [],
    countries: [],
    targetValue: "",
  };

  // getTargetValue = (target) => {
  //   this.setState({ targetValue: target });
  // };
  getTargetValue = (target) => {
    let newFilteredData = this.state.countries.filter((country) => {
      return country.Country.includes(target);
    });
    let [x] = newFilteredData;
    this.setState({ filteredData: x });
  };

  //LIFECYCLES.......................
  componentDidMount() {
    Axios.get("https://api.covid19api.com/summary").then((res) => {
      this.setState({
        countries: res.data.Countries,
        filteredData: res.data.Global,
      });
    });
  }
  //Others..........................
  //RENDER...........................
  render() {
    const { countries, filteredData } = this.state;

    // const { countries, targetValue, filteredData } = this.state;
    // const newFilteredData = countries.filter((country) => {
    //   return country.Country.includes(targetValue);
    // });
    return (
      <div className="uk-container">
        <h1 className="uk-heading-xlarge uk-text-center uk-margin-large-bottom uk-margin-large-top">
          Covid - 19
        </h1>
        <hr class="uk-divider-small" />
        <OptionBox countries={countries} getTargetValue={this.getTargetValue} />
        <CardList countries={filteredData} />
      </div>
    );
  }
}

export default App;
