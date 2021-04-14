import React from 'react';
import css from './PageFrame.module.scss';
import { Container } from 'components/Container';

interface IPageFrame {
	title: string;
}

export const PageFrame: React.FC<IPageFrame> = props => {
	const { title, children } = props;

	return (
		<main>
			<Container>
				<h1>{title}</h1>
			</Container>
			{children}
		</main>
	);
};
