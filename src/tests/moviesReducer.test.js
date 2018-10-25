import { moviesReducer } from '../reducers/moviesReducer';
import * as Actions from '../actions';
import { mockMovies } from './testMocks';

describe('moviesReducer', () => {
  let movies;

  beforeEach(() => {
    movies = mockMovies
  })

  it('should return the default state', () => {
    const expected = [];
    const result = moviesReducer(undefined, {})
    
    expect(result).toEqual(expected);
  })

  it('should return state with movies', () => {
    const initialState = [];
    const expected = movies;

    const result = moviesReducer(initialState, Actions.addMovies(movies))

    expect(result).toEqual(expected)

  })
})