import React from 'react'

const PersonsDropdown = ({ persons, ...rest }) => (
  <select name="person" {...rest}>
    {persons.map(person => (
      <option value={person.name} key={person.name}>
        {person.name}
      </option>
    ))}
  </select>
)

export default PersonsDropdown
