import axios from 'axios';

const url = 'https://api.covid19tracking.narrativa.com/api/';

const getStatsFromAPI = async (selectedDate) => {
  const getData = await axios.get(`${url}${selectedDate}`);
  const response = getData.data;
  const stringDate = selectedDate.toString();
  const { [stringDate]: date } = response.dates;
  const { countries } = date;
  const {
    today_confirmed: totalTodayConfirmed,
    today_new_deaths: totaltodayNewDeaths,
    today_new_recovered: totalTodayNewRecovered,
    yesterday_deaths: totalYesterdayDeaths,
  } = response.total;
  const totalStat = {
    id: 'Total',
    totalTodayConfirmed,
    totaltodayNewDeaths,
    totalTodayNewRecovered,
    totalYesterdayDeaths,
  };

  const countriesStats = [];
  const arrayTest = Object.entries(countries);
  arrayTest.forEach((item) => {
    countriesStats.push({
      id: item[0],
      name: item[0],
      todayConfirmed: item[1].today_confirmed,
      todayNewDeaths: item[1].today_new_deaths,
      todayNewRecovered: item[1].today_new_recovered,
      yesterdayDeaths: item[1].yesterday_deaths,
      todayVsYesterdayOpenCases: item[1].today_vs_yesterday_open_cases,
      todayVsYesterdayDeaths: item[1].today_vs_yesterday_deaths,
      todayVsYesterdayConfirmed: item[1].today_vs_yesterday_confirmed,
      todayRecovered: item[1].today_recovered,
    });
  });

  // for (const key in countries) {
  //   const obj = {};
  //   obj[key] = {};
  //   const {
  //     name,
  //     today_confirmed: todayConfirmed,
  //     today_new_deaths: todayNewDeaths,
  //     today_new_recovered: todayNewRecovered,
  //     yesterday_deaths: yesterdayDeaths,
  //     today_vs_yesterday_open_cases: todayVsYesterdayOpenCases,
  //     today_vs_yesterday_deaths: todayVsYesterdayDeaths,
  //     today_vs_yesterday_confirmed: todayVsYesterdayConfirmed,
  //     today_recovered: todayRecovered,
  //   } = countries[key];

  //   countriesStats.push({
  //     id: name,
  //     name,
  //     todayConfirmed,
  //     todayNewDeaths,
  //     todayNewRecovered,
  //     yesterdayDeaths,
  //     todayVsYesterdayOpenCases,
  //     todayVsYesterdayDeaths,
  //     todayVsYesterdayConfirmed,
  //     todayRecovered,
  //   });
  // }
  countriesStats.push(totalStat);
  return countriesStats;
};

export default getStatsFromAPI;
