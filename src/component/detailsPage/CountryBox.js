import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs';

const CountryBox = ({countryName, countryNewCases}) => {
	return (	
		<div className="country d-flex-column">
					<BsArrowRightCircle />
        <div className="info d-flex-column">
					<span className="country_name">{countryName}</span>
					<span className="stat_number">{countryNewCases} cases</span>
				</div>
				<img 
				src="https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/ad/vector.svg"
			  alt="country map"
				className="map_img"
				/>
    </div>
	
	)
}

export default CountryBox
