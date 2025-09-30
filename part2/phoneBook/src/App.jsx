import { useState } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import PersonItem from "./components/PersonItem"

const App = () => {
  const [persons, setPerson] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

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

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }

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