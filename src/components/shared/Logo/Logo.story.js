import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from '.';

const stories = storiesOf('shared/Logo', module);

stories
  .add('default', () => <Logo />)
  .add('headerMode', () => <Logo headerMode />);

