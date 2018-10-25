import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import fullHeart from '../../assets/images/full-heart.svg'
import emptyHeart from '../../assets/images/empty-heart.svg'


const Movie = ( { poster_path } ) => {

  return (
    <div className='movie'>
      <div className='movie-poster'>
        <img 
          className='poster'
          src={`http://image.tmdb.org/t/p/w185//${poster_path}`}
        />
      </div>
      <div className='fav-container'>
        <p className='fav-text'>FAVORITE</p>
        <div className='fav-btn'></div>
      </div>
    </div>
  )
}

export default Movie;