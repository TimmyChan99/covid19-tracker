import React from 'react';
import './details.css';
import { FaVirus } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Details = () => {
  const countries = useSelector((state) => state.statsReducer);
  const countryName = countries[0].name;
  const selectedCountry = countries ? countries.filter((item) => (item.id === countryName || item.id === 'Total')) : []; // pass default param in the array

  return (
    <div className="country_details">
      <div className="headline">
        <h2>{selectedCountry[0].name}</h2>
        <div className="headline_stat d-flex-column">
          <span>{selectedCountry[0].todayConfirmed}</span>
          <span>Today confirmed</span>
        </div>
        <div className="headline_stat d-flex-column">
          <span>{selectedCountry[1].todayConfirmed}</span>
          <span>Total confirmed</span>
        </div>
        <FaVirus />
      </div>
      <small>ALL STATS</small>
      <div className="today_confirmed box d-flex-column">
        <span className="stat_number">{selectedCountry[0].todayConfirmed}</span>
        <span>today confirmed</span>
      </div>
      <div className="new_death box-odd d-flex-column">
        <span className="stat_number">{selectedCountry[0].todayNewDeaths}</span>
        <span>new death</span>
      </div>
      <div className="new_recovery box-odd d-flex-column">
        <span className="stat_number">{selectedCountry[0].todayNewRecovered}</span>
        <span>new recovery</span>
      </div>
      <div className="today_vs_yesterday_open_cases box d-flex-column">
        <span className="stat_number">{selectedCountry[0].todayVsYesterdayOpenCases.toExponential(2)}</span>
        <span>
          today vs yesterday
          <br />
          {' '}
          open cases
        </span>
      </div>
      <div className="today_vs_yesterday_deaths box d-flex-column">
        <span className="stat_number">{selectedCountry[0].todayVsYesterdayDeaths.toExponential(2)}</span>
        <span>
          today vs yesterday
          <br />
          {' '}
          deaths
        </span>
      </div>
      <div className="today_vs_yesterday_confirmed box-odd d-flex-column">
        <span className="stat_number">{selectedCountry[0].todayVsYesterdayConfirmed.toExponential(2)}</span>
        <span>
          today vs yesterday
          <br />
          {' '}
          confirmed
        </span>
      </div>
      <div className="total_confirmed box-odd d-flex-column">
        <span className="stat_number">{selectedCountry[1].totalTodayConfirmed.toExponential(2)}</span>
        <span>Total confirmed</span>
      </div>
      <div className="total_new_death box d-flex-column">
        <span className="stat_number">{selectedCountry[1].totaltodayNewDeaths}</span>
        <span>Total Death</span>
      </div>
      <div className="total_today_new_recovered box d-flex-column">
        <span className="stat_number">{selectedCountry[1].totalTodayNewRecovered}</span>
        <span>
          total today
          <br />
          {' '}
          new recovered
        </span>
      </div>
      <div className="total_yesterday_deaths box-odd d-flex-column">
        <span className="stat_number">{selectedCountry[1].totalYesterdayDeaths}</span>
        <span>
          total today
          <br />
          {' '}
          new recovered
        </span>
      </div>
      <p>
        Data provided and used for the generation of these products
        comes from the aggregation of different sources,
        each of which have different update times and frequencies.
      </p>
    </div>
  );
};

export default Details;
