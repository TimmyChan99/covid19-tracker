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
        <Route path="/" element={<Date />} />
        <Route path="/regions" element={<RegionsList />} />
        <Route path="/countries-list" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
