import gql from 'graphql-tag'

const personsQuery = gql`
  query persons {
    allPersons {
      name
    }
  }
`

export default personsQuery
