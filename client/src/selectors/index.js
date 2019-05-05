import { createSelector } from 'reselect';
import { EMPTY_TILE, NUM_OF_COLS } from '../constants';
import { getMatrixPosition } from '../utils';

const puzzleSelector = state => state.puzzle.puzzleNumbers;

export const emptyTileIndex = createSelector(
  [puzzleSelector],
  puzzleNumbers =>
    getMatrixPosition(puzzleNumbers.indexOf(EMPTY_TILE), NUM_OF_COLS),
);
