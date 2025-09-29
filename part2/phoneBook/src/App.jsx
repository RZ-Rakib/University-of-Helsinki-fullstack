import { useState } from "react"

const App = () => {
  const [persons, setPerson] = useState([
    {
      name: 'Rakib zaman'
    }
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newperson = {
      name: newName,
      id: persons.length + 1
    }
    setPerson(persons.concat(newperson))
    setNewName('')
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
        name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
        <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
          <li key={person.name}> {person.name}</li>
        )}
      </div>
    </div>
  )
}

export default App