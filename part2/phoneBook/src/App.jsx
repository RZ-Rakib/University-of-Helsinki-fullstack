import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import PersonItem from "./components/PersonItem"
import userServices from "./services/users.js"

const App = () => {
  const [persons, setPerson] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  const hook = () => {
    userServices
      .getAll()
      .then(allObjects => {
        setPerson(allObjects)
      })
      .then(error => {
        console.log("error ==> ", error);
      })
  }
  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()

    const trimmedName = newName.trim().toLowerCase()
    const trimmedNumber = newNumber.trim().toLowerCase()

    if (persons.some(person => person.name.toLowerCase() === trimmedName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    if (persons.some(person => person.number === trimmedNumber)) {
      alert(`${newNumber} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    }
    userServices
      .create(newPerson)
      .then(newObject => {
        setPerson(prev => prev.concat(newObject))
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        console.log("error ==> ", error);
      })
  }

  const handleNewName = (event) => setNewName(event.target.value)

  const handleNewNumber = (event) => setNewNumber(event.target.value)

  const handleSearchName = (event) => setSearchName(event.target.value)

  const filteredPersons = persons.filter(p => p.name.toLowerCase().includes(searchName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearchName={handleSearchName} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <PersonItem filteredPersons={filteredPersons} />
    </div>
  )
}

export default App