import React from 'react';
import { shallow } from 'enzyme';
import Nav from './index.js';

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

