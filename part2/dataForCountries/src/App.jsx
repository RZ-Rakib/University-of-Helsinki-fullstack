import { useState, useEffect } from 'react'
import countryService from './services/country'
import CountryDetails from './components/CountryDetails'
import WeatherService from './services/weather'

function App() {
  const [allCountryInfo, setAllCountryInfo] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [capitalCity, setCapitalCity] = useState(null)
  const [cityWeatherInfo, setCityWeatherInfo] = useState(null)

  useEffect(() => {
    countryService
      .getAllCountries()
      .then(countries => {
        console.log("response ==> ", countries);
        setAllCountryInfo(countries)
      })
      .catch(error =>
        console.error(`Failed to fetch data from server`, error)
      )
  }, [])

  useEffect(() => {
    if (capitalCity) {
      WeatherService
        .getCityWeatherInfo(capitalCity)
        .then(returnedWeatherInfo => {
          console.log("returnedWeatherInfo ==> ", returnedWeatherInfo);
          setCityWeatherInfo(returnedWeatherInfo)
        })
        .catch(error =>
          console.error(`Failed to fetch data from server`, error)
        )
    }
  }, [capitalCity])

  const handleChange = (event) => {
    setSearchCountry(event.target.value)
  }

  const filteredCountries = allCountryInfo.filter(c => c.name.common.toLowerCase().includes(searchCountry))

  useEffect(() => {
    if (filteredCountries.length === 1) {
      setCapitalCity(filteredCountries[0].capital[0])
    }
  }, [filteredCountries])

  useEffect(() => {
    if (selectedCountry) {
      setCapitalCity(selectedCountry.capital)
    }
  }, [selectedCountry])

  return (
    <>
      <div>
        Find countries: <input value={searchCountry} onChange={handleChange} />
      </div>
      {
        filteredCountries.length > 10 ? (
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
