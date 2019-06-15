import React from 'react';
import { mount, shallow } from 'enzyme';

import Search from '.';
import Logo from '../../components/shared/Logo';
import SearchBar from '../../components/shared/SearchBar';

const props = {
  history: {},
};

describe('Search Screen', () => {
  describe('renders', () => {
    const router = jest.fn();
    it('render with props ', () => {
      const wrapper = shallow(<Search.WrappedComponent {...props} params={{ router }} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('content', () => {
    const router = jest.fn();
    const wrapper = mount(<Search.WrappedComponent {...props} params={{ router }} />);

    it('should contain 1 Logo ', () => {
      expect(wrapper.find(Logo)).toBeTruthy();
    });

    it('should contain 1 SearchBar', () => {
      expect(wrapper.find(SearchBar)).toBeTruthy();
    });
  });
});
