import React from 'react';
import Grid from './Grid';

import '../styles/scss/puzzle.scss';

const Puzzle = () => (
  <div className="puzzle">
    <h1 className="heading">Sliding Puzzle Game</h1>
    <Grid />
  </div>
);

export default Puzzle;
