import { range } from 'lodash';

import { shuffleNumbers } from '../utils';

const numbers = range(0, 16);

export default {
  puzzleState: {
    puzzleNumbers: shuffleNumbers(numbers),
    isSolved: false,
    sortedNumbers: range(0, 16),
  },
};
