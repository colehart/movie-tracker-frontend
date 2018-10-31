export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      return action.movies

    case 'TOGGLE_FAVORITE':
      return state.map(movie => {

        return movie.movie_id === action.movie_id ? {...movie, isFavorite: !movie.isFavorite} : movie
      })

    case 'FILTER_MOVIES':
      return action.movies.filter(movie => movie.isFavorite)
    default:
      return state
  }
}