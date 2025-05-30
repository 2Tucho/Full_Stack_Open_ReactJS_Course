import { useEffect, useState } from "react"
import FilterPersons from "./components/FilterPersons/FilterPersons"
import Form from "./components/Form/Form"
import Notification from "./components/Notification/Notification"
import ShowFilteredNames from "./components/ShowFilteredNames/ShowFilteredNames"
import personsService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState([])
  const [successMessage, setSuccessMessage] = useState(null)

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
        const findName = persons.find(p => p.id === persons[i].id)
        const changeNumber = { ...findName, number: newNumber }
        console.log("changeNumber", changeNumber)

        if (window.confirm(`${persons[i].name} is already added to the phonebook, replace the old number with a new one?`)) {
          personsService
            .update(persons[i].id, changeNumber)
            .then(() => {
              setPersons(persons.map(person => person.id !== persons[i].id ? person : changeNumber))
              setSuccessMessage(
                `${newName}'s number was updated`
              )
              setTimeout(() => {
                setSuccessMessage(null)
              }, 3000)
            })
          setNewName("")
          setNewNumber("")
        }
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
        setPersons(persons.concat(returnedperson))
        setSuccessMessage(
          `Added ${newName}`
        )
        setTimeout(() => {
          setSuccessMessage(null)
        }, 3000)
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

  const deletePerson = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name} permamently?`)) {
      personsService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    } else return
  }

  return (
    <div>

      <h2>Phonebook</h2>

      <Notification message={successMessage} />

      <FilterPersons filterNames={filterNames} />

      <h2>Add a new</h2>

      <Form addNewName={addNewName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <ShowFilteredNames filter={filter} persons={persons} deletePerson={deletePerson} />

    </div>
  )
}

export default App