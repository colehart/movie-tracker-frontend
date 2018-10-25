import * as API from './index';

describe('API', () => {
  describe('fetchMovies', () => {
    let apiKey;
    let mockFilms;

    beforeEach(() => {
      apiKey = 1
      mockFilms = {
        results: [
          {
            votes: 2,
            backdrop_path: "backdrop-path1.jpg",
            id: 1,
            overview: "Great film.",
            poster_path: "poster-path1.jpg",
            release_date: "2014-02-26",
            title: "The Grand Budapest Hotel"
          },
          {
            votes: 15,
            backdrop_path: "backdrop-path2.jpg",
            id: 2,
            overview: "Real good film.",
            poster_path: "poster-path2.jpg",
            release_date: "2015-03-27",
            title: "The Life Aquatic with Steve Zissou"
          }
        ]
      }

      window.fetch = jest.fn(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockFilms)
      }))
    })

    it('should call fetch with the correct url', async () => {
      const expected = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_people=5655`

      await API.fetchMovies(apiKey)

      expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    it('should return clean movies if status is ok', async () => {
      const result = await API.fetchMovies(apiKey)
      const expected = [
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

      expect(result).toEqual(expected)
    })

    it('should throw an error if the status is not ok', () => {
      const expected = Error('fetch failed.')

      window.fetch = jest.fn(() => Promise.resolve({ ok: false, statusText: 'fetch failed.'}))

      expect(API.fetchMovies()).rejects.toEqual(expected)
    })
  })
})
