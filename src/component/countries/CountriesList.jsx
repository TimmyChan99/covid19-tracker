import React from 'react'
import { useSelector } from 'react-redux';
import County from './County';

const CountriesList = () => {
	const stats = useSelector((state) => state.statsReducer)
	
	const list = stats ? 
	  stats.map((item) => {
		for (const keyprop in item ) {

		return (
		<li key={keyprop}>
     <County 
		 countryName = {keyprop}
		 confimedCases = {item[keyprop].today_confirmed}
		 />
		</li>)
		
		}
	}) : [];

	return (
	 <ul className="countries_list">
		{list}
	 </ul>
	)
}

export default CountriesList
