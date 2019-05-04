import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import GridItem from './GridItem';
import { isSolved } from '../utils';

import '../styles/scss/grid.scss';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.handleButttonClick = this.handleButttonClick.bind(this);
    this.handleGridItemClick = this.handleGridItemClick.bind(this);
  }

  handleButttonClick() {
    this.props.shuffleNumbers();
  }

  handleGridItemClick(gridIndex) {
    this.props.swapNumbers(gridIndex);
  }

  render() {
    const solved = isSolved(this.props.puzzleNumbers);
    return (
      <React.Fragment>
        <p>{`Empty Tile Index ${this.props.emptyTileIndex}`}</p>
        <p>{solved ? 'Solved!' : 'Not solved'}</p>
        <div className="container">
          {this.props.puzzleNumbers.map((el, index) => (
            <GridItem
              number={el}
              index={index}
              className={`cell cell${el + 1}`}
              numRows={4}
              numColumns={4}
              key={uniqueId()}
              height={125}
              width={125}
              onClick={this.handleGridItemClick}
            />
          ))}
        </div>
        <button
          type="button"
          className="button"
          onClick={this.handleButttonClick}
        >
          Shuffle
        </button>
      </React.Fragment>
    );
  }
}

Grid.propTypes = {
  puzzleNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  shuffleNumbers: PropTypes.func.isRequired,
  swapNumbers: PropTypes.func.isRequired,
  emptyTileIndex: PropTypes.number.isRequired,
};

export default Grid;
