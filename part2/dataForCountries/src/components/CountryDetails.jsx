
const CountryDetails = ({ filteredCountries }) => {
  return (
    <div>
      <h2>{filteredCountries.name.common}</h2>
      <li>Capital: {filteredCountries.capital}</li>
      <li>Area: {filteredCountries.area}</li>
      <h2>Language</h2>
      <ul>
        {filteredCountries && Object.values(filteredCountries.languages).map(lang =>
          <li key={lang}>{lang}</li>
        )}
      </ul>
      <div>
        <img
          src={filteredCountries.flags.png}
          alt={`${filteredCountries.flags.alt}`} />
      </div>
    </div>
  )
}

export default CountryDetails