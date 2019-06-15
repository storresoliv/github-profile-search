import React from 'react';
import { storiesOf } from '@storybook/react';
import RepositoryCard from '.';

const stories = storiesOf('components/RepositoryCard', module);

const props = {
  title: 'Lorem Pixel 😅',
  description: 'Lorem Pixel Dolor asit emer.',
  stars: 0,
  url: 'https://lorem.pixel.com',
};

stories
  .add('default', () => <RepositoryCard {...props} />);

