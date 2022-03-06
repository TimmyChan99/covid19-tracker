import React from 'react'
import getStatsFromAPI from '../../api/covidTrackingAPI';
import './date.css'

const Date = () => {
	const getDate = (e) => {
		const date = e.target.value;
		console.log(date);
		getStatsFromAPI(date);
	}
	return (
		<div className="date_container d-flex-column">
			<h1>Covid-19 Tracker</h1>
			<div className="date_modal d-flex-column">
				<span>Choose a Specific Day</span>
				<input type="date" onChange={getDate}/>
				<button type="button">Show stats</button>
			</div>
		</div>
	)
}

export default Date
