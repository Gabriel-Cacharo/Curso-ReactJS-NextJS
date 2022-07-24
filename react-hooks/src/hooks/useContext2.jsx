import { AppContext } from './contexts/AppContext';

import { Div } from './components/Div';

function UseContextPage2() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default UseContextPage2;
