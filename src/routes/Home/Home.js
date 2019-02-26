import React from 'react'
import styled from 'styled-components'
import Film from '../../components/Film'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 920px;
  margin: auto;
`

const Home = ({ films }) => (
  <Page>
    <h1>Films</h1>
    {films.map(film => (
      <Film key={film.title} film={film} />
    ))}
  </Page>
)

export default Home
