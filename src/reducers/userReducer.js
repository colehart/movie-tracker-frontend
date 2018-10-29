export const userReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return { 
        name: action.name, 
        email: action.email, 
        password: action.password, 
        id: action.id, 
        userFaves: [] 
      }
    case 'LOGIN_USER':
      return {
        email: action.email,
        password: action.password
      }
      
    default:
      return state
  }
}

//when guest clicks favorite, route to login.
//when guest signs up successfully, user is logged in, returned to / (extension: or individual movie page) and fave is added