import P from 'prop-types';
import { createContext, useReducer, useContext, useRef } from 'react';

// Actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// Data.js
export const globalState = {
  title: 'O título que contexto',
  body: 'O body do contexto',
  counter: 0,
};

// Reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar de título');
      return { ...state, title: action.payload };
    }
  }

  return { ...state };
};

// AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return <Context.Provider value={{ state, dispatch, changeTitle }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};

// H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  // return <h1 onClick={() => context.dispatch({ type: actions.CHANGE_TITLE })}>{context.state.title}</h1>;
  return (
    <>
      <input type="text" ref={inputRef} />
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>{context.state.title}</h1>;
    </>
  );
};

// App.jsx
function App() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;
