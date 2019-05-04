import { EMPTY_TILE, NUM_OF_COLS } from '../constants';

export const getMatrixPosition = (index, cols) => ({
  row: Math.floor(index / cols),
  col: index % cols,
});

const canSwap = (gridIndex, emptyTileIndex) => {
  const { row: srcRow, col: srcCol } = getMatrixPosition(
    gridIndex,
    NUM_OF_COLS,
  );
  const { row: destRow, col: destCol } = getMatrixPosition(
    emptyTileIndex,
    NUM_OF_COLS,
  );
  return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
};

export const swap = (puzzleNumbers, gridIndex) => {
  const emptyTileIndex = puzzleNumbers.indexOf(EMPTY_TILE);
  if (canSwap(gridIndex, emptyTileIndex)) {
    const copyArr = [...puzzleNumbers];
    [copyArr[gridIndex], copyArr[emptyTileIndex]] = [
      copyArr[emptyTileIndex],
      copyArr[gridIndex],
    ];
    return copyArr;
  }
  return puzzleNumbers;
};
