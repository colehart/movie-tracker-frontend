import { userReducer } from '../reducers/userReducer';
import * as Actions from '../actions'
import { mockId, mockUser } from './testMocks'

describe('userReducer', () => {
  let id;

  beforeEach(() => {
    id = mockId;
  })

  it('should return the default state', () => {
    const expected = {};
    const result = userReducer(undefined, {})

    expect(result).toEqual(expected);
  })

  it('should return the state with a user', () => {
    const initialState = {}
    const expected = { id: mockUser.id }

    const result = userReducer(initialState, Actions.setUser(mockUser.id))

    expect(result).toEqual(expected)
  })

  it('should remove a user', () => {
    const initialState = { id: 1 }
    const expected = {}

    const result = userReducer(initialState, Actions.removeUser())
    expect(result).toEqual(expected)
  })
})