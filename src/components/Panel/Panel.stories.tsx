import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Panel } from './Panel';

export default {
  title: 'Example/Panel',
  component: Panel,
  // argTypes: {
  //   buttonType: { control: { type: 'radio', options: ['default', 'success', 'danger'] } },
  // },
} as Meta;

export const AppPanel = () => <Panel title={'Panel Title'}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, quas laborum? Velit sapiente in accusamus eius suscipit, dolore, sunt deleniti laboriosam aliquam enim voluptas atque iure tenetur expedita placeat odio!</p></Panel>
