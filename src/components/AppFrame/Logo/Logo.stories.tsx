// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Logo } from './Logo';

export default {
  title: 'Example/Logo',
  component: Logo
  // argTypes: {
  //   buttonType: { control: { type: 'radio', options: ['default', 'success', 'danger'] } },
  // },
} as Meta;

export const ApplicationLogo = () => <Logo />
