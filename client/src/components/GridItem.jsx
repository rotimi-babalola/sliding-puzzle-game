import React from 'react';
import PropTypes from 'prop-types';

class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.getMatrixPosition = this.getMatrixPosition.bind(this);
  }

  getMatrixPosition() {
    const { index, numRows, numColumns } = this.props;
  }

  render() {
    const { number, className } = this.props;
    return <div className={className}>{number}</div>;
  }
}

GridItem.propTypes = {
  number: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  numRows: PropTypes.number.isRequired,
  numColumns: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default GridItem;
