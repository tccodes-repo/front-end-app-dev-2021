import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { PageFrame } from './PageFrame';

export default {
	title: 'Example/AppFrame',
	component: PageFrame
	// argTypes: {
	//   buttonType: { control: { type: 'radio', options: ['default', 'success', 'danger'] } },
	// },
} as Meta;

export const MainPageFrame = () => (
	<PageFrame title='Header 1'>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error alias autem sequi reprehenderit
			illum id! Reprehenderit in sed delectus, reiciendis ex aperiam a dolore vel saepe nobis laboriosam
			porro eos quas, possimus officiis officia molestias placeat animi! Voluptate pariatur dignissimos
			animi, ad modi non sint cupiditate. Saepe culpa quia cupiditate iusto! Aspernatur quaerat totam
			atque quidem consequuntur consectetur tenetur asperiores praesentium minus magni distinctio vitae
			similique est, autem consequatur architecto aut, maiores quos temporibus veniam. Suscipit, dicta
			expedita consequatur ipsa eaque ad non? Quaerat nemo aut soluta praesentium ducimus similique
			beatae vel repudiandae ipsa. Mollitia dolorem consequatur quaerat officiis aspernatur?
		</p>
	</PageFrame>
);
