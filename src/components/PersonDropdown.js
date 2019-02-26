import React from 'react'
import styled from 'styled-components'
import { compose, branch, renderComponent, mapProps } from 'recompose'
import { graphql } from 'react-apollo'

import personsQuery from '../queries/personsQuery'
import Loading from './Loading'

const PersonsDropdown = ({ persons, value, onChange }) => (
  <select name="person" value={value} onChange={onChange}>
    {persons.map(person => (
      <option value={person.name} key={person.name}>
        {person.name}
      </option>
    ))}
  </select>
)

export default compose(
  graphql(personsQuery),
  branch(({ data: { loading } }) => loading, renderComponent(Loading)),
  mapProps(({ data, ...rest }) => ({ persons: data.allPersons, ...rest }))
)(PersonsDropdown)
