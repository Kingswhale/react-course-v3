import React from 'react'
import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeClick = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button className='btn' onClick={() => removeClick(id)}>
              Remove me
            </button>
          </div>
        )
      })}
      <div></div>
      <button className='btn' onClick={() => setPeople([])}>
        Clear me
      </button>
    </>
  )
}

export default UseStateArray
