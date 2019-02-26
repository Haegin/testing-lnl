import React from 'react'
import { render, cleanup } from '../../../testUtils'

import Home from './Home'

afterAll(cleanup)

const defaultProps = {
  films: [
    {
      releaseDate: '1977-05-25T00:00:00.000Z',
      title: 'A New Hope',
      episodeId: 4,
    },
    {
      releaseDate: '1980-05-17T00:00:00.000Z',
      title: 'The Empire Strikes Back',
      episodeId: 5,
    },
    {
      releaseDate: '1983-05-25T00:00:00.000Z',
      title: 'Return of the Jedi',
      episodeId: 6,
    },
  ],
}

describe('Home', () => {
  test('it renders the good movies', () => {
    const { getByText } = render(<Home {...defaultProps} />)
    getByText('Episode 4 - A New Hope')
    getByText('Episode 5 - The Empire Strikes Back')
    getByText('Episode 6 - Return of the Jedi')
  })
})
