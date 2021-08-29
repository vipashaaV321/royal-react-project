import React, { useState, useContext } from 'react';
import AuthContext from './AuthContext';
const Login = () => {
  const contextType = useContext(AuthContext);
  return (
    <>
      <button onClick={contextType.login}>Login</button>
    </>
  );
};
export default Login;
