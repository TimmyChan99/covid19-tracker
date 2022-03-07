import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getStatsFromAPIDispatcher } from '../../redux/dates/date';
import './date.css';

const Date = () => {
  const dispatch = useDispatch();
  const getDate = (e) => {
    const date = e.target.value;
    dispatch(getStatsFromAPIDispatcher(date));
  };
  return (
    <div className="date_container d-flex-column">
      <h1>Covid-19 Tracker</h1>
      <div className="date_modal d-flex-column">
        <span>Choose a Specific Day</span>
        <input type="date" onChange={getDate} />
      </div>
      <NavLink to="/countries-list">
        <button type="button">Show Stats</button>
      </NavLink>
    </div>
  );
};

export default Date;
