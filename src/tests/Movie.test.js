import React from 'react';
import { shallow } from 'enzyme';
import { Movie, mapStateToProps, mapDispatchToProps } from '../containers/Movie';
import { mockFavMovies, mockUser, mockFavMovieId } from './testMocks';
import * as Actions from '../actions'

describe('Movie', () => {
  describe('Movie Component', () => {
    let wrapper;
    let mockMovie;

    beforeEach(() => {
      mockMovie = mockFavMovies[0]
      wrapper = shallow(<Movie
                          movie_id={mockMovie.movie_id}
                          overview={mockMovie.overview}
                          poster_path={mockMovie.poster_path}
                          release_date={mockMovie.release_date}
                          title={mockMovie.title}
                          vote_average={mockMovie.vote_average}
                          isFavorite={mockMovie.isFavorite}
                        />);
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should parse the movies from state', () => {
      const mockState = {
        user: mockUser
      }

      const expected = mockUser.id

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.isLoggedIn).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the toggleFavorites action', () => {
      const mockDispatch = jest.fn()
      const expected = Actions.toggleFavorite(mockFavMovieId)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.toggleFavorite(mockFavMovieId)

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })
  })
})