import React from 'react';
import { mount, shallow } from 'enzyme';

import Logo from '.';

const props = { headerMode: true, style: {} };

describe('Logo Component', () => {
  describe('renders', () => {
    it('render without props ', () => {
      const wrapper = shallow(<Logo />);
      expect(wrapper).toMatchSnapshot();
    });
    it('render with props ', () => {
      const wrapper = shallow(<Logo {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('content', () => {
    it('should contain 2 span', () => {
      const wrapper = mount(<Logo {...props} />);

      expect(wrapper.find('span')).toHaveLength(2);
    });
  });
});

