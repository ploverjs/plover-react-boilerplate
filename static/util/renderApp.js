import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

const debug = require('debug')('util/renderApp');


/* global document */


export default function(App, { reducer }) {
  const root = document.querySelector('#app');
  const state = JSON.parse(root.dataset.state);

  debug('page state: ', state);

  const store = createStore(reducer, state,
      applyMiddleware(promiseMiddleware));

  ReactDOM.render(<App store={store} />, root);
}

