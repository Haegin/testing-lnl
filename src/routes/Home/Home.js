import React from 'react'
import { Link } from 'react-router-dom'
import Film from '../../components/Film'
import Page from '../../components/Page'

const Home = ({ films }) => (
  <Page>
    <h1>Films</h1>
    <Link to="/login">Log In</Link>
    {films.map(film => (
      <Film key={film.title} film={film} />
    ))}
  </Page>
)

export default Home
