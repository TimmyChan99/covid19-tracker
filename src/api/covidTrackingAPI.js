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

export const getRegions = async (selectedDate) => {
  const countriesLit = await getStatsFromAPI(selectedDate); //
  const allStatistics = [];
  //const array = Object.entries(countriesLit);
  for(let i = 0; i < countriesLit.length; i++) {
    const obj = {};
    const { name: countryName, id: countryId, todayConfirmed: countryNewCases } = countriesLit[i];
    const regionsList = await axios.get(`${url}${selectedDate}/country/${countryName.toLowerCase()}`);
    const regionsRes = regionsList.data;
    const stringDate = selectedDate.toString();
    const { [stringDate]: dateRegion } = regionsRes.dates;
    const { countries } = dateRegion;
    const { [ countryName ] : country } = countries;
    const regionTest = Object.entries(country);
    const regionsArray = [];
    obj.countryId = countryId;
    obj.countryName = countryName;
    obj.countryNewCases = countryNewCases;
    
    regionTest.forEach((item) => {
      //console.log(countryName, item);
    if (item[0] === "regions" && item[1].length > 1) {
      
        Object.entries(item[1]).map((region) => {
          const { id: regionId, name: regionName, today_confirmed: regionNewCases} = region[1];
          regionsArray.push({ regionId, regionName, regionNewCases});
        } 
        )
        obj.regions = regionsArray;
        
      } else if (item[0] === "regions" && item[1].length === 0) { obj.regions =  "no region found"  }
    })
  
    allStatistics.push(obj);
    
  }
  return allStatistics;
}

export const getAllStatitics = async (selectedDate) => {
  const getData = await axios.get(`${url}${selectedDate}`);
  const response = getData.data;
  const {name, today_new_confirmed: totalNewCases} = response.total;
  const allStatistics = [];
  allStatistics.push({name, totalNewCases})
  const { [selectedDate ] : date } = response.dates;
  const statsList = Object.entries(date.countries)
  statsList.map((item) => {
    const obj = {};
    obj.countryName = item[0];
    obj.countryId = item[1].id;
    obj.countryNewCases = item[1].today_new_confirmed;
    obj.regions = [];
    if (item[1].regions.length > 1){
     Object.values(item[1].regions).map((item) => {
       const region = {}
       region.regionName = item.name;
       region.regionNewCases = item.today_new_confirmed;
       obj.regions.push(region);
     })
    
    } else { obj.regions = "no region found"; }
    allStatistics.push(obj)
  }) 
  return allStatistics;
}


export default getStatsFromAPI;
