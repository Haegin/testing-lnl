import { compose, branch, renderComponent, mapProps } from 'recompose'
import { graphql } from 'react-apollo'

import filmsQuery from '../../queries/filmsQuery'
import Loading from '../../components/Loading'

import Home from './Home'

export default compose(
  graphql(filmsQuery),
  branch(({ data: { loading } }) => loading, renderComponent(Loading)),
  mapProps(({ data }) => ({ films: data.allFilms }))
)(Home)
