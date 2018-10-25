import React from 'react';
import PropTypes from 'prop-types';
import './MovieContainer.css';
import Movie from '../Movie';
import { connect } from 'react-redux';


const MovieContainer = (props) => {
  const movies = props.movies.map(movie => {
    return <Movie { ...movie }/>
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


export default connect(mapStateToProps)(MovieContainer);