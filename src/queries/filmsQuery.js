import gql from 'graphql-tag'

const filmsQuery = gql`
  query films {
    allFilms(orderBy: releaseDate_ASC) {
      title
      episodeId
      releaseDate
    }
  }
`

export default filmsQuery
