import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import * as API from '../../utils'
import { toggleFavorite } from '../../actions';
import './Movie.css';

// make functional
export class Movie extends Component {
  handleClick = async () => {
    const { movie_id, overview, poster_path, release_date, title, vote_average, isLoggedIn, toggleFavorite } = this.props;
    const movie = {
      user_id: isLoggedIn,
      movie_id: movie_id,
      overview,
      poster_path,
      release_date,
      title,
      vote_average,
    }

    await API.addFavorite(movie)
    toggleFavorite(movie_id)
  }

  render() {
    let favoriteBtn;
    const { poster_path, movie_id, isLoggedIn, isFavorite } = this.props;

    if (isLoggedIn) {
      favoriteBtn =
        <button className='m-fav-container'
          onClick={this.handleClick}
        >
          <p className='m-fav-text'>FAVORITE</p>
          <div
            className={`m-fav-btn ${isFavorite ? 'red' : ''}`}>
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
      <div className='m-movie'>
        <Link to={`/movie/${movie_id}`}>
          <div className='m-movie-poster'>
            <img
              className='m-poster'
              src={`http://image.tmdb.org/t/p/w342//${poster_path}`}
              alt='Click here for movie details.'/>
          </div>
        </Link>
        { favoriteBtn }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  isLoggedIn: state.user.id,
})

export const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (movieId) => dispatch(toggleFavorite(movieId)),
})

Movie.propTypes = {
  movie_id: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number,
  isFavorite: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);