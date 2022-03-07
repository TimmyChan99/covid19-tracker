import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';
import CountriesList from './component/countries/CountriesList';
import Date from './component/getDataByDate/Date';
import Details from './component/detailsPage/Details';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Date />} />
        <Route path="/countries-list" element={<CountriesList />} />
        <Route path="/detail" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
