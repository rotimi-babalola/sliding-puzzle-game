import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Puzzle from '../../components/Puzzle';

describe('Renders <Puzzle /> component correctly', () => {
  const wrapper = shallow(<Puzzle />);

  it('renders heading', () => {
    expect(wrapper.find('.heading').text()).toEqual('Sliding Puzzle Game');
    expect(wrapper.find('.puzzle').exists).toBeTruthy();
  });
});
