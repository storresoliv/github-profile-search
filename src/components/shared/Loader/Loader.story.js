import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from '.';

const stories = storiesOf('components/Loader', module);

stories
  .add('default', () => <Loader />);

