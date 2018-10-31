export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies
})

export const toggleFavorite = (movieId) => ({
  type: 'TOGGLE_FAVORITE',
  movie_id: movieId
})

export const setUser = (userId) => ({
  type: 'SET_USER',
  userId: userId
})

export const removeUser = () => ({
  type: 'REMOVE_USER'
})

export const filterMovies = (movies) => ({
  type: 'FILTER_MOVIES',
  movies
})
