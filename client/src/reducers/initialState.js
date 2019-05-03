import { range, shuffle, without } from 'lodash';

import { EMPTY_TILE } from '../constants';

const numbers = range(0, 16);

export default {
  puzzleState: {
    puzzleNumbers: shuffle(without(numbers, EMPTY_TILE)).concat(EMPTY_TILE),
  },
};
