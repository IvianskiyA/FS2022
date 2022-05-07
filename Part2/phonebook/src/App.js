import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhone] = useState('')
  const [filterString, setNewFilterString] = useState('')


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
      number: newPhoneNumber,
      recordDate: new Date().toLocaleDateString(),
      id: persons.length + 1
    }

    setPersons(persons.concat(newPerson))
    setNewName('')    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with: <input 
                  value = {filterString}
                  onChange = {({target}) => {setNewFilterString(target.value)}}
                />
        </div>
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
          {persons.map(p => filterString.length == 0 || p.name.toUpperCase().includes(filterString.toUpperCase())
                                ? <li key={p.id}> {p.name} - {p.number} </li>
                                : ''
                               )}
        </ul>
      </div>
    </div>
  )
}

export default App