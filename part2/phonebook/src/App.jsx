import { useEffect, useState } from "react"
import FilterPersons from "./components/FilterPersons/FilterPersons"
import Form from "./components/Form/Form"
import ShowFilteredNames from "./components/ShowFilteredNames/ShowFilteredNames"
import personsService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")  

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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

    personsService
      .create(personObject)
      .then(returnedperson => {
        setPersons(persons.concat(returnedperson)) // El método concat no cambia el estado original del componente, sino que crea una nueva copia de la lista.
        setNewName("")
        setNewNumber("")
      })

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

  const deletePerson = (id) => {
    console.log(`The id ${id} has been removed`)
    personsService
      .deletePerson(id)
      .then(deletedPerson => {
        console.log(deletedPerson)
        setPersons(persons.filter(person => person.id !== id))
        console.log(persons)
      })
  }

  return (
    <div>

      <h2>Phonebook</h2>

      <FilterPersons filterNames={filterNames} />

      <h2>Add a new</h2>

      <Form addNewName={addNewName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <ShowFilteredNames filter={filter} persons={persons} deletePerson={deletePerson} />

    </div>
  )
}

export default App