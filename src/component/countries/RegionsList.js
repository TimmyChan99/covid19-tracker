import React from 'react';
import { useSelector } from 'react-redux';
import Region from './Region';

const RegionsList = () => {
  const stats = useSelector((state) => state.statsReducer);
  //console.log(stats);
  const selectedCountryName = stats[0].name;
  const selectedCountry = stats[1].filter((item) => item.countryName === selectedCountryName);
  //const { regions } = selectedCountry[0];
  const country = selectedCountry[0];
 
 console.log(country.regions);
 if (country.regions !== "no region found") {
   country.regions.map((region) => {
     
   })
 }
    
  return (

    <ul className="countries_list">
    {
      (country.regions !== "no region found") ?
      country.regions.map((region) => ( 
       <li key={region.regionName}>
        <Region 
        countryName={region.regionName}
        confimedCases={region.regionNewCases}
        />
       </li>
      )) : (<h2>no region found</h2>)
    }   
    </ul>

  );
};

export default RegionsList;
