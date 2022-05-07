import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = ({target}) => {
      setNewName(target.value)
      console.log(target.value)
  }

  const addNewName = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      recordDate: new Date().toLocaleDateString(),
      id: persons.length + 1
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    console.log(persons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input 
                  value = {newName}
                  onChange = {handleNameChange} 
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map(p => <li key={p.id}> {p.name} </li>)}
        </ul>
      </div>
    </div>
  )
}

export default App