import { SHUFFLE, SWAP } from '../constants';
import { swap, shuffleNumbers } from '../utils';
import initialState from './initialState';

export default (state = initialState.puzzleState, action) => {
  switch (action.type) {
    case SHUFFLE:
      return {
        ...state,
        puzzleNumbers: shuffleNumbers(state.puzzleNumbers),
      };
    case SWAP:
      return {
        ...state,
        puzzleNumbers: swap(state.puzzleNumbers, action.payload),
      };
    default:
      return state;
  }
};
