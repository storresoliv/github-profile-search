import React from 'react';
import { mount, shallow } from 'enzyme';

import Logo from '.';

describe('Logo Component', () => {
  describe('renders', () => {
    it('render without props ', () => {
      const wrapper = shallow(<Logo />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('content', () => {
    it('should contain 2 span', () => {
      const wrapper = mount(<Logo />);

      expect(wrapper.find('span')).toHaveLength(2);
    });
  });
});

