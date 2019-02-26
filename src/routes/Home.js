import React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { compose, branch, renderComponent, mapProps } from 'recompose'
import Film from '../components/Film'
import filmsQuery from '../queries/filmsQuery'

const Loading = () => <h3>Loading</h3>

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 920px;
  margin: auto;
`

const Home = ({ films }) => (
  <Page>
    <h1>Films</h1>
    {films.map(
      film => console.log(film) || <Film key={film.title} film={film} />
    )}
  </Page>
)

export default compose(
  graphql(filmsQuery),
  branch(({ data: { loading } }) => loading, renderComponent(Loading)),
  mapProps(({ data }) => ({ films: data.allFilms }))
)(Home)
