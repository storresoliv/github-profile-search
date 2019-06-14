import React from 'react';
import { mount, shallow } from 'enzyme';

import RepositoryCard from '.';

const props = {
  title: 'Lorem Impsum',
  description: 'lorem impsum dolor a met.',
  stars: 123,
};

describe('RepositoryCard Component', () => {
  describe('renders', () => {
    it('renders without props', () => {
      const wrapper = shallow(<RepositoryCard />);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders with props', () => {
      const rendered = shallow(<RepositoryCard {...props} />);
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('content', () => {
    it('should contain 2 paragraphs', () => {
      const wrapper = mount(<RepositoryCard />);

      expect(wrapper.find('p')).toHaveLength(2);
    });

    it('should contain 1 image', () => {
      const wrapper = mount(<RepositoryCard />);

      expect(wrapper.find('img')).toHaveLength(1);
    });

    it('should contain 1 span', () => {
      const wrapper = mount(<RepositoryCard />);

      expect(wrapper.find('span')).toHaveLength(1);
    });
  });
});

