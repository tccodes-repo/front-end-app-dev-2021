import React from 'react';
import { NavLink } from 'react-router-dom';
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
				<NavLink to='/' exact activeClassName={css.current}>
					Overview
				</NavLink>
			</li>
			<li>
				<NavLink to='/emails' activeClassName={css.current}>
					Emails
				</NavLink>
			</li>
			<li>
				<NavLink to='/recipients' activeClassName={css.current}>
					Recipients
				</NavLink>
			</li>
			<li>
				<NavLink to='/templates' activeClassName={css.current}>
					Templates
				</NavLink>
			</li>
		</ul>
	);
};
