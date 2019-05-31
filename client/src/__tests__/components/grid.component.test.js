import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { range } from 'lodash';
import { EMPTY_TILE } from '../../constants';
import { getMatrixPosition } from '../../utils';

import Grid from '../../components/Grid';

describe('Renders <Grid /> component', () => {
  const props = {
    puzzleNumbers: range(0, 16),
    shuffleNumbers: jest.fn(),
    swapNumbers: jest.fn(),
    emptyTileIndex: getMatrixPosition(EMPTY_TILE),
  };

  const wrapper = shallow(<Grid {...props} />);

  it('renders the grid', () => {
    expect(wrapper.find('.container').exists).toBeTruthy();
    expect(wrapper.find('.container-wrapper').exists).toBeTruthy();
    expect(wrapper.find('GridItem').exists()).toBe(true);
    expect(wrapper.find('GridItem').length).toEqual(props.puzzleNumbers.length);
  });
});
