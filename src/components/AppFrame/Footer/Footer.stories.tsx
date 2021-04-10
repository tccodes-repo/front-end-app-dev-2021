import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Footer } from './Footer';

export default {
  title: 'Example/AppFrame',
  component: Footer
  // argTypes: {
  //   buttonType: { control: { type: 'radio', options: ['default', 'success', 'danger'] } },
  // },
} as Meta;

export const MainFooter = () => <Footer />
