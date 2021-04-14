import React from 'react';
import css from './Container.module.scss';
import classes from 'classnames';

interface IContainerProps {
	className?: string;
}

export const Container: React.FC<IContainerProps> = props => (
	<div className={classes(css.container, props.className)}>{props.children}</div>
);
