import React from 'react';
import css from './Panel.module.scss';
import classes from 'classnames';

interface IPanelProps {
	title?: string;
	className?: string;
	headingLevel?: 'h3' | 'h4';
}

export const Panel: React.FC<IPanelProps> = props => {
	const { title, headingLevel = 'h3', className, children } = props;
	return (
		<div className={classes(css.panel, className)}>
			{title && (headingLevel === 'h3' ? <h3>{title}</h3> : <h4>{title}</h4>)}
			{children}
		</div>
	);
};
