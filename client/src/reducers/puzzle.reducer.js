import { shuffle, without } from 'lodash';

import { SHUFFLE } from '../constants';
import initialState from './initialState';

// The empty is represented by the last number in the array
const EMPTY_TILE = 15;

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
