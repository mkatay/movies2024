import React,{useState} from 'react'

import { getData } from '../utils'
import Stack from '@mui/material/Stack';
import { SingleChip } from './SingleChip';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { deepPurple } from '@mui/material/colors';

export const Genres = ({type,setUrlForGenre}) => {
  const urlGenres=`https://api.themoviedb.org/3/genre/${type}/list?api_key=${import.meta.env.VITE_API_KEY}`
  const [selectedGenres,setSelectedGenres] =useState([])
  
  useEffect(()=>{
    if(selectedGenres.length<1) setUrlForGenre('')
        else setUrlForGenre(selectedGenres.join(','))
  },[selectedGenres])

    const { data,status, isLoading, isError } = useQuery({queryKey:['genres', urlGenres],queryFn: getData});
    
    if (isLoading) {
      return <CircularProgress  color="secondary" size="3rem" />
    }
  
    if (isError) {
      return <div>Error occurred while fetching data!</div>;
    }
    status=='success' && console.log(data.genres);
    console.log('kiválasztott kategóriák:',selectedGenres);

  return (
    <Stack direction="row" spacing={1} 
    sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',padding:'10px',backgroundColor:deepPurple[600],
      position:'sticky',top:'68px'/*A navbar magassága */,zIndex: 5}}>
     {status=='success' && data.genres.map(obj=>
        <SingleChip key={obj.id} {...obj} 
          selectedGenres={selectedGenres}   
          setSelectedGenres={setSelectedGenres} 
       
          />
      )}
  </Stack>
  )
}
