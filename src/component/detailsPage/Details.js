import React from 'react';
import './details.css';
import { useSelector } from 'react-redux';
import ErrorMessage from '../errorMessage/ErrorMessage';
import StatsDetails from './StatsDetails';
import CountryBox from './CountryBox';

const Details = () => {
  
  const countries = useSelector((state) => state.statsReducer);
  const countryName = countries[0].name;
  const selectedCountry = countries ? countries.filter((item) => (item.id === countryName || item.id === 'Total')) : defaultData;
  console.log(selectedCountry);
  return (
    <div>
      
      <StatsDetails />)
      { /*(countries.length === 1 && selectedCountry.length < 2) && (<ErrorMessage />) */}
    </div>
  );
};

export default Details;
