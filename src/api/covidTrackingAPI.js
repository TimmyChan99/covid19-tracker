import axios from 'axios';

const url = 'https://api.covid19tracking.narrativa.com/api';

export const getAllStatitics = async () => {
  const getData = await axios.get(`${url}/2022-02-10`);
  const response = getData.data;
  const { name, today_new_confirmed: totalNewCases } = response.total;
  const allStatistics = [];
  allStatistics.push({ name, totalNewCases });
  const { '2022-02-10': date } = response.dates;
  const statsList = Object.entries(date.countries);
  statsList.map((item) => {
    const obj = {};
    obj.countryName = item[0];
    obj.countryId = item[1].id;
    obj.countryNewCases = item[1].today_new_confirmed;
    obj.regions = [];
    if (item[1].regions.length > 1) {
      Object.values(item[1].regions).map((item) => {
        const region = {};
        region.regionName = item.name;
        region.regionNewCases = item.today_new_confirmed;
        obj.regions.push(region);
      });
    } else { obj.regions = 'no region found'; }
    allStatistics.push(obj);
  });
  return allStatistics;
};
