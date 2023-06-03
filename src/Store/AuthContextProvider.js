import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from './Action';
import AuthContext from './AuthContext';
export const AuthContextProvider = (props) => {
  const dispatch = useDispatch();
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
    setTimeout(() => {
      localStorage.removeItem('token');
    }, 900000);

    dispatch(login(token)); // Dispatch the login action
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');

    dispatch(logout()); // Dispatch the logout action
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
