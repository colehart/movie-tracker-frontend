import { moviesReducer } from '../reducers/moviesReducer';
import * as Actions from '../actions';
import { mockMovies, mockFavMovieId, mockFavMovies } from './testMocks';

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

  it('should return state with a favorited movie', () => {
    const initialState = mockMovies;
    const expected = mockFavMovies;

    const result = moviesReducer(initialState, Actions.toggleFavorite(mockFavMovieId))

    expect(result).toEqual(expected)

  })

  it('should return state with all favorited movies', () => {
    const initialState = mockMovies;
    const expected = [mockFavMovies[0]];

    const result = moviesReducer(initialState, Actions.filterMovies(mockFavMovies))

    expect(result).toEqual(expected)

  })
})