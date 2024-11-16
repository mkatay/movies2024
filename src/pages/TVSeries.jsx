import React from 'react'
import { Content } from '../components/Content'
import { useState } from 'react'
import { Genres } from '../components/Genres'
const urlSeries=`https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_API_KEY}`

export const TVSeries = () => {
  const [urlForGenre,setUrlForGenre] =useState('')
  return (
  <>
   <Genres type='tv' setUrlForGenre={setUrlForGenre}/>
  <Content url={urlSeries+"&with_genres="+urlForGenre} name='series' type='tv'/>
 </>
)
}
