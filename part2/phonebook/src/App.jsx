import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 140 - 1234567, }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNewName = (event) => {
    event.preventDefault()
    console.log(persons)
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name.toLowerCase().includes(newName.toLowerCase())) {
        alert(`${newName} is already added to phonebook`)
        setNewName("")
        return
      }
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName("")
    setNewNumber("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <div>debug: {newNumber}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map(elem =>
        <p key={elem.name}>{elem.name} {elem.number}</p>
      )}
    </div>
  )
}

export default App