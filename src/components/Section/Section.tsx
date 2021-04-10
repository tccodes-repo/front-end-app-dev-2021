import React from 'react';
import classes from 'classnames';
import css from './Section.module.scss';

interface SectionProps {
	hasPadding?: boolean;
}

export const Section: React.FC<SectionProps> = props => {
	const { hasPadding = false, children } = props;
	return (
		<section className={classes(css.section, { [css.hasPadding]: hasPadding })}>{children}</section>
	);
};
