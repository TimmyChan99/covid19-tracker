import React from 'react'
import { NavLink } from 'react-router-dom';
import './countries.css'
import { BsArrowRightCircle } from 'react-icons/bs';

const County = () => {
	return (
		<div className="the_country">
			<h3>France</h3>
		<div className="more_details">
				<span>25 cases</span>
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
