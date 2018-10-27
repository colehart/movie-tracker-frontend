import React from 'react';
import './MovieDetails.css';
import { Link } from 'react-router-dom';

const MovieDetails = (props) => {
  console.log(props)
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>{ props.title }</h1>
      <img src={`http://image.tmdb.org/t/p/w342//${props.poster_path}`} alt={`Poster of Wes Anderson's hit movie: "${ props.title }"`}/>
      <p>{ props.overview }</p>
    </div>
  )
}

export default MovieDetails;