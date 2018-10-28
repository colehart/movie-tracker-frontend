import { combineReducers } from 'redux'
// import { favoritesReducer } from './favoritesReducer'
import { userReducer } from './userReducer'
import { moviesReducer } from './moviesReducer'
import * as API from '../utils'

export const rootReducer = combineReducers({
  // favorites: favoritesReducer,
  user: userReducer,
  movies: moviesReducer
})