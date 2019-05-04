/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { index } = this.props;
    this.props.onClick(index);
  }

  render() {
    return (
      <div className={this.props.className} onClick={this.handleClick}>
        {this.props.number}
      </div>
    );
  }
}

GridItem.propTypes = {
  number: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GridItem;
