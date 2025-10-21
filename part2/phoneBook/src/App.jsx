import { useState, useEffect } from "react"
import axios from "axios"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import PersonItem from "./components/PersonItem"

const App = () => {
  const [persons, setPerson] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  const hook = () => {
    axios
      .get("http://localhost:3001/users")
      .then(response => {
        setPerson(response.data)
      })
      .then(error => {
        console.log("error ==> ", error);
      })
  }
  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()

    const trimmedName = newName.trim().toLowerCase()

    if (persons.some(person => person.name.toLowerCase() === trimmedName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newperson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    setPerson(persons.concat(newperson))
    setNewName('')
    setNewNumber('')
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