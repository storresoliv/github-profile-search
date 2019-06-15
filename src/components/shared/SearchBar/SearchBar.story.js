import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchBar from '.';

const stories = storiesOf('components/SearchBar', module);

const props = {
  style: {},
  value: '',
  onChange: action('onChange Action'),
  onSearch: action('onSearch Action'),
};

stories
  .add('default', () => <SearchBar {...props} />);

