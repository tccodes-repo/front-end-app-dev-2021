import React from 'react';
import classes from 'classnames';
import css from './Navigation.module.scss';

interface INavigationProps {
	themeColor?: 'light' | 'dark';
}

export const Navigation: React.FC<INavigationProps> = props => {
	const { themeColor = 'dark' } = props;

	return (
		<ul className={classes(css.navLinks, css[themeColor])}>
			<li>
				<a href='#'>Overview</a>
			</li>
			<li>
				<a href='#'>Emails</a>
			</li>
			<li>
				<a href='#'>Recipients</a>
			</li>
			<li>
				<a href='#'>Templates</a>
			</li>
		</ul>
	);
};
