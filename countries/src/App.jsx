import { useEffect, useState } from 'react';
import Countries from './components/Countries';
import countryService from './services/countries';

function App() {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    countryService.getAll()
      .then(countries => {
        setCountries(countries);
        setFilteredCountries(countries);
      })
      .catch(() => console.log("Error fetching countries"));
  }, [])

  useEffect(() => {
    const newFilteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()));
    setFilteredCountries(newFilteredCountries);
    if(newFilteredCountries.length === 1){
      const country = newFilteredCountries[0];
      countryService.getWeather(country.latlng[0], country.latlng[1])
        .then(weather => setWeather(weather));
    }
    else{
      setWeather(null);
    }
  }, [filter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const handleShow = (countryName) => {
    setFilter(countryName);
  }

  return (
    <>
      <div>find countries <input value={filter} onChange={handleFilterChange} /></div>
      
      <Countries countries={filteredCountries} handleShow={handleShow} weather={weather}/>
    </>
  )
}

export default App
