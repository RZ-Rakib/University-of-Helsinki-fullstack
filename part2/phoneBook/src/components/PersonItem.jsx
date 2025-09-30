const PersonItem = ({ filteredPersons }) => {
  return (
    <div>
      {filteredPersons.map(person =>
        <li key={person.id ?? person.name}> {person.name} {person.number}</li>
      )}
    </div>
  )
}

export default PersonItem