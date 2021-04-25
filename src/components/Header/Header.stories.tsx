import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Header } from './Header';

export default {
	title: 'Example/Header',
	component: Header
	// argTypes: {
	//   buttonType: { control: { type: 'radio', options: ['default', 'success', 'danger'] } },
	// },
} as Meta;

export const HeaderComponent = () => <Header title='Header 1' headingLevel='h1' />;
