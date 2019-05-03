import React from 'react';
import PropTypes from 'prop-types';

class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.getMatrixPosition = this.getMatrixPosition.bind(this);
  }

  getMatrixPosition() {
    const { index, numColumns } = this.props;
    return {
      row: Math.floor(index / numColumns),
      col: index % numColumns,
    };
  }

  getVisualPosition({ row, col }) {
    const { width, height } = this.props;
    // x = (col * width) + (5 * col) + 125
    // y = (row * height) + (5 * row) + 125
    return {
      x: col * width + 5 * col,
      y: row * height + 5 * row,
    };
  }

  render() {
    return <div className={this.props.className}>{this.props.number}</div>;
  }
}

GridItem.propTypes = {
  number: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  // numRows: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  numColumns: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default GridItem;
