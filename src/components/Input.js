import React from 'react'
import styled from 'styled-components'
import Error from './Error'

const Field = styled.input`
  width: 100%;
  height: 30px;
  padding: 5px 0;
  font-weight: 300;
  font-size: 18px;
  outline: none;
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: ${({ touched, error }) =>
    touched && error ? 'red' : 'black'};

  &::placeholder {
    color: 'grey';
  }

  &:hover {
    border-color: hsl(0, 0%, 70%);
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`

const Input = ({ error, ...rest }) => (
  <InputContainer>
    <Field {...rest} />
    <Error>{error && error}</Error>
  </InputContainer>
)

export default Input
export { Field }