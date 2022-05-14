import React from 'react'

const Persons = (f) => {
    return (
        <div>
            <ul>
            {f.persons.map(p => f.filterString.length == 0 || p.name.toUpperCase().includes(f.filterString.toUpperCase())
                                    ? <li key={p.id}> {p.name} - {p.number} </li>
                                    : ''
                                )}
            </ul>
        </div>
    )
          }

export default Persons