import { configure } from '@storybook/react';

import sharedStories from './stories/sharedStories';

function loadStories() {
  sharedStories();
}

configure(loadStories, module);
