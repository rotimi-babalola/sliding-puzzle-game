import { createSelector } from 'reselect';
import { EMPTY_TILE } from '../constants';

const puzzleSelector = state => state.puzzle.puzzleNumbers;

export const emptyTileIndex = createSelector(
  [puzzleSelector],
  puzzleNumbers => puzzleNumbers.indexOf(EMPTY_TILE),
);
