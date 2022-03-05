import React from 'react'
import { NavLink } from 'react-router-dom'

const header = () => {
	return (
		<header>
			<NavLink to="covid19-tracker/countries-list">
			<button type="button">Go back</button>
			</NavLink>
			<NavLink to="covid19-tracker/">
			<button type="button">Change date</button>
			</NavLink>
			<div>Country views</div>
		</header>
	)
}

export default header
