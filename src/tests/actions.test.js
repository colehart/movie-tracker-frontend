import * as Actions from '../actions';
import { mockName, mockMovies, mockEmail, mockPassword, mockId } from './testMocks';

describe('actions', () => {
  it('should have a type of ADD_MOVIES', () => {
    const movies = mockMovies;
    const expectedAction = {
      type: 'ADD_MOVIES',
      movies,
    }

    const result = Actions.addMovies(mockMovies)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SET_USER', () => {
    const id = mockId;

    const expectedAction = {
      type: 'SET_USER',
      id,
    }

    const result = Actions.setUser(id)

    expect(result).toEqual(expectedAction)
  })
})