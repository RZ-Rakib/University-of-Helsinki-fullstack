import { useState, useEffect } from 'react'
import countryService from './services/country'

function App() {
  const [allCountryInfo, setAllCountryInfo] = useState([])
  const [searchCountry, setSearchCountry] = useState('')

  useEffect(() => {
    countryService
      .getAllCountries()
      .then(countries => {
        console.log("response ==> ", countries);
        setAllCountryInfo(countries)
      })
      .catch(error =>
        alert(`Failed to fetch data from server`, error)
      )
  }, [])

  const handleChange = (event) => {
    setSearchCountry(event.target.value)
  }

  const filteredCountries = allCountryInfo.filter(c => c.name.common.toLowerCase().includes(searchCountry))


  return (
    <>
      <div>
        Find countries: <input value={searchCountry} onChange={handleChange} />
      </div>
      {filteredCountries.length > 10 ? (
        <li>Too many matches specify another filter</li>
      ) : filteredCountries.length === 1 ? (
        <div>
          <h2>{filteredCountries[0].name.common}</h2>
          <li>Capital: {filteredCountries[0].capital}</li>
          <li>Area: {filteredCountries[0].area}</li>
          <h2>Language</h2>
          <ul>
            {filteredCountries && Object.values(filteredCountries[0].languages).map(lang =>
              <li key={lang}>{lang}</li>
            )}
          </ul>
          <div>
            <img
              src={filteredCountries[0].flags.png}
              alt={`${filteredCountries[0].flags.alt}`} />
          </div>
        </div>
      ) : filteredCountries.map(c =>
        <li key={c.cioc}>{c.name.common}</li>
      )
      }
    </>
  )
}

export default App
