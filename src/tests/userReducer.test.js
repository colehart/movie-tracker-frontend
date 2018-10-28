import { userReducer } from '../reducers/userReducer';
import * as Actions from '../actions'
import { mockEmail, mockPassword, mockId } from './testMocks'

describe('userReducer', () => {
  let email;
  let password;
  let id;

  beforeEach(() => {
    email = mockEmail;
    password = mockPassword;
    id = mockId;
  })

  it('should return the default state', () => {
    const expected = {};
    const result = userReducer(undefined, {})

    expect(result).toEqual(expected);
  })
})