import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addNewName = (event) => {
    event.preventDefault()
    console.log(persons)
    for (let i = 0; i < persons.length; i++) {
      if(persons[i].name.toLowerCase().includes(newName.toLowerCase())) {
        alert(`${newName} is already added to phonebook`)
        setNewName("")
        return
      }
    }

    const personObject = {
      name: newName
    }

    setPersons(persons.concat(personObject))
    setNewName("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App