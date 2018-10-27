import React from 'react';
import './MovieDetails.css';
import { Link } 'from react-router-dom';

const MovieDetails = (props) => {
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>{ name }</h1>
      <img src={ poster_path } alt={`Poster of Wes Anderson's hit movie: "${name}"`}/>
      <p>{ overview }</p>
    </div>
  )
}

export default MovieDetails;