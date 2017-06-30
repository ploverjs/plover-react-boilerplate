import { handleActions } from 'redux-actions';

export default handleActions({
  // actions
  reverse(state) {
    const name = state.name.split('').reverse().join('');
    return { ...state, name };
  }
}, null);
