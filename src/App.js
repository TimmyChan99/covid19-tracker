import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';
import RegionsList from './component/countries/RegionsList';
import Date from './component/getDataByDate/Date';
import Details from './component/detailsPage/Details';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/covid19-tracker/" element={<Date />} />
        <Route path="/covid19-tracker/countries-list" element={<Details />} />
        <Route path="/covid19-tracker/countries-list/:countryName/regions/" element={<RegionsList />} />
      </Routes>
    </Router>
  );
}

export default App;
