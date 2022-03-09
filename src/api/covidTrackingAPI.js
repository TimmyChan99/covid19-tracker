import axios from 'axios';

const url = 'https://api.covid19tracking.narrativa.com/api';

const getAllStatitics = async (selectedDate) => {
  const getData = await axios.get(`${url}/${selectedDate}`);
  const response = getData.data;
  const { name, today_new_confirmed: totalNewCases } = response.total;
  const allStatistics = [];
  allStatistics.push({ name, totalNewCases });
  const { [selectedDate.toString()]: date } = response.dates;
  const statsList = Object.entries(date.countries);
  statsList.map((item) => {
    const [name, values] = [item[0], item[1]];
    const obj = {};
    obj.countryName = name;
    obj.countryId = values.id;
    obj.countryNewCases = values.today_new_confirmed;
    obj.regions = [];
    if (values.regions.length > 1) {
      Object.values(values.regions).map((item) => {
        const region = {};
        region.regionName = item.name;
        region.regionNewCases = item.today_new_confirmed;
        return obj.regions.push(region);
      });
    } else { obj.regions = 'no region found'; }
    return allStatistics.push(obj);
  });
  return allStatistics;
};

export default getAllStatitics;
