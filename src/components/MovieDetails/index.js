import React from 'react';
import { Link } from 'react-router-dom';

import './MovieDetails.css';

const MovieDetails = (props) => {
  const { title, poster_path, overview } = props;
  return (
    <div className='d-container'>
      <div className='d-btn-container'>
        <Link 
          className='d-back-btn' 
          to="/">
          &#8592; Back to Movies
        </Link>
      </div>
      <div className='d-content-container'>
        <img 
          className='d-poster'
          src={`http://image.tmdb.org/t/p/w342//${poster_path}`} 
          alt={`Poster of Wes Anderson's hit movie: "${title}"`}
        />
        <div className='d-text-container'>
          <h1 className='d-title'>{ title }</h1>
          <p className='d-overview'>{ overview }</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;