import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from '.';

const stories = storiesOf('components/Logo', module);
const props = { style: {} };

stories
  .add('default', () => <Logo />)
  .add('headerMode', () => <Logo headerMode {...props} />);

