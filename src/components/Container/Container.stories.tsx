// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { Container } from './Container';

export default {
	title: 'Example/Container',
	component: Container
} as Meta;

export const ContentContainer = () => (
	<Container>This is a container and will include the bounding grid max-width</Container>
);
