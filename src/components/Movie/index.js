import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = () => {

  return (
    <div className='movie'>
      <div className='movie-poster'>
      </div>
      <button className='fav-btn'>
        <img 
          className='fav-heart'
          src=''
        />
        FAVORITE
      </button>
    </div>
  )
}

export default Movie;