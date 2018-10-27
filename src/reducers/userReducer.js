export const userReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return { email: action.email, password: action.password, id: action.id, userFaves: [] }

    // case 'VALIDATE_USER':
    //   return [...state, {email: action.email, password: action.password, id: action.id}]

    default:
      return state
  }
}

//when guest clicks favorite, popup/prompt to sign up.
//when guest signs up successfully, user is logged in and fave is added