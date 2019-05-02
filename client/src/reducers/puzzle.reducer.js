import { EXAMPLE } from '../constants';
import initialState from './initialState';

export default (state = initialState.puzzleState, action) => {
  switch (action.type) {
    case EXAMPLE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
