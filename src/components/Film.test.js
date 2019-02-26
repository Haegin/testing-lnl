import React from 'react'
import { render, cleanup } from 'react-testing-library'

import Film from './Film'

afterEach(cleanup)

const empireStrikesBack = {
  title: 'The Empire Strikes Back',
  episodeId: 4,
  releaseDate: '1980-05-17T00:00:00.000Z',
}

describe('Film', () => {
  it('formats the episode title correctly', () => {
    const { getByText } = render(<Film film={empireStrikesBack} />)
    getByText('Episode 4 - The Empire Strikes Back')
  })

  it('formats the date correctly', () => {
    const { getByText } = render(<Film film={empireStrikesBack} />)
    getByText('Released on 16 May 1980')
  })
})
