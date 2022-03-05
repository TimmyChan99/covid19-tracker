import React from 'react'
import { NavLink } from 'react-router-dom';
import './countries.css'

const County = () => {
	return (
		<div className="the_country">
			<h3>France</h3>
			<span>25 cases</span>
			<NavLink to="/detail">
			<button type="button">Details</button>
		</NavLink> 
		</div>
	)
}

export default County
