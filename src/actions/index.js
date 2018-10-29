export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies
})

// export const toggleFavorite = (id) => ({
//   type: 'TOGGLE_FAVORITE',
//   id
// })

export const addUser = (name, email, password, id) => ({
  type: 'ADD_USER',
  name,
  email,
  password,
  id
})

export const loginUser = (email, password) => ({
  type: 'LOGIN_USER',
  email,
  password,
})

// export const toggleUserLogin = (id) => ({
//   type: 'TOGGLE_USER_LOGIN',
//   id
// })