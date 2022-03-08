import React from 'react';
import './details.css';
import { useSelector } from 'react-redux';
import ErrorMessage from '../errorMessage/ErrorMessage';
import StatsDetails from './StatsDetails';

const Details = () => {
  const defaultData = [{
    id: 'No Data',
    totalTodayConfirmed: 0,
    totaltodayNewDeaths: 0,
    totalTodayNewRecovered: 0,
    totalYesterdayDeaths: 0,
  },
  {
    id: 'No Data',
    name: 'No Data',
    todayConfirmed: 0,
    todayNewDeaths: 0,
    todayNewRecovered: 0,
    yesterdayDeaths: 0,
    todayVsYesterdayOpenCases: 0,
    todayVsYesterdayDeaths: 0,
    todayVsYesterdayConfirmed: 0,
    todayRecovered: 0,
  }];
  const countries = useSelector((state) => state.statsReducer);
  const countryName = countries[0].name;
  const selectedCountry = countries ? countries.filter((item) => (item.id === countryName || item.id === 'Total')) : defaultData;
  console.log(selectedCountry);
  return (
    <div>
      { (countries.length > 1 && selectedCountry.length === 2) && (<StatsDetails selectedCountry={selectedCountry} />)}
      { (countries.length === 1 && selectedCountry.length < 2) && (<ErrorMessage />)}
    </div>
  );
};

export default Details;
