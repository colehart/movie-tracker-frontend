export const mockAPIFilms = {
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

export const mockMovies = [
  {
    id: 1,
    overview: "Great film.",
    poster_path: "poster-path1.jpg",
    release_date: "2014-02-26",
    title: "The Grand Budapest Hotel",
    isFavorite: false
  },
  {
    id: 2,
    overview: "Real good film.",
    poster_path: "poster-path2.jpg",
    release_date: "2015-03-27",
    title: "The Life Aquatic with Steve Zissou",
    isFavorite: false
  }
]

export const mockFavMovies = [
  {
    id: 1,
    overview: "Great film.",
    poster_path: "poster-path1.jpg",
    release_date: "2014-02-26",
    title: "The Grand Budapest Hotel",
    isFavorite: true
  },
  {
    id: 2,
    overview: "Real good film.",
    poster_path: "poster-path2.jpg",
    release_date: "2015-03-27",
    title: "The Life Aquatic with Steve Zissou",
    isFavorite: false
  }
]

export const mockFavMovieId = 1

const mockName = 'Wes'
const mockEmail = 'wes@anderson.com'
const mockPassword = 'password'
export const mockId = 1

export const mockUser = {
  id: mockId,
}

export const mockNewUser = {
  name: mockName,
  email: mockEmail,
  password: mockPassword
}

export const mockNewPostParams = [
  'http://localhost:3000/api/users/new', {
    method: 'POST',
    body: JSON.stringify( mockNewUser ),
    headers: {
      'Content-Type': 'application/json'
    }
  }
]

export const mockPostErrorResponse = {
  error: 'Key (email)=(email) already exists.'
}

export const mockReturningUser = {
  email: mockEmail,
  password: mockPassword
}

export const mockReturningPostParams = [
  'http://localhost:3000/api/users', {
    method: 'POST',
    body: JSON.stringify( mockReturningUser ),
    headers: {
      'Content-Type': 'application/json'
    }
  }
]