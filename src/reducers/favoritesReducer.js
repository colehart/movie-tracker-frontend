// export const favoritesReducer = (state = [], action) => {
//   switch(action.type) {
//     case 'TOGGLE_FAVORITE':
//       return state.map(favorite => {
//         return favorite.id === action.id ? {...favorite, isFavorite: !favorite.isFavorite} : favorite
//       })
//     default:
//       return state
//   }
// }

// should movies have its own reducer to filter for favorites when faves button is clicked, OR
// should favorites have a 'FILTER_FAVORITES' action associated with it


  // case 'FILTER_FAVORITES':
  //   return action.filter