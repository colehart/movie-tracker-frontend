import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import fullHat from '../../assets/images/hatFull-red.svg'
import emptyHat from '../../assets/images/hatOutline-blue.svg'
import { Link } from 'react-router-dom';

const Movie = ( { poster_path, id } ) => {
  return (
    <div>
      <Link to={`/${id}`}>
        <div className='movie'>
          <div className='movie-poster'>
            <img
              className='poster'
              src={`http://image.tmdb.org/t/p/w342//${poster_path}`}/>
          </div>
        </div>
      </Link>
      <div className='fav-container'>
        <p className='fav-text'>FAVORITE</p>
        <div className='fav-btn'>
        </div>
      </div>
    </div>
  )
}

Movie.propTypes = {
  poster_path: PropTypes.string.isRequired
}

export default Movie;