import React from 'react';
import { useSelector } from 'react-redux';
import CountryBox from './CountryBox';
import { GiWorld } from 'react-icons/gi';

const StatsDetails = () => {

  const ids = [1, 2,3,4,5,6,7,8];
  
  return (
    <div className="country_details">
      <div className="headline d-flex-row">
        <GiWorld className="world"/>
        <div className="headline_total">
          <h1>Countries</h1>
          <h3>Total  &nbsp; <span>66024</span></h3>
        </div>
      </div>     
      <small>ALL STATS</small>
      <ul className="countries_list">
        { ids.map((item) => (
          <li 
          key={item}
          className="box"
          >
            <CountryBox />
          </li>
        ))}
      </ul>
      
      
    </div>
  );
};

export default StatsDetails;
