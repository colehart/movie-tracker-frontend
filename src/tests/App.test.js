import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps, mapStateToProps } from '../containers/App';
import { mockUser, mockMovies, mockFavMovieId } from './testMocks';
import * as API from '../utils';
import * as Actions from '../actions'

describe('App', () => {
  let wrapper;
  let mockAddMovies;

  beforeEach(() => {
    mockAddMovies = jest.fn();
    wrapper = shallow(<App addMovies={mockAddMovies} user={{}} />);
  })

  describe('App Component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the addMovies action', () => {
      const mockDispatch = jest.fn()
      const expected = Actions.addMovies(mockMovies)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addMovies(mockMovies)

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })

    it('should call dispatch with the toggleFavorite action', () => {
      const mockDispatch = jest.fn()
      const expected = Actions.toggleFavorite(mockFavMovieId)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.toggleFavorite(mockFavMovieId)

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })
  })

  describe('mapStateToProps', () => {
    it('should parse the user from state', () => {
      const mockState = {
        user: mockUser
      }

      const expected = mockUser

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.user).toEqual(expected)
    })
  })
})