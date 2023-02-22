import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from './templates/Home';

import './styles/global-styles.css';
import { CounterContextProvider } from './contexts/CounterContext';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
