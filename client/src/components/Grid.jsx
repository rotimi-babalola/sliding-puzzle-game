import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import '../styles/scss/grid.scss';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.handleButttonClick = this.handleButttonClick.bind(this);
  }

  handleButttonClick() {
    this.props.shuffleNumbers();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          {this.props.puzzleNumbers.map(el => (
            <div className={`cell cell${el + 1}`} key={uniqueId()}>
              {el}
            </div>
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
};

export default Grid;
