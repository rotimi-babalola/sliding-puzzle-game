import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import Puzzle from './components/Puzzle';

import './styles/scss/app.scss';

const App = () => (
  <Provider store={store}>
    <Puzzle />
  </Provider>
);

render(<App />, document.getElementById('app'));
