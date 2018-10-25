export const moviesReducer = (state = [], action) => {
  console.log(action)
  switch(action.type) {
    case 'ADD_MOVIES':
      return action.movies
    default:
      return state
  }
}
