import React from 'react';
import PropTypes from 'prop-types';
import './MovieContainer.css';
import Movie from '../Movie';
import { connect } from 'react-redux';


export const MovieContainer = (props) => {
  if(!props.isLoggedIn && props.location === '/login') {
    props.history.push('/login')
  }
  const movies = props.movies.map(movie => {
    return <Movie { ...movie } key={movie.movie_id} />
  })

  return (
    <div className='movie-container'>
      { movies }
    </div>
  )
}




export const mapStateToProps = (state) => ({
  movies: state.movies,
  isLoggedIn: state.user.id,
})

MovieContainer.propTypes = {
  movies: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(MovieContainer);