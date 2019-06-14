import { configure } from '@storybook/react';

import sharedStories from './stories/sharedStories';
import screensStories from './stories/screensStories';
import '../src/index.css';

function loadStories() {
  sharedStories();
  screensStories();
}

configure(loadStories, module);
