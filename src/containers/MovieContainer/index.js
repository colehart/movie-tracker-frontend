import React from 'react';
import PropTypes from 'prop-types';
import './MovieContainer.css';
import Movie from '../../components/Movie';
import { connect } from 'react-redux';


export const MovieContainer = (props) => {
  const movies = props.movies.map(movie => {
    return <Movie { ...movie } key={movie.id} />
  })

  return (
    <div className='movie-container'>
      { movies }
    </div>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

MovieContainer.propTypes = {
  movies: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(MovieContainer);