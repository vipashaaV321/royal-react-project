import React from 'react';

const authContext = React.createContext({
  auth: null,
  login: () => {},
  logout: () => {}
});

export default authContext;
