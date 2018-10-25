import { combineReducers } from 'redux'
// import { favoritesReducer } from './favoritesReducer'
// import { usersReducer } from './usersReducer'
import { moviesReducer } from './moviesReducer'
import * as API from '../utils'

export const rootReducer = combineReducers({
  // favorites: favoritesReducer,
  // users: usersReducer
  movies: moviesReducer
})