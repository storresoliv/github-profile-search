import { configure } from '@storybook/react';

import componentsStories from './stories/componentsStories';
import '../src/index.css';

function loadStories() {
  componentsStories();
}

configure(loadStories, module);
