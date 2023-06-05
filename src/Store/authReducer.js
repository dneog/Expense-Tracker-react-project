const initialState = {
    token: '',
    isLoggedIn: false,
    displayName: '',
    email: '',
    photoUrl: ''
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
        case 'SET_USER_DATA':
          return {
            ...state,
            displayName: action.payload.displayName,
            email: action.payload.email,
            photoUrl: action.payload.photoUrl
          };
        case 'CLEAR_USER_DATA':
          return {
            ...state,
            displayName: '',
            email: '',
            photoUrl: ''
          };

         
        case 'UPDATE_PROFILE':
            return {
                ...state,
                displayName: action.payload.displayName,
                photoUrl: action.payload.photoUrl
              };  

      default:
        return state;


    }
  };
  
  export default authReducer;
  

