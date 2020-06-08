import React, { useState } from 'react';

interface IPeople {
  name: string;
}

const initialContext = {
  person: {
    name: ''
  },
  setPerson: (user: IPeople) => {}
};

export const PersonContext = React.createContext(initialContext);

export const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState(initialContext.person);

  return <PersonContext.Provider value={{ person, setPerson }}>{children}</PersonContext.Provider>;
};
