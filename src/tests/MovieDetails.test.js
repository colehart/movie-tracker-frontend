import React from 'react';
import { shallow } from 'enzyme';
import MovieDetails from '../components/MovieDetails';

describe('MovieDetails', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieDetails />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})