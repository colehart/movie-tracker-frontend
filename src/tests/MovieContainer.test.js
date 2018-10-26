import React from 'react';
import { shallow } from 'enzyme';
import { MovieContainer } from '../components/MovieContainer';
import { mockMovies } from './testMocks';

describe('MovieContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieContainer movies={ mockMovies }/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})