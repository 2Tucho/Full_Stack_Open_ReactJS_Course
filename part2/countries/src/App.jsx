import { useState, useEffect } from 'react'
import countries from "./services/countries"

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [newCountry, setNewCountry] = useState([])

  useEffect(() => {
    countries
      .getAll()
      .then(allCountries => {
        setAllCountries(allCountries)
        setNewCountry(allCountries)
      })
  }, [])

  const searchCountry = (event) => {
    const filterCountry = allCountries.filter(elem => elem.name.common.toLowerCase().includes(event.target.value))
    console.log("filterCountry", filterCountry);
    setNewCountry(filterCountry)
  }

  const showCountry = (name) => {
    console.log(name)
    console.log(allCountries.filter(elem => elem.name.common === name))
    const showDetails = allCountries.filter(elem => elem.name.common === name)
    setNewCountry(showDetails)
  }

  return (
    <>
      <div>
        Find countries <input onChange={searchCountry} />
      </div>
      {newCountry.length > 10 && newCountry.length < 249 ? 
        <p>Too many matches, specify ahother filter</p>
      : newCountry.length > 1 && newCountry.length <= 10 ?
        newCountry.map((elem, i) => <>
          <p key={i}>{elem.name.common}</p>
          <button onClick={() => showCountry(elem.name.common)}>Show</button>
        </>)
      : newCountry.length == 1 ?
        <div>
          <h1>{newCountry[0].name.common}</h1>
          <p>Capital: {newCountry[0].capital}</p>
          <p>Area: {newCountry[0].area}</p>
          <ul><h2>Lenguages</h2>
            {Object.values(newCountry[0].languages).map((elem, i) => 
              <li key={i}>{elem}</li>
            )}
          </ul>
          <img src={newCountry[0].flags.png} alt={`${newCountry[0].name.common}'s flag`} />
        </div>
      : null}
    </>
  )
}

export default App
