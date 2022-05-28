import { useState } from 'react'
import Filter from './components/filter.js'
import PersonForm from './components/personform.js'
import Persons from './components/persons.js'


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
    if (persons.findIndex((p) => p.name === newName) >= 0) {
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
    setNewPhone('')    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterString = {filterString} setNewFilterString = {setNewFilterString} />
      <h3>Add a new</h3>
      <PersonForm addNewName = {addNewName} newName = {newName} handleNameChange = {handleNameChange} 
                 newPhoneNumber = {newPhoneNumber} handlePhoneChange = {handlePhoneChange} />
      <h3>Numbers</h3>
      <Persons persons = {persons} filterString = {filterString} />
    </div>
  )
  
}

export default App
