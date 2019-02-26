import React from 'react'
import { render, fireEvent, cleanup, wait } from '../../testUtils'

import Login from './Login'

afterEach(cleanup)

const defaultProps = {
  onSubmit: jest.fn(),
}

jest.mock('../components/PersonsDropdown')

describe('Login', () => {
  it('allows you to type in your name', () => {
    const { getByLabelText, getByDisplayValue } = render(
      <Login {...defaultProps} />
    )
    const nameInput = getByLabelText('Name')
    fireEvent.change(nameInput, { target: { value: 'Alice' } })
    wait(() => getByDisplayValue('Alice'))
  })

  it('allows you to select your favourite person', () => {
    const { getByLabelText, getByDisplayValue, getByText } = render(
      <Login {...defaultProps} />
    )
    const personSelect = getByLabelText('Favourite Person')
    fireEvent.click(personSelect)
    fireEvent.click(getByText('Yoda'))
    wait(() => getByDisplayValue('Yoda'))
  })

  it('sends both the name and favourite person to the submit handler when the button is clicked', () => {
    const submitHandler = jest.fn()
    const { getByLabelText, getByText } = render(
      <Login onSubmit={submitHandler} />
    )
    fireEvent.change(getByLabelText('Name'), { target: { value: 'Alice' } })
    fireEvent.click(getByLabelText('Favourite Person'))
    fireEvent.click(getByText('Yoda'))
    fireEvent.click(getByText('Login'))
    wait(() =>
      expect(submitHandler).toBeCalledWith({ name: 'Alice', person: 'Yoda' })
    )
  })
})
