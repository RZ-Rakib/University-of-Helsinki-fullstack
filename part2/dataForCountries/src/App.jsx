import { useState, useEffect } from 'react'
import countryService from './services/country'
import CountryDetails from './components/CountryDetails'

function App() {
  const [allCountryInfo, setAllCountryInfo] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

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
        <CountryDetails filteredCountries={filteredCountries[0]} />
      ) : filteredCountries.map(c =>
        <li key={c.cioc}>
          {c.name.common}{' '}
          <button onClick={() => setSelectedCountry(c)}>Show</button>
        </li>

      )
      }
      {selectedCountry && (
        <CountryDetails filteredCountries={selectedCountry} />
      )}
    </>
  )
}

export default App
