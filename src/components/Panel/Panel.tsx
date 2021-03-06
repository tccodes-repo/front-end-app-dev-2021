import React from 'react';
import css from './Panel.module.scss';
import classes from 'classnames';
import { IComponentWithOptionalTitleProps } from 'common/interfaces/IComponentTitles';
import { Header } from 'components/Header';

interface IPanelProps extends IComponentWithOptionalTitleProps {
	className?: string;
}

export const Panel: React.FC<IPanelProps> = props => {
	const { title, headingLevel = 'h3', className, children } = props;
	return (
		<div className={classes(css.panel, className)}>
			{title && <Header title={title} headingLevel={headingLevel} />}
			{children}
		</div>
	);
};
