export const fetchMovies = async (apiKey) => {
  const wesAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_people=5655`;
  const response = await fetch(wesAPI);
  if (!response.ok) {
      throw new Error(response.statusText);
  } else {
    const movieData = await response.json();
    const cleanData = cleanMovies(movieData.results)
    return cleanData
  }
}

const cleanMovies = (results) => {
  return results.map(movie => {
    return {
      backdrop_path: movie.backdrop_path,
      id: movie.id,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      title: movie.title,
      isFavorite: false
    }
  })  
}

export const addUser = async (user) => {
  const dataBaseAPI = 'http://localhost:3000/api/users/new';

  try { 
    const response = await fetch(dataBaseAPI, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    } 
    return await response.json();
  } catch (error){
    return 'Email has already been used';
  }
}

export const loginUser = async (user) => {
  const dataBaseAPI = 'http://localhost:3000/api/users';
  const email = user.email.toLowerCase();
  try {
    const response = await fetch(dataBaseAPI, {
      method: 'POST',
      body: JSON.stringify({email, password: user.password}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      return await response.json();
    } 
  } catch (error) {
    return 'Email and password do not match.'
  }
}