import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from '../components/App';
import * as API from '../utils';
import * as Actions from '../actions'

describe('App', () => {
  let wrapper;
  let mockAddMovies;

  beforeEach(() => {
    mockAddMovies = jest.fn();
    wrapper = shallow(<App addMovies={mockAddMovies}/>);
  })

  describe('App Component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the addMovies action', () => {
      const movies = [
        {
          backdrop_path: "backdrop-path1.jpg",
          id: 1,
          overview: "Great film.",
          poster_path: "poster-path1.jpg",
          release_date: "2014-02-26",
          title: "The Grand Budapest Hotel",
          isFavorite: false
        },
        {
          backdrop_path: "backdrop-path2.jpg",
          id: 2,
          overview: "Real good film.",
          poster_path: "poster-path2.jpg",
          release_date: "2015-03-27",
          title: "The Life Aquatic with Steve Zissou",
          isFavorite: false
        }
      ]

      const mockDispatch = jest.fn()
      const expected = Actions.addMovies(movies)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addMovies(movies)

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })
  })
})