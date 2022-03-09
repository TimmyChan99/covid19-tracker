import React from 'react';
import './details.css';
import { useSelector } from 'react-redux';
import ErrorMessage from '../errorMessage/ErrorMessage';
import StatsDetails from './StatsDetails';

const Details = () => {
  const countries = useSelector((state) => state.statsReducer);

  return (
    <div>

      { (countries.length > 1) ? (<StatsDetails />) : (<ErrorMessage />) }

    </div>
  );
};

export default Details;
