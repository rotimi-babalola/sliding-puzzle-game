import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

const App = () => (
  <Provider store={store}>
    <h1>Hello world</h1>
  </Provider>
);

render(<App />, document.getElementById('app'));
