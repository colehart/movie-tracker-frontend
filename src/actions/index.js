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

// export const validateUser = (email, password, id) => ({
//   type: 'VALIDATE_USER',
//   email,
//   password,
//   id
// })

// export const toggleUserLogin = (id) => ({
//   type: 'TOGGLE_USER_LOGIN',
//   id
// })