import { SHUFFLE, SWAP } from '../constants';

export const shuffleNumbers = () => ({
  type: SHUFFLE,
});

export const swapNumbers = gridIndex => ({
  type: SWAP,
  payload: gridIndex,
});
