import React from 'react';
import { useSelector } from 'react-redux';
import { GiWorld } from 'react-icons/gi';
import Region from './Region';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './regions.css';

const RegionsList = () => {
  const stats = useSelector((state) => state.statsReducer);
  const selectedCountryName = stats[0].name;
  const selectedCountry = (stats.length > 1)
    ? stats[1].filter((item) => item.countryName === selectedCountryName)
    : [];
  const country = selectedCountry[0];
  return (
    <>
      { stats[0].name !== 'default'
        ? (
          <div>

            <div className="headline d-flex-row">
              <GiWorld className="world" />
              <div className="headline_total">
                <h1>{selectedCountryName}</h1>
                <h3>
                  Total  &nbsp;
                  <span>{country.countryNewCases}</span>
                </h3>
              </div>
            </div>
            <ul className="regions_list">
              {
      (country.regions !== 'no region found')
        ? country.regions.map((region) => (
          <li key={region.regionName}>
            <Region
              countryName={region.regionName}
              confimedCases={region.regionNewCases}
            />
          </li>
        )) : (<h2 className="no_region">no region found</h2>)
      }
            </ul>

          </div>
        ) : (<ErrorMessage />)}
    </>
  );
};

export default RegionsList;
