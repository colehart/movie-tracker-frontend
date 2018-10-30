import { userReducer } from '../reducers/userReducer';
import * as Actions from '../actions'
import { mockId } from './testMocks'

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
})