import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import PersonItem from "./components/PersonItem"
import userServices from "./services/users.js"
import Notification from "./components/Notification.jsx"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)

  const hook = () => {
    userServices
      .getAll()
      .then(allObjects => {
        setPersons(allObjects)
      })
      .catch(error => {
        console.error("Something went wrong to fetch the data from the server", error);
      })
  }
  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()

    const normalize = str => str.trim().toLowerCase()
    const existingPerson = persons.find(person => normalize(person.name) === normalize(newName))

    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new number`)) {
        const newPersonObject = { ...existingPerson, number: newNumber }

        userServices
          .update(existingPerson.id, newPersonObject)
          .then(returnedObject => {
            setPersons(prev =>
              prev.map(person => person.id === existingPerson.id ? returnedObject : person)
            )
            setNewName('')
            setNewNumber('')
            setNotificationMessage(`Updated ${returnedObject.name}`)
            setTimeout(() => {
              setNotificationMessage(null)
            }, 3000);
          })
          .catch(error => {
            console.error(`Failed to update ${newName}`, error)
          })
      }
      return
    }
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    userServices
      .create(newPerson)
      .then(newObject => {
        setPersons(prev => prev.concat(newObject))
        setNewName('')
        setNewNumber('')
        setNotificationMessage(`Added ${newObject.name}`)
        setTimeout(() => {
          setNotificationMessage(null)
        }, 3000);
      })
      .catch(error => {
        console.error("Failed to create the new person object", error);
      })
  }

  const handleNewName = (event) => setNewName(event.target.value)

  const handleNewNumber = (event) => setNewNumber(event.target.value)

  const handleSearchName = (event) => setSearchName(event.target.value)


  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name} ?`))
      userServices
        .remove(person.id)
        .then(removedObject => {
          setPersons(prev => prev.filter(p => p.id !== person.id))
          console.log("Deleted", removedObject);
        })
        .catch(error => {
          console.error(`${person.name} is already deleted from the server. ${error}`)
        })
  }

  const filteredPersons = persons.filter(p => p.name.toLowerCase().includes(searchName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
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
      {filteredPersons.map(person => {
        return (
          <PersonItem
            key={person.id}
            name={person.name}
            number={person.number}
            handleDelete={() => handleDelete(person)} />
        )
      })}
    </div>
  )
}

export default App