import React from 'react';
import { storiesOf } from '@storybook/react';
import UserNotFound from '.';

const stories = storiesOf('components/UserNotFound', module);

stories
  .add('default', () => <UserNotFound />);

