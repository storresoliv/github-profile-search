import React from 'react';
import { mount, shallow } from 'enzyme';

import Profile from '.';

const props = {
  image: 'https://picsum.photos/id/1/280/280',
  name: 'Felipe Sousa',
  username: 'felipesousa',
  organization: 'felipzsousa',
  location: 'Tatooine',
  starCount: 800,
  repositoriesCount: 92,
  followersCount: 342,
};

describe('Profile Component', () => {
  describe('renders', () => {
    it('renders with props', () => {
      const rendered = shallow(<Profile {...props} />);
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('content', () => {
    const wrapper = mount(<Profile {...props} />);

    it('should contain 6 image', () => {
      expect(wrapper.find('img')).toHaveLength(6);
    });

    it('should contain 1 paragraph', () => {
      expect(wrapper.find('p')).toHaveLength(1);
    });


    it('should contain 6 spans', () => {
      expect(wrapper.find('span')).toHaveLength(6);
    });
  });
});

