import React from 'react';
import { shallow } from 'enzyme';
import { Nav, mapDispatchToProps, mapStateToProps } from '../containers/Nav';
import { mockFavMovies, mockUser } from './testMocks'
import * as Actions from '../actions'

describe('Nav', () => {
  describe('Nav Component', () => {
    let wrapper;
    let movies;
    let removeUser;
    let filterMovies;

    beforeEach(() => {
      movies = mockFavMovies
      removeUser = jest.fn()
      filterMovies = jest.fn()
      wrapper = shallow(<Nav
                          userLoggedIn={undefined}
                          movies={movies}
                          removeUser={removeUser}
                          filterMovies={filterMovies}
                        />);
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should toggle login text depending on user login status', () => {
      wrapper = shallow(<Nav
                          userLoggedIn={1}
                          movies={movies}
                          removeUser={removeUser}
                          filterMovies={filterMovies}
                        />)

      expect(wrapper).toMatchSnapshot()
    })

  })
  describe('mapDispatchToProps', () => {
    it('should call dispatch with the removeUser action', () => {
      const mockDispatch = jest.fn()
      const expected = Actions.removeUser()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.removeUser()

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })

    it('should call dispatch with the filterMovies action', () => {
      const mockDispatch = jest.fn()
      const expected = Actions.filterMovies()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.filterMovies()

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })
  })

  describe('mapStateToProps', () => {
    it('should parse the userLoggedIn from state', () => {
      const mockState = {
        user: mockUser
      }

      const expected = 1

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.userLoggedIn).toEqual(expected)
    })

    it('should parse the moves from state', () => {
      const mockState = {
        user: mockUser,
        movies: mockFavMovies
      }

      const expected = mockFavMovies

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.movies).toEqual(expected)
    })
  })
})