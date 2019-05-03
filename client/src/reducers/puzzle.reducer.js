import { shuffle, without } from 'lodash';

import { SHUFFLE, EMPTY_TILE, SWAP } from '../constants';
import { swap } from '../utils';
import initialState from './initialState';

export default (state = initialState.puzzleState, action) => {
  switch (action.type) {
    case SHUFFLE:
      return {
        ...state,
        puzzleNumbers: shuffle(without(state.puzzleNumbers, EMPTY_TILE)).concat(
          EMPTY_TILE,
        ),
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
