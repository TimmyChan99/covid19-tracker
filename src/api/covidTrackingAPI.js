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
  console.log(Object.entries(countries));
  for (const key in countries) {
    const obj = {};
    obj[key] = {};
    const {
      name,
      today_confirmed: todayConfirmed,
      today_new_deaths: todayNewDeaths,
      today_new_recovered: todayNewRecovered,
      yesterday_deaths: yesterdayDeaths,
      today_vs_yesterday_open_cases: todayVsYesterdayOpenCases,
      today_vs_yesterday_deaths: todayVsYesterdayDeaths,
      today_vs_yesterday_confirmed: todayVsYesterdayConfirmed,
      today_recovered: todayRecovered,
    } = countries[key];

    countriesStats.push({
      id: name,
      name,
      todayConfirmed,
      todayNewDeaths,
      todayNewRecovered,
      yesterdayDeaths,
      todayVsYesterdayOpenCases,
      todayVsYesterdayDeaths,
      todayVsYesterdayConfirmed,
      todayRecovered,
    });
  }
  countriesStats.push(totalStat);
  return countriesStats;
};

export default getStatsFromAPI;
