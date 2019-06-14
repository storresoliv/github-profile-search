import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from '.';

const stories = storiesOf('shared/Loader', module);

stories
  .add('default', () => <Loader />);

