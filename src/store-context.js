import React, { createContext, useState } from "react";

const StoreContext = createContext([{}, () => {}]);

const StoreProvider = ({ children }) => {
  const [state, setState] = useState({
    chosenCategory: 'all',
    category: ['all'],
    count: 10,
    firstName: 'Chuck',
    lastName: 'Norris',
    jokes: [],
    uniqueIdarray: [],
    searchId: ''
  });

  return (
    <StoreContext.Provider value={[state, setState]}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };