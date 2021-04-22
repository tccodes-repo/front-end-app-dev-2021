import React from 'react';
import css from './PageFrame.module.scss';
import { Container } from 'components/Container';

interface IPageFrame {
	title: string;
	ContentRight?: React.FC;
}

export const PageFrame: React.FC<IPageFrame> = props => {
	const { title, ContentRight, children } = props;

	return (
		<main className={css.main}>
			<Container className={css.container}>
				<h1 className={css.pageFrameTitle}>{title}</h1>
				{ContentRight && <ContentRight />}
			</Container>
			{children}
		</main>
	);
};
