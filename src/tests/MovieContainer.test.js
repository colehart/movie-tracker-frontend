import React from 'react';
import { shallow } from 'enzyme';
import { MovieContainer, mapStateToProps } from '../containers/MovieContainer';
import { mockMovies } from './testMocks';

describe('MovieContainer', () => {
  describe('MovieContainer Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<MovieContainer
                          movies={ mockMovies }
                          history={ [] }
                          isLoggedIn={ undefined }
                        />);
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should parse the movies from state', () => {
      const mockState = {
        user: {},
        movies: mockMovies
      }
      const expected = mockMovies
      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps.movies).toEqual(expected)
    })

    it('should set isLoggedIn from user id in state', () => {
      const mockState = {
        user: { id: 1 }
      }
      const expected = 1;
      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps.isLoggedIn).toEqual(expected)
    })
  })
})