import React from 'react'
import { Content } from '../components/Content'
import { Genres } from '../components/Genres'
import { useState } from 'react'
//const urlMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&sort_by=release_date.desc`
//tesztre:
//const urlMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=28,35,99`

const urlMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`

export const Movies = () => {
  const [urlForGenre,setUrlForGenre] =useState('')

  return(
    <div  style={{paddingTop:'60px'}}>
    <Genres type='movie' setUrlForGenre={setUrlForGenre}/>
    <Content url={urlMovies+"&with_genres="+urlForGenre} name='movies' type='movie'/>
    </div>
  
  )
}
