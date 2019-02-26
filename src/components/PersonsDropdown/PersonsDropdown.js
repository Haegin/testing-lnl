import React from 'react'

const PersonsDropdown = ({ persons, value, onChange }) => (
  <select name="person" value={value} onChange={onChange}>
    {persons.map(person => (
      <option value={person.name} key={person.name}>
        {person.name}
      </option>
    ))}
  </select>
)

export default PersonsDropdown
