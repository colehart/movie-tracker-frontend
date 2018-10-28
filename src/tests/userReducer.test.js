import { userReducer } from '../reducers/userReducer';
import * as Actions from '../actions'
import { mockName, mockEmail, mockPassword, mockId } from './testMocks'

describe('userReducer', () => {
  let name
  let email;
  let password;
  let id;

  beforeEach(() => {
    name = mockName;
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