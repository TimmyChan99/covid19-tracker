import React from 'react';
import { useSelector } from 'react-redux';
import { GiWorld } from 'react-icons/gi';
import CountryBox from './CountryBox';

const StatsDetails = () => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8];
  const countries = useSelector((state) => state.statsReducer);
  const countriesList = countries ? countries[1].filter((item) => item.id !== 'selected' && item.name !== 'Total').map((item) => (
    <li
      key={item.countryId}
      className="box"
    >
      <CountryBox
        countryName={item.countryName}
        countryNewCases={item.countryNewCases}
      />
    </li>
  )) : [];

  return (
    <div className="country_details">
      <div className="headline d-flex-row">
        <GiWorld className="world" />
        <div className="headline_total">
          <h1>Countries</h1>
          <h3>
            Total  &nbsp;
            <span>{countries[1][0].totalNewCases}</span>
          </h3>
        </div>
      </div>
      <small>ALL STATS</small>
      <ul className="countries_list">
        { countriesList }
      </ul>

    </div>
  );
};

export default StatsDetails;
