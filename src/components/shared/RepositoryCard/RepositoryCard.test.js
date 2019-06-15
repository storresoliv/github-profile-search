import React from 'react';
import { mount, shallow } from 'enzyme';

import RepositoryCard from '.';

const props = {
  title: 'Lorem Impsum',
  description: 'lorem impsum dolor a met.',
  stars: 123,
  url: 'https://lorem.pixel',
};

describe('RepositoryCard Component', () => {
  describe('renders', () => {
    it('renders with props', () => {
      const rendered = shallow(<RepositoryCard {...props} />);
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('content', () => {
    it('should contain 1 link element', () => {
      const wrapper = mount(<RepositoryCard {...props} />);

      expect(wrapper.find('a')).toHaveLength(1);
    });

    it('should contain 1 paragraphs', () => {
      const wrapper = mount(<RepositoryCard {...props} />);

      expect(wrapper.find('p')).toHaveLength(1);
    });

    it('should contain 1 image', () => {
      const wrapper = mount(<RepositoryCard {...props} />);

      expect(wrapper.find('img')).toHaveLength(1);
    });

    it('should contain 1 span', () => {
      const wrapper = mount(<RepositoryCard {...props} />);

      expect(wrapper.find('span')).toHaveLength(1);
    });
  });
});

