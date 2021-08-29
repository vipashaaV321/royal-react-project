import React, { useState, useContext } from 'react';
import AuthContext from './AuthContext';
const Logout = () => {
  const contextType = useContext(AuthContext);
  return (
    <>
      <button onClick={contextType.logout}>Logout</button>
    </>
  );
};
export default Logout;
