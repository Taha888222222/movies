import React from 'react'

import Cardmovives from './Cartmovies'

const Movielist = ({movies}) => {
  return (
    <div className="movie-list">
        {movies.map((movie, index) => (
        <Cardmovives key={index}  {...movie} /> 
        ))}
        
    </div>
  )
}

export default Movielist