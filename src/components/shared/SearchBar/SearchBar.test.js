import React from 'react';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';

import SearchBar from '.';

const props = {
  onChange: jest.fn(),
  onSearch: jest.fn(),
  value: '',
  style: {},
};

describe('SearchBar Component', () => {
  describe('renders', () => {
    it('renders without props', () => {
      const wrapper = shallow(<SearchBar />);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders with props', () => {
      const rendered = shallow(<SearchBar {...props} />);
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('props', () => {
    it('should call onSearch when click on Button', () => {
      const callback = spy();
      const wrapper = mount(<SearchBar {...props} onSearch={callback} />);

      wrapper.find('button').simulate('click');

      expect(callback.called).toBe(true);
    });

    it('should call onChange when input change', () => {
      const callback = spy();
      const wrapper = mount(<SearchBar {...props} onChange={callback} />);
      const input = wrapper.find('input[name="search"]');

      input.simulate('change', { target: { value: 'keyword', name: 'search' } });

      const value = callback.getCall(0).args[0];

      expect(value).toEqual('keyword');
    });
  });

  describe('content', () => {
    it('should contain a input field', () => {
      const wrapper = mount(<SearchBar {...props} />);

      expect(wrapper.find('input')).toHaveLength(1);
    });

    it('should contain a button', () => {
      const wrapper = mount(<SearchBar {...props} />);

      expect(wrapper.find('button')).toHaveLength(1);
    });
  });
});

