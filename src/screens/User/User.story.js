import React from 'react';
import { storiesOf } from '@storybook/react';
import Home from '.';

const stories = storiesOf('screens/Home', module);

stories
  .add('default', () => <Home />);

