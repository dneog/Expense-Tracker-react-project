const initialState = {
    token: '',
    isLoggedIn: false
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          token: action.payload,
          isLoggedIn: true
        };
      case 'LOGOUT':
        return {
          ...state,
          token: '',
          isLoggedIn: false
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  