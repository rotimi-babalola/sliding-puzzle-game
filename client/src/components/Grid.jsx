import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import GridItem from './GridItem';
import { isSolved } from '../utils';

import '../styles/scss/grid.scss';

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleGridItemClick = this.handleGridItemClick.bind(this);
    this.getSolvedText = this.getSolvedText.bind(this);

    this.state = {
      numberOfMoves: 0,
    };
  }

  getSolvedText(solved) {
    const { numberOfMoves } = this.state;
    if (solved) {
      return `Solved in ${numberOfMoves} moves`;
    }
    return 'Not solved';
  }

  handleButtonClick() {
    this.props.shuffleNumbers();
    // reset number of moves
    this.setState({
      numberOfMoves: 0,
    });
  }

  handleGridItemClick(gridIndex) {
    this.props.swapNumbers(gridIndex);
    this.setState(prevState => ({
      numberOfMoves: prevState.numberOfMoves + 1,
    }));
  }

  render() {
    const solved = isSolved(this.props.puzzleNumbers);
    const { row, col } = this.props.emptyTileIndex;
    return (
      <div className="container-wrapper">
        <div className="container">
          {this.props.puzzleNumbers.map((el, index) => (
            <GridItem
              number={el}
              index={index}
              className={`cell cell${el + 1}`}
              key={uniqueId()}
              onClick={this.handleGridItemClick}
            />
          ))}
          <button
            type="button"
            className="button"
            onClick={this.handleButtonClick}
          >
            {solved ? 'Start' : 'Restart'}
          </button>
        </div>
        <div className="game-info">
          <p className="moves">{`Moves made: ${this.state.numberOfMoves}`}</p>
          <p className="empty-tile">{`Empty Tile Grid Index - Row: ${row}, Column: ${col}`}</p>
          <p className="solved">{this.getSolvedText(solved)}</p>
        </div>
      </div>
    );
  }
}

Grid.propTypes = {
  puzzleNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  shuffleNumbers: PropTypes.func.isRequired,
  swapNumbers: PropTypes.func.isRequired,
  emptyTileIndex: PropTypes.shape({
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
  }).isRequired,
};

export default Grid;
