import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../components/Nav';

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav userLoggedIn={false}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should toggle login text depending on user login status', () => {
    wrapper = shallow(<Nav userLoggedIn={true} />)

    expect(wrapper).toMatchSnapshot()
  })
})