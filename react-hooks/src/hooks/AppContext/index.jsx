import { createContext } from 'react';
import { useState } from 'react/cjs/react.production.min';

import { globalState } from './data';

export const GlobalContext = createContext();

// eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [contextState, setState] = useState(globalState);

  return <GlobalContext.Provider value={{ contextState, setState }}>{children}</GlobalContext.Provider>;
};
