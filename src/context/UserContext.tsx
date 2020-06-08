import React, { useState } from 'react';

interface IUser {
  firstName: string;
  lastName: string;
  loggedIn: boolean;
}

const initialContext = {
  user: {
    firstName: '',
    lastName: '',
    loggedIn: false
  },
  setUser: (user: IUser) => {}
};

export const UserContext = React.createContext(initialContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialContext.user);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
