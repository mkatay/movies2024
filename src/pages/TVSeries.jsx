import React from 'react'
import { Content } from '../components/Content'
const urlSeries=`https://api.themoviedb.org/3/trending/tv/day?api_key=${import.meta.env.VITE_API_KEY}`

export const TVSeries = () => {
  return (
 <Content url={urlSeries} media_type='TV'name='series'/>
)
}
