import { shuffle, without } from 'lodash';

import { SHUFFLE, EMPTY_TILE, SWAP } from '../constants';
import initialState from './initialState';

const getMatrixPosition = (index, cols) => ({
  row: Math.floor(index / cols),
  col: index % cols,
});

const foo = (numbers, src, dest) => {
  const copyArr = [...numbers];
  [copyArr[src], copyArr[dest]] = [copyArr[dest], copyArr[src]];
  return copyArr;
};

const canSwap = (gridIndex, emptyTileIndex) => {
  const { row: srcRow, col: srcCol } = getMatrixPosition(gridIndex, 4);
  const { row: destRow, col: destCol } = getMatrixPosition(emptyTileIndex, 4);
  return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
};

const swap = (state, gridIndex) => {
  const { puzzleNumbers } = state;
  const emptyTileIndex = state.puzzleNumbers.indexOf(EMPTY_TILE);
  if (canSwap(gridIndex, emptyTileIndex, 4, 4)) {
    // foo is a swapping function
    const swapped = foo(puzzleNumbers, gridIndex, emptyTileIndex);
    return swapped;
  }
  return puzzleNumbers;
};

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
        puzzleNumbers: swap(state, action.payload),
      };
    default:
      return state;
  }
};
