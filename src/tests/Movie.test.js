import React from 'react';
import { shallow } from 'enzyme';
import { Movie } from '../components/Movie';

describe('Movie', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Movie poster_path='something.jpg'/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})