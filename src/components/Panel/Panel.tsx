import React from 'react';
import css from './Panel.module.scss';

interface IPanelProps {
	title?: string;
	headingLevel?: 'h3' | 'h4';
}

export const Panel: React.FC<IPanelProps> = props => {
	const { title, headingLevel = 'h3', children } = props;
	return (
		<div className={css.panel}>
			{title && (headingLevel === 'h3' ? <h3>{title}</h3> : <h4>{title}</h4>)}
			{children}
		</div>
	);
};
