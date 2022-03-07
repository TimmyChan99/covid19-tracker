import React from 'react'
import { useSelector } from 'react-redux';
import County from './County';

const CountriesList = () => {
	const stats = useSelector((state) => state.statsReducer)
	// const list = stats ? 
	//   stats.map((item) => {
		

	// 	return (
	// 	<li key={item.name}>
  //    <County 
	// 	 countryName = {item.name}
	// 	 confimedCases = {item.today_confirmed}
	// 	 />
	// 	</li>)

	// }) : [];

	const list = stats ? 
	  stats
		.filter((item) => item.id != 'selected' && item.id != 'Total')
	  .map((item) => {
		return (
		<li key={item.id}>
     <County 
		 countryName = {item.name}
		 confimedCases = {item.today_confirmed}
		 />
		</li>)

	}) : [];

	return (
	 <ul className="countries_list">
		{list}
	 </ul>
	)
}

export default CountriesList
