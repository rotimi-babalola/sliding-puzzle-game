import expect from 'expect';
import { range } from 'lodash';

import puzzleReducer from '../../reducers/puzzle.reducer';
import { shuffleNumbers, isSolved } from '../../utils';
import { SHUFFLE, SWAP, EMPTY_TILE } from '../../constants';

const initialState = {
  puzzleNumbers: shuffleNumbers(range(0, 16)),
  isSolved: false,
  sortedNumbers: range(0, 16),
};

const action = {};

describe('Puzzle Reducer Tests', () => {
  it('should return initial state when there is no action', () => {
    expect(puzzleReducer(initialState, action)).toEqual(initialState);
  });

  it('should handle SHUFFLE', () => {
    const actionCopy = { ...action, type: SHUFFLE };
    expect(
      isSolved(puzzleReducer(initialState, actionCopy).puzzleNumbers),
    ).toEqual(false);

    expect(
      puzzleReducer(initialState, actionCopy).puzzleNumbers.indexOf(EMPTY_TILE),
    ).toEqual(initialState.puzzleNumbers.length - 1);
  });

  it('should handle SWAP', () => {
    const actionCopy = { ...action, type: SWAP, payload: 14 };

    expect(
      puzzleReducer(initialState, actionCopy).puzzleNumbers.indexOf(EMPTY_TILE),
    ).toEqual(actionCopy.payload);
  });
});
