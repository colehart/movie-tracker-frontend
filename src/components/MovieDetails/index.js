import React from 'react';
import './MovieDetails.css';
import { Link } from 'react-router-dom';

const MovieDetails = (props) => {
  const { title, poster_path, overview, backdrop_path } = props;
  return (
    <div className='details-container'>
      <Link 
        className='back-btn' 
        to="/">Back</Link>
      <img 
        src={`http://image.tmdb.org/t/p/w342//${poster_path}`} 
        alt={`Poster of Wes Anderson's hit movie: "${title}"`}/>
      <div text-container>
        <h1 className='title'>{ title }</h1>
        <p className='overview'>{ overview }</p>
      </div>
    </div>
  )
}

export default MovieDetails;