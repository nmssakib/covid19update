import React, { Component } from "react";

class CardList extends Component {
  render() {
    let { countries } = this.props;
    countries = { ...countries };
    return (
      <div className="uk-grid uk-grid-column uk-child-width-1-2@m uk-child-width-1-2@s uk-padding-large uk-padding-remove-horizontal">
        <div className="uk-margin-bottom">
          <div className="uk-card uk-card-secondary uk-card-body">
            <h3 className="uk-text-emphasis">Total Deaths</h3>
            <p className="uk-heading-large ">{countries.TotalDeaths}</p>
          </div>
        </div>
        <div className="uk-margin-bottom">
          <div className="uk-card uk-card-secondary uk-card-body">
            <h3 className="uk-card-title">New Deaths</h3>
            <p className="uk-heading-large ">{countries.NewDeaths}</p>
          </div>
        </div>
        <div className="uk-margin-bottom">
          <div
            className="uk-card uk-card-body"
            style={{ backgroundColor: "#21bf73" }}
          >
            <h3 className="uk-card-title" style={{ color: "#f9fcfb" }}>
              Total Recovered
            </h3>
            <p className="uk-heading-large" style={{ color: "#f9fcfb" }}>
              {countries.TotalRecovered}
            </p>
          </div>
        </div>
        <div className="uk-margin-bottom">
          <div
            className="uk-card uk-card-body"
            style={{ backgroundColor: "#21bf73" }}
          >
            <h3 className="uk-card-title" style={{ color: "#f9fcfb" }}>
              New Recovered
            </h3>
            <p className="uk-heading-large " style={{ color: "#f9fcfb" }}>
              {countries.NewRecovered}
            </p>
          </div>
        </div>
        <div className="uk-margin-bottom">
          <div
            className="uk-card uk-card-body"
            style={{ backgroundColor: "#fd5e53" }}
          >
            <h3 className="uk-card-title" style={{ color: "#f9fcfb" }}>
              Total Case
            </h3>
            <p className="uk-heading-large " style={{ color: "#f9fcfb" }}>
              {countries.TotalConfirmed}
            </p>
          </div>
        </div>
        <div className="uk-margin-bottom">
          <div
            className="uk-card uk-card-body"
            style={{ backgroundColor: "#fd5e53" }}
          >
            <h3 className="uk-card-title" style={{ color: "#f9fcfb" }}>
              New Case
            </h3>
            <p className="uk-heading-large " style={{ color: "#f9fcfb" }}>
              {countries.NewConfirmed}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardList;
