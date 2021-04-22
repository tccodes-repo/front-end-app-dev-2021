import React from 'react';
import classes from 'classnames';
import css from './Button.module.scss';

interface IButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	buttonType?: 'default' | 'success' | 'danger';
}

export const Button: React.FC<IButtonProps> = props => {
	const { buttonType = 'default', children } = props;
	return (
		<button {...props} className={classes(css.button, css[buttonType])}>
			{children}
		</button>
	);
};
