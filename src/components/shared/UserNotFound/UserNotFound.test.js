import React from 'react';
import { mount, shallow } from 'enzyme';

import UserNotFound from '.';

describe('UserNotFound Component', () => {
  describe('renders', () => {
    it('render without props ', () => {
      const wrapper = shallow(<UserNotFound />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('content', () => {
    it('should contain 1 paragraph', () => {
      const wrapper = mount(<UserNotFound />);

      expect(wrapper.find('p')).toHaveLength(1);
    });
  });
});

