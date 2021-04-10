import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  // argTypes: {
  //   buttonType: { control: { type: 'radio', options: ['default', 'success', 'danger'] } },
  // },
} as Meta;

export const Examples = () => (
  <>
    <Button>Button Default</Button>
    <Button buttonType='success'>Button Success</Button>
    <Button buttonType='danger'>Button Danger</Button>
  </>
)
export const Default = () => <Button>Button Default</Button>
export const Success = () => <Button buttonType='success'>Button Success</Button>
export const Danger = () => <Button buttonType='danger'>Button Danger</Button>
