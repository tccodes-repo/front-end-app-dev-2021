import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input } from './Input';
import { TInput } from "common/types/TInput";


export default {
  title: 'Example/Form',
  component: Input,
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    placeholder: {
      control: { type: 'text' }
    }
  },
} as Meta<TInput>;

export const FormInput = (args: TInput) => <Input {...args} />

FormInput.args = {
  label: "This is a label",
  placeholder: "This is a placeholder"
}
