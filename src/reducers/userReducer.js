export const userReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_USER':
      return { 
        id: action.id, 
      }
    default:
      return state
  }
}

//when guest clicks favorite, route to login.
//when guest signs up successfully, user is logged in, returned to / (extension: or individual movie page) and fave is added