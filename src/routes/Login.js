import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { withStateHandlers, compose } from 'recompose'

import Page from '../components/Page'

const Form = styled.div`
  margin-top: 3rem;
  width: 512px;
  display: flex;
  flex-direction: column;
  margin: auto;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Label = styled.label`
  width: 50%;
  padding: 1rem;
  text-align: right;
`

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  width: 50%;
  border: none;
  border-bottom: 1px solid black;
`

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: powderblue;
  border: 1px solid black;
  color: black;
  width: 25%;
  margin: auto;

  &:hover {
    color: white;
    background-color: midnightblue;
  }
`

const Login = ({ handleSubmit, changeName, changeFilm, name, film }) => (
  <Page>
    <h1>Login</h1>
    <Link to="/">Home</Link>
    <Form>
      <Row>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={changeName}
        />
      </Row>
      <Row>
        <Button onClick={handleSubmit}>Login</Button>
      </Row>
    </Form>
  </Page>
)

export default compose(
  withStateHandlers(
    {
      name: '',
      film: undefined,
    },
    {
      changeName: () => evt => ({ name: evt.target.value }),
      changeFilm: () => film => ({ film }),
      handleSubmit: ({ name, film }, { onSubmit }) => () =>
        onSubmit({ name, film }),
    }
  )
)(Login)
