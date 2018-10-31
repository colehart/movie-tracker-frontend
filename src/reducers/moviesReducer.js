export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      return action.movies

    case 'TOGGLE_FAVORITE':
      return state.map(movie => {

        return movie.id === action.movieId ? {...movie, isFavorite: !movie.isFavorite} : movie
      })

    case 'FILTER_MOVIES':
      return action.movies.filter(movie => movie.isFavorite)
    default:
      return state
  }
}

// should movies have its own reducer to filter for favorites when faves button is clicked, OR
// should favorites have a 'FILTER_FAVORITES' action associated with it


  // case 'FILTER_FAVORITES':
  //   return action.filter