export const userReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_USER':
      return { 
        id: action.userId, 
      }
    case 'REMOVE_USER':
      return {}
    default:
      return state
  }
}

//when guest clicks favorite, route to login.
//when logged in successfully favorite auto-added