import { configure } from '@storybook/react';

import sharedStories from './stories/sharedStories';
import '../src/index.css';

function loadStories() {
  sharedStories();
}

configure(loadStories, module);
