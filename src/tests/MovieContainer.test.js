import React from 'react';
import { shallow } from 'enzyme';
import { MovieContainer, mapStateToProps } from '../containers/MovieContainer';
import { mockMovies } from './testMocks';

describe('MovieContainer', () => {
  describe('MovieContainer Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<MovieContainer movies={ mockMovies }/>);
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should parse the movies from state', () => {
      const mockState = {
        movies: mockMovies
      }
      const expected = mockMovies
      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps.movies).toEqual(expected)
    })
  })
})