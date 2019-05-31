import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import GridItem from '../../components/GridItem';

describe('Renders <GridItem /> component', () => {
  const props = {
    number: 1,
    index: 2,
    className: 'cell cell2',
    onClick: jest.fn(),
  };

  const wrapper = shallow(<GridItem {...props} />);

  it('renders a grid item', () => {
    expect(wrapper.find('.cell.cell2').exists).toBeTruthy();
    expect(wrapper.find('.cell.cell2').text()).toEqual('1');
  });
});
