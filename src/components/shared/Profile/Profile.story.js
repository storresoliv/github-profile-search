import React from 'react';
import { storiesOf } from '@storybook/react';
import Profile from '.';

const stories = storiesOf('shared/Profile', module);

const props = {
  image: 'https://picsum.photos/id/1/280/280',
  user: {
    name: 'Felipe Sousa',
    username: 'felipesousa',
    organization: 'felipzsousa',
    location: 'Tatooine',
    starCount: 800,
    repositoriesCount: 92,
    followersCount: 342,
  },
};

stories
  .add('default', () => <Profile {...props} />);

