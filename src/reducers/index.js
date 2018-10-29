import { combineReducers } from 'redux'
// import { favoritesReducer } from './favoritesReducer'
import { userReducer } from './userReducer'
import { moviesReducer } from './moviesReducer'

export const rootReducer = combineReducers({
  // favorites: favoritesReducer,
  user: userReducer,
  movies: moviesReducer
})