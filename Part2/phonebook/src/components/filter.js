import React from 'react'

const Filter = (filterState) => {    
   // console.log(filterState)
  return (
    <div>
          filter shown with: <input 
                  value = {filterState.filterString}
                  onChange = {({target}) => {filterState.setNewFilterString(target.value)}}
                />
    </div>
  )
}

export default Filter
