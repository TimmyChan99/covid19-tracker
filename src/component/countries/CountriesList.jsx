import React from 'react'
import County from './County';

const CountriesList = () => {
	const ids = [{id: 1},{id: 2}, {id: 3}, {id: 4} ];
	const list = ids.map((item) => (
		<li key={item.id}>
     <County />
		</li>
	))
	return (
	 <ul>
		{list}
	 </ul>
	)
}

export default CountriesList
