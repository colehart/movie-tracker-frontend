import React from 'react';
import { shallow } from 'enzyme';
import Movie from '../components/Movie';

describe('Movie', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Movie />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})