import { useState } from "react"

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
      <div>
        filter shown with <input value={searchName} onChange={handleSearchName} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
        name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
        number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
        <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {filteredPersons.map(person => 
          <li key={person.id ?? person.name}> {person.name} {person.number}</li>
        )}
      </div>
    </div>
  )
}

export default App