import React from 'react'
import { Content } from '../components/Content'
//const urlMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&sort_by=release_date.desc`
//tesztre:
//const urlMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=28,35,99`

const urlMovies=`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}`

export const Movies = (/*{urlForGenre}*/) => {
  return(
  <Content url={urlMovies} type='movies'name='movies'/>
  )
}
