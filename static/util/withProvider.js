import React from 'react';
import { Provider, connect } from 'react-redux';


export default function(App) {
  const Connected = connect(v => v)(App);
  return ({ store }) => (
    <Provider store={store}>
      <Connected />
    </Provider>
  );
}
