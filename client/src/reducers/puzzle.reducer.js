import { shuffle, without } from 'lodash';

import { SHUFFLE, EMPTY_TILE } from '../constants';
import initialState from './initialState';

// The empty is represented by the last number in the array

export default (state = initialState.puzzleState, action) => {
  switch (action.type) {
    case SHUFFLE:
      return {
        ...state,
        puzzleNumbers: shuffle(without(state.puzzleNumbers, EMPTY_TILE)).concat(
          EMPTY_TILE,
        ),
      };
    default:
      return state;
  }
};
