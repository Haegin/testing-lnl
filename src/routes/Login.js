import React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 920px;
  margin: auto;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  background-color: 'light-grey';
  border: 1px dashed black;
`

const Film = ({ film }) => (
  <Card>
    <h3>{film.title}</h3>
  </Card>
)

const Home = ({ films }) => (
  <Page>
    {films.map(film => (
      <Film film={film} />
    ))}
  </Page>
)

export default Home
