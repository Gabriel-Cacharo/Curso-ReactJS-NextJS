import { useContext } from 'react';

import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line
export const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};
