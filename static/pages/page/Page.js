import React from 'react';
import withProvider from 'util/withProvider';


const App = ({ name, dispatch }) => (
  <div>
    <h1>{name}</h1>
    <button onClick={onReverse(dispatch)}>Reverse</button>
  </div>
);


const onReverse = dispatch => () => {
  dispatch({ type: 'reverse' });
};


export default withProvider(App);
