export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies
})

export const toggleFavorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id
})

export const setUser = (id) => ({
  type: 'SET_USER',
  id
})

export const removeUser = () => ({
  type: 'REMOVE_USER'
})