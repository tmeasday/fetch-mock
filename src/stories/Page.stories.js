import React from 'react';
import { decorator } from '../__mocks__/isomorphic-fetch';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
  component: Page,
  decorators: [decorator],
  parameters: {
    fetch: {
      json: {
        JavaScript: 3390991,
        'C++': 44974,
        TypeScript: 15530,
        CoffeeScript: 12253,
        Python: 9383,
        C: 5341,
        Shell: 5115,
        HTML: 3420,
        CSS: 3171,
        Makefile: 189,
      },
    },
  },
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
