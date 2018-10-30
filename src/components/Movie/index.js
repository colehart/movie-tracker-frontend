import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import fullHat from '../../assets/images/hatFull-red.svg'
import emptyHat from '../../assets/images/hatOutline-blue.svg'
import { Link } from 'react-router-dom';

const Movie = ( { poster_path, id } ) => {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <div className='m-movie'>
          <div className='m-movie-poster'>
            <img
              className='m-poster'
              src={`http://image.tmdb.org/t/p/w342//${poster_path}`}
              alt='Click here for movie details.'/>
          </div>
        </div>
      </Link>
      <div className='m-fav-container'>
        <p className='m-fav-text'>FAVORITE</p>
        <div className='m-fav-btn'>
        </div>
      </div>
    </div>
  )
}

Movie.propTypes = {
  poster_path: PropTypes.string.isRequired
}

export default Movie;