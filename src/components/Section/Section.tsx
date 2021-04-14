import React from 'react';
import classes from 'classnames';
import css from './Section.module.scss';
import { Container } from 'components/Container';

interface ISectionProps {
	hasPadding?: boolean;
	title?: string;
	headingLevel?: 'h2' | 'h3';
}

export const Section: React.FC<ISectionProps> = props => {
	const { hasPadding = false, title, headingLevel = 'h2', children } = props;
	return (
		<section className={classes(css.section, { [css.hasPadding]: hasPadding })}>
			<Container>{title && (headingLevel === 'h2' ? <h2>{title}</h2> : <h3>{title}</h3>)}</Container>
			{children}
		</section>
	);
};
