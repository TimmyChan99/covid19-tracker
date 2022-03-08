import React from 'react';
import { useSelector } from 'react-redux';
import CountryBox from './CountryBox';
import { FaVirus } from 'react-icons/fa';

const StatsDetails = () => {
  
  const countries = useSelector((state) => state.statsReducer);
  const countryName = countries[0].name;
  const selectedCountry = countries ? countries.filter((item) => (item.id === countryName || item.id === 'Total')) : defaultData;

  const ids = [1, 2,3,4,5,6,7,8];
  
  return (
    <div className="country_details">
      <div className="headline">
        <h2>COUNTRY</h2>
        <div className="headline_stat d-flex-column">
          <span>601</span>
          <span>Today confirmed</span>
        </div>
        <div className="headline_stat d-flex-column">
          <span>601</span>
          <span>Total confirmed</span>
        </div>
        <FaVirus />
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
