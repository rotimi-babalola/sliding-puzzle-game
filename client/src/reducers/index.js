import { combineReducers } from 'redux';

import puzzleReducer from './puzzle.reducer';

const rootReducer = combineReducers({
  puzzle: puzzleReducer,
});

export default rootReducer;
