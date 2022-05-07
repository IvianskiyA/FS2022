import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhone] = useState('')

  const handleNameChange = ({target}) => {
      setNewName(target.value)
      //console.log(target.value)
  }

  const handlePhoneChange = ({target}) => {
    setNewPhone(target.value)
    //console.log(target.value)
}

  const addNewName = (event) => {
    event.preventDefault();
    if (persons.findIndex((p) => p.name == newName) >= 0) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    
    const newPerson = {
      name: newName,
      phoneNumber: newPhoneNumber,
      recordDate: new Date().toLocaleDateString(),
      id: persons.length + 1
    }

    setPersons(persons.concat(newPerson))
    setNewName('')    
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
          number: <input 
                  value = {newPhoneNumber}
                  onChange = {handlePhoneChange} 
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map(p => <li key={p.id}> {p.name} - {p.phoneNumber} </li>)}
        </ul>
      </div>
    </div>
  )
}

export default App