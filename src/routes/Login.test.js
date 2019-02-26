import React from 'react'
import { render, fireEvent, cleanup } from '../../testUtils'

import Login from './Login'

afterEach(cleanup)

const defaultProps = {
  onSubmit: jest.fn(),
}

describe('Login', () => {
  it('allows you to type in your name', () => {
    const { getByLabelText } = render(<Login {...defaultProps} />)
    const nameInput = getByLabelText('Name')
    fireEvent.change(nameInput, { target: { value: 'Alice' } })
  })
})
