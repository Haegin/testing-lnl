import React from 'react'
import Card from './Card'
import dayjs from 'dayjs'

const Film = ({ film }) => (
  <Card>
    <h3>
      Episode {film.episodeId} - {film.title}
    </h3>
    <p>Released on {dayjs(film.releaseDate).format('DD MMM YYYY')}</p>
  </Card>
)

export default Film
