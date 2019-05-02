import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import '../styles/scss/grid.scss';

const Grid = props => (
  <div className="container">
    {props.sortedPositions.map(el => (
      <div className={`cell cell${el + 1}`} key={uniqueId()}>
        {el}
      </div>
    ))}
  </div>
);

Grid.propTypes = {
  sortedPositions: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Grid;
