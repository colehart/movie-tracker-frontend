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

  it('should have a type of ADD_USER', () => {
    const name = mockName;
    const email = mockEmail;
    const password = mockPassword;
    const id = mockId;

    const expectedAction = {
      type: 'ADD_USER',
      name,
      email,
      password,
      id,
    }

    const result = Actions.addUser(name, email, password, id)

    expect(result).toEqual(expectedAction)
  })
})

it('should have a type of LOGIN_USER', () => {
    const email = mockEmail;
    const password = mockPassword;

    const expectedAction = {
      type: 'LOGIN_USER',
      email,
      password,
    }

    const result = Actions.loginUser(email, password)

    expect(result).toEqual(expectedAction)
  })