import React from 'react';
import { useQuery } from '@tanstack/react-query';

import movies from '../../lib/hooks/content'

export const getMovies = ()=>{
    return movies
}

export const eachMovie = (id)=> {
    return (
        movies.filter(movie => movie.ref === id)
    )
    
    // movies.some((movie)=>{
        
    // })
}

export const DetailedView = (id) => {
  return (
    // eachMovie(id)
    useQuery(['movieid', id], ()=>eachMovie(id))
  )
}

