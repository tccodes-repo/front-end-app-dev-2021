import React from 'react';
import classes from 'classnames';
import css from './MainNavigation.module.scss';
import { Navigation } from '../Navigation';
import IconAccount from 'assets/icon-account.png';
import { Logo } from '../Logo/Logo';

export const MainNavigation: React.FC = props => {
	return (
		<nav className={css.nav}>
			<Logo />
			<Navigation />
			<ul className={css.accountMenu}>
				<li>
					<a href='#'>
						<img src={IconAccount} title='My Account' />
					</a>
				</li>
			</ul>
		</nav>
	);
};
