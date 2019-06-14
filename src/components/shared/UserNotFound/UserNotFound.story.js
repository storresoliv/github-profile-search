import React from 'react';
import { storiesOf } from '@storybook/react';
import UserNotFound from '.';

const stories = storiesOf('shared/UserNotFound', module);

stories
  .add('default', () => <UserNotFound />);

