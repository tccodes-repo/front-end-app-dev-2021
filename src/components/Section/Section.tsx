import React from 'react';
import classes from 'classnames';
import css from './Section.module.scss';
import { Container } from 'components/Container';
import { ComponentWithOptionalTitleProps } from 'common/interfaces/ComponentTitles';
import { Header } from 'components/Header';

interface ISectionProps extends ComponentWithOptionalTitleProps {
	hasPadding?: boolean;
}

export const Section: React.FC<ISectionProps> = props => {
	const { hasPadding = false, title, headingLevel = 'h2', children } = props;
	return (
		<section className={classes(css.section, { [css.hasPadding]: hasPadding })}>
			{title && (
				<Container className={css.container}>
					<Header title={title} headingLevel={headingLevel} />
				</Container>
			)}
			{children}
		</section>
	);
};
