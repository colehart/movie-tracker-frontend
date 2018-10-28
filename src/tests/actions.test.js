import * as Actions from '../actions';
import { mockMovies, mockEmail, mockPassword, mockId } from './testMocks';

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

  it('should have a type of ADD_USER', () => {
    const email = mockEmail;
    const password = mockPassword;
    const id = mockId;

    const expectedAction = {
      type: 'ADD_USER',
      email,
      password,
      id,
    }

    const result = Actions.addUser(email, password, id)

    expect(result).toEqual(expectedAction)
  })
})