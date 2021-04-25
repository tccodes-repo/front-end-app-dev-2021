import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { AuthFrame } from './AuthFrame';

export default {
	title: 'Example/AppFrame',
	component: AuthFrame
	// argTypes: {
	//   buttonType: { control: { type: 'radio', options: ['default', 'success', 'danger'] } },
	// },
} as Meta;

export const MainAppFrame = () => (
	<AuthFrame>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis modi vero minima corrupti vitae
			iste officia voluptatum maxime unde exercitationem architecto et, ad neque odio fugiat sint. Sunt
			suscipit quos esse reiciendis voluptatibus nobis quis maxime officia, autem hic veniam eaque fugiat
			non nemo enim sit consequatur iure amet cum?
		</p>
	</AuthFrame>
);
