import React from 'react';
import { shallow } from 'enzyme';
import MovieContainer from './index.js';

describe('MovieContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieContainer />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})