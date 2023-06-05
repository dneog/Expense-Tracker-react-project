export const login = (token) => {
    return { type: 'LOGIN', payload: token };
  };
  
  export const logout = () => {
    return { type: 'LOGOUT' };
  };
 
  export const setUserData = (displayName, email, photoUrl) => {
    return { type: 'SET_USER_DATA', payload: { displayName, email, photoUrl } };
  };
  
  export const clearUserData = () => {
    return { type: 'CLEAR_USER_DATA' };
  };
  
  export const updateProfile = (displayName, photoUrl) => {
    return { type: 'UPDATE_PROFILE', payload: { displayName, photoUrl } };
  };
  