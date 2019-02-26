import { compose, branch, renderComponent, mapProps } from 'recompose'
import { graphql } from 'react-apollo'

import personsQuery from '../../queries/personsQuery'
import Loading from '../Loading'

import PersonsDropdown from './PersonsDropdown'

export default compose(
  graphql(personsQuery),
  branch(({ data: { loading } }) => loading, renderComponent(Loading)),
  mapProps(({ data, ...rest }) => ({ persons: data.allPersons, ...rest }))
)(PersonsDropdown)
