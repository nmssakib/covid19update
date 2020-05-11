import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  render() {
    const { countries } = this.props;
    return (
      <div className="uk-grid uk-grid-column uk-child-width-1-2@m uk-child-width-1-2@s">
        <div>
          {console.log(countries.NewConfirmed)}
          <div className="uk-card uk-card-secondary uk-card-body">
            <h3 className="uk-card-title">Total Deaths</h3>
            <p className="uk-heading-large ">{countries.TotalDeaths}</p>
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-secondary uk-card-body">
            <h3 className="uk-card-title">New Deaths</h3>
            <p className="uk-heading-large ">{countries.NewDeaths}</p>
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-primary uk-card-body">
            <h3 className="uk-card-title">Total Recovered</h3>
            <p className="uk-heading-large ">{countries.TotalRecovered}</p>
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-primary uk-card-body">
            <h3 className="uk-card-title">New Recovered</h3>
            <p className="uk-heading-large ">{countries.NewRecovered}</p>
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body">
            <h3 className="uk-card-title">Total Case</h3>
            <p className="uk-heading-large ">{countries.TotalConfirmed}</p>
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body">
            <h3 className="uk-card-title">New Case</h3>
            <p className="uk-heading-large ">{countries.NewConfirmed}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardList;
