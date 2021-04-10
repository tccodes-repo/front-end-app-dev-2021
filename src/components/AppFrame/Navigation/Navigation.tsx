import React from 'react';
import classes from 'classnames';
import css from './Navigation.module.scss';

interface NavigationProps {
	themeColor?: 'light' | 'dark';
}

export const Navigation: React.FC<NavigationProps> = props => {
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
