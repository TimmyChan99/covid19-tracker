import React from 'react';
import { useDispatch } from 'react-redux';
import { storeSelectedCountry } from '../../redux/dates/date';
import { BsArrowRightCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const CountryBox = ({ countryName, countryNewCases }) => {
	const dispatch = useDispatch();
	const getCountryName = (e) => {
    dispatch(storeSelectedCountry(e.target.id));
  };
  
	return (
	<div className="country d-flex-column">
    <NavLink to="/regions">
		<BsArrowRightCircle id={countryName} onClick={getCountryName} />
		</NavLink>
    <div className="info d-flex-column">
      <span className="country_name">{countryName}</span>
      <span className="stat_number">
        {countryNewCases}
        {' '}
        cases
      </span>
    </div>
    <img
      src="https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/ad/vector.svg"
      alt="country map"
      className="map_img"
    />
  </div>
	)

};

export default CountryBox;
