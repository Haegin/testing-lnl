import React from 'react'
import { render, cleanup } from 'react-testing-library'

import Home from './Home'

afterAll(cleanup)

describe('Home', () => {
  test('it renders the good movies', () => {
    const { getByText } = render(<Home />)
    getByText('Episode 4 - A New Hope')
    getByText('Episode 5 - The Empire Strikes Back')
    getByText('Episode 6 - Return of the Jedi')
  })
})
