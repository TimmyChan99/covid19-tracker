import React from 'react'
import { NavLink } from 'react-router-dom';
import './countries.css'
import { BsArrowRightCircle } from 'react-icons/bs';

const County = ({countryName, confimedCases}) => {
	return (
		<div className="the_country">
			<h3>{countryName}</h3>
		<div className="more_details">
				<span>{confimedCases} cases</span>
				<NavLink to="/detail">
				<button type="button">
				  <BsArrowRightCircle/>
				</button>
			</NavLink> 
		</div>
		</div>
	)
}

export default County
