import React from 'react';
import PropTypes from 'prop-types';
import './MovieContainer.css';
import Movie from '../Movie'

const MovieContainer = () => {
  // const movies = this.props.movies.map(movie => {
  //   return <Movie />
  // })

  return (
    <div className='movie-container'>
      {/*{ movies }*/}
      <Movie />
    </div>
  )
}

export default MovieContainer;