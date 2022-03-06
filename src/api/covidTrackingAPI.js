import axios from "axios";

const url = 'https://api.covid19tracking.narrativa.com/api/';

const getStatsFromAPI = async (selectedDate) => {
	const getData = await axios.get(`${url}${selectedDate}`);
	const response =  getData.data;
 const stringDate = selectedDate.toString();
	const { [ stringDate ] : date } = response.dates;
  const { countries } = date;
	const obj = {
    total : response.total,
  };
	for (const key in countries) {
    obj[key] = {};
    const { 
			today_confirmed,
			today_new_deaths,
			today_new_recovered,
			yesterday_deaths,
			today_vs_yesterday_open_cases,
			today_vs_yesterday_deaths,
			today_vs_yesterday_confirmed,
			today_recovered,
		} = countries[key];

    obj[key] = { 
			today_confirmed,
			today_new_deaths,
			today_new_recovered,
			yesterday_deaths,
			today_vs_yesterday_open_cases,
			today_vs_yesterday_deaths,
			today_vs_yesterday_confirmed,
			today_recovered,
		};
  }
  return obj;
}

export default getStatsFromAPI;
