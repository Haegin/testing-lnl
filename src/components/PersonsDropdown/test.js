import React from 'react'
import { render } from '../../../testUtils'

import PersonsDropdown from './'

jest.mock('./')

describe('PersonsDropdown', () => {
  test('it matches the snapshot', () => {
    const { container } = render(<PersonsDropdown />)
    expect(container).toMatchSnapshot()
  })
})
