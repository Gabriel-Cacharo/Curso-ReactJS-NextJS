import P from 'prop-types';
import { createContext, useContext, useReducer, useRef } from 'react';
import { buildActions } from './build-actions';
import { reducer } from './reducer';

export const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext();

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useRef para as actions não mudarem toda vez e serem sempre as mesmas, para não bugar um próximo useEffect que chame essas actions;
  // Caso esteja sem o useRef e um useEffect chame as actions, ele irá chamar infinitas vezes, pois as actions mudam toda vez que são chamadas.
  const actions = useRef(buildActions(dispatch));

  return <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>;
};

CounterContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCounterContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error('You have to use useCounterContext inside <CounterContextProvider />');
  }

  return [context[0], context[1]];
};
