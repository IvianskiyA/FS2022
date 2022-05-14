import React from 'react'

const PersonForm = (f) => {
    // console.log(f)

return (
        <form onSubmit={f.addNewName}>
            <div>
            name: <input 
                    value = {f.newName}
                    onChange = {f.handleNameChange} 
                    />
            </div>
            <div>
            number: <input 
                    value = {f.newPhoneNumber}
                    onChange = {f.handlePhoneChange} 
                    />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
      </form>
 )
}


export default PersonForm