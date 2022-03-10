import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { CgCalendarDates } from 'react-icons/cg';

const header = () => (
  <header className="d-flex-row">
    <button type="button">
      <NavLink to="/covid19-tracker/countries-list" className="d-flex-row link">
        <IoIosArrowBack />
        Go back
      </NavLink>
    </button>
    <span>Covid-19 Tracker</span>
    <button type="button">
      <NavLink to="/covid19-tracker/" className="d-flex-row link">
        Change date
        <CgCalendarDates />
      </NavLink>
    </button>
  </header>
);

export default header;
