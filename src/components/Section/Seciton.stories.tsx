import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Section } from './Section';

export default {
  title: 'Example/Section',
  component: Section
} as Meta;

export const AppSection = () => <Section>This is a section</Section>
