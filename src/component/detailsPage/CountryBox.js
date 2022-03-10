import React from 'react';
import { useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { storeSelectedCountry } from '../../redux/dates/date';

const CountryBox = ({ countryName, countryNewCases }) => {
  const dispatch = useDispatch();
  const getCountryName = (e) => {
    const { id } = e.currentTarget;
    dispatch(storeSelectedCountry(id));
  };

  return (
    <div className="country d-flex-column">
      <NavLink to={`/covid19-tracker/countries-list/${countryName}/regions/`} className="arrow">
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
  );
};

CountryBox.propTypes = {
  countryName: PropTypes.string.isRequired,
  countryNewCases: PropTypes.number.isRequired,
};

export default CountryBox;
