import React from 'react'

import PersonsDropdown from '../PersonsDropdown'

const DATA = {
  persons: [
    { name: 'Luke Skywalker' },
    { name: 'R2D2' },
    { name: 'C-3PO' },
    { name: 'Darth Vader' },
    { name: 'Yoda' },
  ],
}

const MockPersonsDropdown = props => <PersonsDropdown {...props} {...DATA} />

export default MockPersonsDropdown
