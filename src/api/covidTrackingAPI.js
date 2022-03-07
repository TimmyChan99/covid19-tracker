import axios from 'axios';

const url = 'https://api.covid19tracking.narrativa.com/api/';

const getStatsFromAPI = async (selectedDate) => {
  const getData = await axios.get(`${url}${selectedDate}`);
  const response = getData.data;
  const stringDate = selectedDate.toString();
  const { [stringDate]: date } = response.dates;
  const { countries } = date;
  const totalStat = {
    ...response.total, id: 'Total',
  };

  const countriesStats = [];

  for (const key in countries) {
    const obj = {};
    obj[key] = {};
    const {
      name,
      today_confirmed,
      today_new_deaths,
      today_new_recovered,
      yesterday_deaths,
      today_vs_yesterday_open_cases,
      today_vs_yesterday_deaths,
      today_vs_yesterday_confirmed,
      today_recovered,
    } = countries[key];

    // obj[key] = {
    // 	name,
    // 	today_confirmed,
    // 	today_new_deaths,
    // 	today_new_recovered,
    // 	yesterday_deaths,
    // 	today_vs_yesterday_open_cases,
    // 	today_vs_yesterday_deaths,
    // 	today_vs_yesterday_confirmed,
    // 	today_recovered,
    // };
    // countriesStats.push({[key]: obj[key]})
    countriesStats.push({
      id: name,
      name,
      today_confirmed,
      today_new_deaths,
      today_new_recovered,
      yesterday_deaths,
      today_vs_yesterday_open_cases,
      today_vs_yesterday_deaths,
      today_vs_yesterday_confirmed,
      today_recovered,
    });
  }
  countriesStats.push(totalStat);
  return countriesStats;
};

export default getStatsFromAPI;
