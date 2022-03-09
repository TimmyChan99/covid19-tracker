import React from 'react';
import PropTypes from 'prop-types';
import './regions.css';
import { BsArrowRightCircle } from 'react-icons/bs';

const Region = ({ countryName, confimedCases }) => (
  <div className="the_country">
    <h3>{countryName}</h3>
    <div className="more_details">
      <span>
        {confimedCases}
        {' '}
&nbsp; new cases
      </span>

      <button
        type="button"
        value={countryName}
      >
        <BsArrowRightCircle />
      </button>

    </div>
  </div>
);
Region.propTypes = {
  countryName: PropTypes.string.isRequired,
  confimedCases: PropTypes.number.isRequired,
};
export default Region;
