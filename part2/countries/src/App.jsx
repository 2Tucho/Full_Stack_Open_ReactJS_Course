import { useState, useEffect } from 'react'
import countries from "./services/countries"
import weather from './services/weather'

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [newCountry, setNewCountry] = useState([])
  const [weatherInfo, setWeatherInfo] = useState(null)

  useEffect(() => {
    countries
      .getAllCountries()
      .then(allCountries => {
        setAllCountries(allCountries)
        setNewCountry(allCountries)
      })
  }, [])

  const searchCountry = (event) => {
    const filterCountry = allCountries.filter(elem => elem.name.common.toLowerCase().includes(event.target.value))
    //console.log("filterCountry", filterCountry);
    setNewCountry(filterCountry)

    if(newCountry.length == 1) {
      //Petición a la api del tiempo y guardar en el estado
      weather
      .getCapitalWeather(newCountry[0].capital)
      .then(weather => {
        console.log("fetch", weather)
        setWeatherInfo(weather)
      })
    }
  }

  const showCountry = (name) => {
    //console.log(allCountries.filter(elem => elem.name.common === name))
    const showDetails = allCountries.filter(elem => elem.name.common === name)
    setNewCountry(showDetails)

    //Petición a la api del tiempo y guardar en el estado
    console.log(newCountry[0].capital)
    weather
      .getCapitalWeather(newCountry[0].capital)
      .then(weather => {
        console.log("fetch", weather)
        setWeatherInfo(weather)
      })
    console.log("weatherInfo", weatherInfo)
  }

  return (
    <>
      <div>
        Find countries <input onChange={searchCountry} />
      </div>

      {newCountry.length > 10 && newCountry.length < 249 ? 
        <p>Too many matches, specify ahother filter</p>
      : newCountry.length > 1 && newCountry.length <= 10 ?
        newCountry.map((elem, i) => <div key={i}>
          <p>{elem.name.common}</p>
          <button onClick={() => showCountry(elem.name.common)}>Show</button>
        </div>)
      : newCountry.length == 1 ?
        <div>
          <h1>{newCountry[0].name.common}</h1>

          <p>Capital: {newCountry[0].capital}</p>

          <p>Area: {newCountry[0].area}</p>

          <ul>
            <h2>Lenguages</h2>
            {Object.values(newCountry[0].languages).map((elem, i) => 
              <li key={i}>{elem}</li>
            )}
          </ul>

          <img src={newCountry[0].flags.png} alt={`${newCountry[0].name.common}'s flag`} />

          {weatherInfo !== null ? 
            <div>
              <h2>Weather in {newCountry[0].capital}</h2>

              <p>Temperature: {weatherInfo.main.temp} ºC</p>

              <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt={weatherInfo.weather[0].main} />

              <p>Wind: {weatherInfo.wind.speed} m/s</p>
            </div> 
          : null}
        </div>
      : null}
    </>
  )
}

export default App
