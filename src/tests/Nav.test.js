import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from '../containers/Nav';

describe('Nav', () => {
  let wrapper;
  let removeUser;

  beforeEach(() => {
    removeUser = jest.fn()
    wrapper = shallow(<Nav
                        userLoggedIn={false}
                        removeUser={removeUser}
                      />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should toggle login text depending on user login status', () => {
    wrapper = shallow(<Nav
                        userLoggedIn={true}
                        removeUser={removeUser}
                      />)

    expect(wrapper).toMatchSnapshot()
  })
})