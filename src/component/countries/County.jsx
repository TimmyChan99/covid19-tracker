import React from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './countries.css'
import { BsArrowRightCircle } from 'react-icons/bs';
import { filterCountriesAction, storeSelectedCountry } from '../../redux/dates/date'

const County = ({countryName, confimedCases }) => {
	const dispatch = useDispatch();
	const getCountryName = (e) => {
		dispatch(storeSelectedCountry(e.target.parentNode.value))
	}
	return (
		<div className="the_country">
			<h3>{countryName}</h3>
		<div className="more_details">
				<span>{confimedCases} &nbsp; new cases</span>
				<NavLink to="/detail">
				<button 
				type="button" 
				value={countryName} 
				onClick={getCountryName}
				>
				  <BsArrowRightCircle />
				</button>
			</NavLink> 
		</div>
		</div>
	)
}

export default County
