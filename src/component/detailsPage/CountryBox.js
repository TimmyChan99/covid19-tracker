import React from 'react';
import { useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { storeSelectedCountry } from '../../redux/dates/date';
import countriesMaps from '../../api/maps';

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
      { countriesMaps.map((item) => {
        if (item.country.toLocaleLowerCase() === countryName.toLocaleLowerCase()) {
          return(<img
            key={item.iso}
            src={`https://raw.githubusercontent.com/djaiss/mapsicon/master/all/${item.iso.toLocaleLowerCase()}/128.png`}
            alt="country map"
            className="map_img"
          />)
        }
        })}
    </div>
  );
};

CountryBox.propTypes = {
  countryName: PropTypes.string.isRequired,
  countryNewCases: PropTypes.number.isRequired,
};

export default CountryBox;
