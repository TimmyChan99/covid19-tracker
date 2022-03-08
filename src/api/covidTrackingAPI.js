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
  } = response.total;
  const totalStat = {
    id: 'Total',
    totalTodayConfirmed,
  };

  const countriesStats = [];
  const arrayTest = Object.entries(countries);
  arrayTest.forEach((item) => {
    countriesStats.push({
      id: item[0],
      name: item[0],
      todayConfirmed: item[1].today_confirmed,
    });
  });

  countriesStats.push(totalStat);


  
  return countriesStats;
};

export const getRegions = async () => {
  const getRegions = await axios.get(`${url}/2022-02-03/country/france`);
  const regionsRes = getRegions.data;
  const stringDate = selectedDate.toString();
  const { [stringDate]: dateRegion } = regionsRes.dates;
  const { countries } = dateRegion;
  const { "France" : country } = countries;
  const regionTest = Object.entries(country);
  const obj = {};
  regionTest.forEach((item) => {
    switch (true) {
      case item[0] === "id":
        obj.id = item[1];
        break;
      case item[0] === "name":
          obj.name = item[1];
        break;
      case item[0] === "today_confirmed":
          obj.newCases = item[1];
        break;
      case item[0] === "regions":
        const regionsArray = [];
        Object.entries(item[1]).map((region) => {
          const { id: regionId, name: regionName, today_confirmed: regionNewCases} = region[1];
          regionsArray.push({ regionId, regionName, regionNewCases});
        } 
        )
          obj.regions = regionsArray;
        break;
    }
  })
  console.log(obj);
}


export default getStatsFromAPI;
