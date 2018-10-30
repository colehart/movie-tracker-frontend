import React from 'react';
import './MovieDetails.css';
import { Link } from 'react-router-dom';

const MovieDetails = (props) => {
  const { title, poster_path, overview, backdrop_path } = props;
  return (
    <div>
    <img 
      src={`http://image.tmdb.org/t/p/w342//${backdrop_path}`}
      alt={`A still from the movie, ${title}`}/>
      <Link to="/">Back</Link>
      <h1>{ title }</h1>
      <img src={`http://image.tmdb.org/t/p/w342//${poster_path}`} alt={`Poster of Wes Anderson's hit movie: "${title}"`}/>
      <p>{ overview }</p>
    </div>
  )
}

export default MovieDetails;