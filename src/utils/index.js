export const fetchMovies = async (apiKey) => {
  const wesAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_people=5655`;
  const response = await fetch(wesAPI);
  if (!response.ok) {
      throw Error(response.statusText);
  } else {
    const movieData = await response.json();
    const results = {...movieData.results}
    return results
  }
}