import React from 'react';
import { mount, shallow } from 'enzyme';

import User from '.';
import Logo from '../../components/shared/Logo';
import SearchBar from '../../components/shared/SearchBar';
import Loader from '../../components/shared/Loader';
import RepositoryCard from '../../components/shared/RepositoryCard';
import Profile from '../../components/shared/Profile';
import UserNotFound from '../../components/shared/UserNotFound';

const props = {
  history: {},
  location: {
    state: { user: 'jonhdue' },
  },
};

const profileState = {
  image: 'https://picsum.photos/id/1/280/280',
  name: 'Felipe Sousa',
  username: 'felipesousa',
  organization: 'felipzsousa',
  location: 'Tatooine',
  starCount: '800',
  repositoriesCount: 92,
  followersCount: 342,
};

describe('Search Screen', () => {
  describe('renders', () => {
    const router = jest.fn();

    it('render with props ', () => {
      const wrapper = shallow(<User.WrappedComponent {...props} params={{ router }} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('content', () => {
    const router = jest.fn();
    let wrapper;

    beforeAll(() => {
      wrapper = mount(<User.WrappedComponent {...props} params={{ router }} />);
      wrapper.setState({ profile: profileState });
    });

    it('should contain 1 Logo ', () => {
      expect(wrapper.find(Logo)).toBeTruthy();
    });

    it('should contain 1 SearchBar', () => {
      expect(wrapper.find(SearchBar)).toBeTruthy();
    });

    it('should contain 1 Profile', () => {
      expect(wrapper.find(Profile)).toBeTruthy();
    });

    it('should contain RepositoryCard\'s', () => {
      expect(wrapper.find(RepositoryCard)).toBeTruthy();
    });

    it('should show UserNotFound when exists Error', () => {
      wrapper.setState({ loading: false, fetching: false, error: true });
      expect(wrapper.find(UserNotFound)).toBeTruthy();
    });

    it('should show Loader"s component when load State is true', () => {
      wrapper.setState({ loading: true });
      expect(wrapper.find(Loader)).toBeTruthy();
    });
  });
});

