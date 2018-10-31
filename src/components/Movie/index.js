import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dispatch } from 'redux';
import { NavLink, Link } from 'react-router-dom';

import fullHat from '../../assets/images/hatFull-red.svg'
import emptyHat from '../../assets/images/hatOutline-blue.svg';
import { toggleFavorite } from '../../actions';
import './Movie.css';


export const Movie = (props) => {
  let favoriteBtn;
  const  { poster_path, id, isLoggedIn, toggleFavorite } = props;

  if (isLoggedIn) {
    favoriteBtn =       
      <button className='m-fav-container' 
        onClick={() => toggleFavorite(id)}
      >
        <p className='m-fav-text'>FAVORITE</p>
        <div className='m-fav-btn'>
        </div>
      </button>
  } else {
    favoriteBtn = 
      <NavLink className='m-fav-container' 
        to='/login'>
        <p className='m-fav-text'>FAVORITE</p>
        <div className='m-fav-btn'>
        </div>
      </NavLink>
  }

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
      { favoriteBtn }
    </div>
  )
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.id
})

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (movieId) => dispatch(toggleFavorite(movieId))
})

Movie.propTypes = {
  poster_path: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);