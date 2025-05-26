import { useState } from 'react'
import FilterPersons from './FilterPersons/FilterPersons'
import Form from './Form/Form'
import ShowFilteredNames from './ShowFilteredNames/ShowFilteredNames'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 140 - 1234567, id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState("")

  const addNewName = (event) => {
    event.preventDefault()
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
    setNewNumber(event.target.value)
  }

  const filterNames = (event) => {
    const filterPersons = persons.filter(elem => elem.name.toLowerCase().includes(event.target.value))
    setFilter(filterPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <FilterPersons filterNames={filterNames} />

      <h2>Add a new</h2>

      <Form addNewName={addNewName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <ShowFilteredNames filter={filter} persons={persons}/>

    </div>
  )
}

export default App