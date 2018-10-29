import * as API from '../utils';
import { mockAPIFilms, mockMovies, mockPostParams, mockNewUser, mockPostResponse } from './testMocks'

describe('API', () => {
  describe('fetchMovies', () => {
    let apiKey;

    beforeEach(() => {
      apiKey = 1

      window.fetch = jest.fn(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockAPIFilms)
      }))
    })

    it('should call fetch with the correct url', async () => {
      const expected = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_people=5655`

      await API.fetchMovies(apiKey)

      expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    it('should return clean movies if status is ok', async () => {
      const result = await API.fetchMovies(apiKey)
      const expected = mockMovies

      expect(result).toEqual(expected)
    })

    it('should throw an error if the status is not ok', () => {
      const expected = Error('fetch failed.')

      window.fetch = jest.fn(() => Promise.resolve({ ok: false, statusText: 'fetch failed.'}))

      expect(API.fetchMovies()).rejects.toEqual(expected)
    })
  })

  describe('addUser', () => {
    beforeEach(() => {
      window.fetch = jest.fn(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPostResponse)
      }))
    })

    it('calls fetch with the correct params', async () => {
      const expected = mockPostParams
      await API.addUser(mockNewUser)

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    })

    it('sets an error when the fetch fails', async () => {
      const expected = Error('bad email')

      window.fetch = jest.fn(() => Promise.resolve({
        ok: false,
        statusText: 'bad email'
      }))

      await expect(API.addUser(mockNewUser)).rejects.toEqual(expected)
    })

  })
})
