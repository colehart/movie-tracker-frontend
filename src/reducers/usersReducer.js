// export const usersReducer = (state = [], action) => {
//   switch(action.type) {
//     case 'ADD_USER':
//       return [...state, { email: action.email, password: action.password, id: action.id, isLoggedIn: true, userFaves: [] }]
//     case 'VALIDATE_USER':
//       return [...state, {email: action.email, password: action.password, id: action.id}]
//     case 'TOGGLE_USER_LOGIN':
//       return state.map(user => {
//        return user.id === action.id ? {...user, isLoggedIn: !user.isLoggedIn} : user
//       })
//     default:
//       return state
//   }
// }

//when guest clicks favorite, popup/prompt to sign up.
//when guest signs up successfully, user is logged in and fave is added