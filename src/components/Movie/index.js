import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import fullHeart from '../../assets/images/full-heart.svg'
import emptyHeart from '../../assets/images/empty-heart.svg'


const Movie = ( { poster_path } ) => {

  return (
    <div className='movie'>
      <div className='movie-poster'>
      </div>
      <button className='fav-btn'>
        <img 
          className='fav-heart'
          src={`http://image.tmdb.org/t/p/w185//${poster_path}`}
        />
        FAVORITE
      </button>
    </div>
  )
}

export default Movie;